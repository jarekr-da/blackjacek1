import React, {useEffect} from 'react';
import Ledger from '@daml/ledger';
import {useFetchByKey, useLedger, useParty, useStreamQueries} from "@daml/react";
import {BJ, User} from '@daml.js/blackjacek';
import {
    Card,
    DealerDeck,
    Deck, GameEnd,
    PlayerDecision,
    PlayerAsksForCard,
    PlayerStands,
    Rank,
    Suit
} from "@daml.js/blackjacek/lib/BJ";
import {useStreamFetchByKeys} from "@daml/react/defaultLedgerContext";
import { FetchResult} from "@daml/react";
import {ContractId, Int, Party} from "@daml/types";
import {PlayerWantsToJoin} from "../../daml.js/blackjacek-0.1.0/lib/BJ";

const BJMain: React.FC = () => {
    const [dealerName, setDealerName] = React.useState('');

    const [dealer, setDealer]  = React.useState(false);
    const [player, setPlayer]  = React.useState(false);
    const [details, setDetails]  = React.useState(false);
    const party = useParty();
    const ledger = useLedger();
    const allDealerDecks = useStreamQueries(BJ.InitialDeck).contracts;
    const allPlayersToAccept = useStreamQueries(BJ.PlayerWantsToJoin).contracts;
    const allTables = useStreamQueries(BJ.PlayerDecision).contracts;
    const toDeal = useStreamQueries(BJ.PlayerAsksForCard).contracts;
    const toFinish = useStreamQueries(BJ.PlayerStands).contracts
    const finished = useStreamQueries(BJ.GameEnd).contracts

    const isPlaying = allDealerDecks.length + allPlayersToAccept.length + allTables.length + toDeal.length + toFinish.length > 0;

    const initDealerDeck = () => {
        const deck = createRandomDeck();
        const dealer: DealerDeck = {
            dealer: party, deck: deck
        };
        const newDealerContract = ledger.create(BJ.InitialDeck, dealer);
        newDealerContract.then(ctr => {
                console.log("dealer created");
                console.log(ctr);
                setDealer(true);
            }
        );
    };

    const findGame = () => {
        const playerAtTableData = {player:party, dealer: dealerName}
        const newPlayer = ledger.create(BJ.PlayerWantsToJoin, playerAtTableData);
        newPlayer.then(ctr => {
                console.log("player at table created");
                console.log(ctr);
                setPlayer(true);
            }
        );
    };

    const acceptGame = (contractId: ContractId<PlayerWantsToJoin>) => () => {
        console.log("trying to accept:" + contractId);
        const accepted = ledger.exercise(BJ.PlayerWantsToJoin.AcceptGame, contractId, {});
        accepted.then( ctr => {
           console.log("player accepted");

        });
    };



    return <div className={"blackjack"}>
        <h2>BlackJack</h2>
        {!isPlaying ?
            <div className={"choice"}>
                <div>

                    <h3>Choose side</h3>
                    <button onClick={initDealerDeck}>play as dealer</button>


                </div>
                <div>
                    <h3>play with dealer</h3>
                    <input type={"text"} value={dealerName} onChange={e => setDealerName(e.currentTarget.value)}/>
                    <button onClick={findGame}>join table</button>
                </div>
            </div> : <span></span>
        }
        <div>
            <h3>my decisions</h3>
            <ul> {
                allDealerDecks.map(d => <li key={d.contractId}>name: {d.payload.dealer} cards:{d.payload.deck.value.length}</li>)
            }
            </ul>
        </div>

        <div>
            <h3>players to accept</h3>
            <ul> {
                    allPlayersToAccept.map(d =>
                        <li key={d.contractId}>dealer: {d.payload.dealer} player: {d.payload.player}
                            {((d.payload.dealer === party) ?
                                <button onClick={acceptGame(d.contractId)}>Accept</button> : <span></span>)
                            }
                        </li>)
            }
            </ul>
        </div>
        <div>
            <h3>tables</h3>
            <ul>
                {
                    allTables.map( table => <BJTable
                        key = {table.contractId}
                        game = {table.payload}
                        contractId={table.contractId}

                    />)
                }
            </ul>
            <ul>
                {
                    toDeal.map( table => <BJTableToDeal
                        key = {table.contractId}
                        game = {table.payload}
                        contractId={table.contractId}

                    />)
                }
            </ul>

            <ul>
                {
                    toFinish.map( table => <BJTableToFinish
                        key = {table.contractId}
                        game = {table.payload}
                        contractId={table.contractId}

                    />)
                }
            </ul>
        </div>
        <div>
            <h3>finished</h3>
            <button onClick={_=>setDetails(!details)}>show details</button>
            <ul>
            {
                finished.map ( game =>
                    !details ?
                        <BJTableFinished key={game.contractId} game={game.payload} contractId={game.contractId}/>
                        : <li>{game.payload.dealer} {game.payload.result}</li>
                )

            }
            </ul>
        </div>
    </div>;
}

type TableProps = {
    game: PlayerDecision
    contractId: ContractId<PlayerDecision>
}

const BJTable: React.FC<TableProps> = (props) => {
    const party = useParty();

    const isPlayer =  party === props.game.player;
    const ledger = useLedger();

    const hit = () => {
        ledger.exercise(BJ.PlayerDecision.Hit, props.contractId, {});
    };
    const stand = () => {
        ledger.exercise(BJ.PlayerDecision.Stand, props.contractId, {});
    };
    return <div>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards} />
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        <h4>player value</h4> <div>{props.game.playerCardValues.join("; ")}</div>
        {isPlayer ? <div><button onClick={hit}>Hit</button></div> : <span></span> }
        {isPlayer ? <div><button onClick={stand}>Stand</button></div> : <div>waiting for player </div> }
    </div>;
};

type DealerTableProps = {
    game: PlayerAsksForCard
    contractId: ContractId<PlayerAsksForCard>
}
const BJTableToDeal: React.FC<DealerTableProps> = (props) => {
    const party = useParty();

    const isDealer=  party === props.game.dealer;
    const ledger = useLedger();

    const deal = () => {
        console.log("before nextDeal "+ props.contractId);
        ledger.exercise(BJ.PlayerAsksForCard.NextDeal, props.contractId, {});
    };

    return <div>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards}/>
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        {isDealer ? <div><button onClick={deal}>Deal</button></div> : <div>waiting for dealer</div> }
    </div>;
};

type FinishTableProps = {
    game: PlayerStands
    contractId: ContractId<PlayerStands>
}
const BJTableToFinish: React.FC<FinishTableProps> = (props) => {
    const party = useParty();

    const isDealer=  party === props.game.dealer;
    const ledger = useLedger();

    const dealSelf = () => {
        console.log("before nextDeal "+ props.contractId);
        ledger.exercise(BJ.PlayerStands.DealSelf, props.contractId, {});
    };

    return <div>
        <h4>finish</h4>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards}/>
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        {isDealer ? <div><button onClick={dealSelf}>Finish</button></div> : <span></span> }
    </div>;
};

type FinishedTableProps = {
    game: GameEnd
    contractId: ContractId<GameEnd>
}
const BJTableFinished: React.FC<FinishedTableProps> = (props) => {
    const party = useParty();

    return <li>
        <h4>finished {props.game.result}</h4>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards}/>
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        <h4>shoe</h4><BJHand cards={props.game.shoeOriginal}/>
    </li>;
};
type HandProps = {
    cards: Deck
}
const BJHand: React.FC<HandProps> = (props) => {
    return <div>
        {props.cards.value.map (c => <BJCard rank={c.rank} suit={c.suit}/>) }
    </div>;
};

const BJCard: React.FC<Card> = (card) => {
    return <figure className={"card"}> {showCard(card)}</figure>;
};

function showSuit(suit:Suit) : string{
    if (suit === Suit.Diamonds) {
        return "\u2666";
    }
    if (suit === Suit.Spades) {
        return "\u2660";
    }
    if (suit === Suit.Hearts) {
        return "\u2665";
    }
    if (suit === Suit.Clubs) {
        return "\u2663";
    }
    return "";
}

function showCard(card: Card) {
    if (card.rank.tag === 'Pip') {
        return card.rank.value + showSuit(card.suit);
    }
    return card.rank.tag.substr(0, 1)  + showSuit(card.suit);
}

function showDeck(deck: Deck) {
    return deck.value.map(c => showCard(c)).join(",");
}

export default BJMain;

function createPip(val:number) : Rank {
    return {tag:'Pip', value:val.toString() };
}

function createFullSuit(suit: Suit) : Array<Card> {
    const pips = Array.from(Array(9).keys()).map ( val => { return {rank: createPip(val+2), suit: suit};} );
    const ace:Card = {rank: {tag: 'Ace', value:{}}, suit:suit};
    const king:Card = {rank: {tag: 'King', value:{}}, suit:suit};
    const queen:Card = {rank: {tag: 'Queen', value:{}}, suit:suit};
    const jack:Card = {rank: {tag: 'Jack', value:{}}, suit:suit};
    return [...pips, ace, king, queen, jack];
}

function createRandomDeck() : Deck {
    const suits:Array<Suit> = ['Spades','Hearts', 'Diamonds','Clubs'];
    const cards:Array<Card> = suits.map( s=> createFullSuit(s)).flat();
    shuffleArray(cards);
    return  {tag: 'Deck', value:cards};
}
//source from
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray<T>(array:Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}