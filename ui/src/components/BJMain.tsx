import React, {useEffect} from 'react';
import Ledger from '@daml/ledger';
import {useFetchByKey, useLedger, useParty, useStreamQueries} from "@daml/react";
import {BJ, User} from '@daml.js/blackjacek';
import {Card, DealerDeck, Deck, GameProposal, PlayerAsksForCard, PlayerAtTable} from "@daml.js/blackjacek/lib/BJ";
import {useStreamFetchByKey, useStreamFetchByKeys} from "@daml/react/defaultLedgerContext";
import { FetchResult} from "@daml/react";
import {ContractId, Party} from "@daml/types";

const BJMain: React.FC = () => {
    const [dealerName, setDealerName] = React.useState('');
    const [table, setTable] = React.useState<any>();
    const party = useParty();
    const ledger = useLedger();
    const allDealerDecks = useStreamQueries(BJ.DealerDeck).contracts;
    const allPlayersToAccept = useStreamQueries(BJ.PlayerAtTable).contracts;
    const allTables = useStreamQueries(BJ.GameProposal).contracts;
    const toDeal = useStreamQueries(BJ.PlayerAsksForCard).contracts;
    // const contract = useFetchByKey(BJ.DealerDeck, () => dealerName, [dealerName])
    // // const contract  = useStreamFetchByKeys(BJ.DealerDeck, () => [dealerName], [dealerName], () => {
    // // });

    const initDealerDeck = () => {
        const card1: Card = {suit: "Clubs", rank: {tag: 'Ace', value: {}}};
        const card2: Card = {suit: "Clubs", rank: {tag: 'Pip', value: "2"}};
        const card3: Card = {suit: "Clubs", rank: {tag: 'Pip', value: "6"}};
        const card4: Card = {suit: "Clubs", rank: {tag: 'Pip', value: "8"}};
        const deck: Deck = {tag: 'Deck', value: [card1, card2, card3, card4]};

        const dealer: DealerDeck = {
            dealer: party, deck: deck
        };
        const newDealerContract = ledger.create(BJ.DealerDeck, dealer);
        newDealerContract.then(ctr => {
                console.log("dealer created");
                console.log(ctr);
            }
        );
    };

    const findGame = () => {
        const playerAtTableData = {player:party, dealer: dealerName}
        const newPlayer = ledger.create(BJ.PlayerAtTable, playerAtTableData);
        newPlayer.then(ctr => {
                console.log("player at table created");
                console.log(ctr);
            }
        );
    };

    const acceptGame = (contractId: ContractId<PlayerAtTable>) => () => {
        const accepted = ledger.exercise(BJ.PlayerAtTable.AcceptGame, contractId, {});
        accepted.then( ctr => {
           console.log("player accepted");

        });
    };

    // const proposeGame = () => {
    //     ledger.exercise(BJ..ProposeGame, firstDeal.contractId, {player:player}).then (gameProposal => {
    //         console.log("proposal created");
    //     });
    // };

    return <div>
        <h2>BlackJack</h2>
        <div>

            <h3>my games</h3>
            <button onClick={initDealerDeck}>init dealer</button>

            <ul> {
                allDealerDecks.map(d => <li key={d.contractId}>my decks: {d.payload.dealer}</li>)
            }
            </ul>
        </div>
        <div>
            <h3>join game</h3>
            <input type={"text"} value={dealerName} onChange={e => setDealerName(e.currentTarget.value)}/>
            <button onClick={findGame}>join</button>
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
        </div>

    </div>;
}

type TableProps = {
    game: GameProposal
    contractId: ContractId<GameProposal>
}

const BJTable: React.FC<TableProps> = (props) => {
    const party = useParty();

    const isPlayer =  party === props.game.player;
    const ledger = useLedger();

    const hit = () => {
        ledger.exercise(BJ.GameProposal.Hit, props.contractId, {});
    };

    return <div>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards}/>
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        {isPlayer ? <div><button onClick={hit}>Hit</button></div> : <span></span> }
    </div>;
};

type DealerTableProps = {
    game: PlayerAsksForCard
    contractId: ContractId<PlayerAsksForCard>
}
const BJTableToDeal: React.FC<TableProps> = (props) => {
    const party = useParty();

    const isDealer=  party === props.game.dealer;
    const ledger = useLedger();

    const deal = () => {
        ledger.exercise(BJ.PlayerAsksForCard.NextDeal, props.contractId, {});
    };

    return <div>
        <h4>dealer hand</h4><BJHand cards={props.game.dealerCards}/>
        <h4>player hand</h4><BJHand cards={props.game.playerCards}/>
        {isDealer ? <div><button onClick={deal}>Deal</button></div> : <span></span> }
    </div>;
};
type HandProps = {
    cards: Deck
}
const BJHand: React.FC<HandProps> = (props) => {
    return <div>cards {JSON.stringify(props.cards)}</div>;
};

function showCard(card: Card) {
    return card.rank + card.suit;
}

function showDeck(deck: Deck) {
    return deck.value.map(c => showCard(c)).join(",");
}

export default BJMain;