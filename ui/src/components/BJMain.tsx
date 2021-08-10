import React from 'react';
import Ledger from '@daml/ledger';
import {useLedger, useParty, useStreamQueries} from "@daml/react";
import {BJ} from '@daml.js/blackjacek';
import {Card, Deck, Dealer} from "@daml.js/blackjacek/lib/BJ";

const BJMain: React.FC = () => {
    const [player, setPlayer] = React.useState('');
    const party = useParty();
    const ledger = useLedger();
    const allDealers = useStreamQueries(BJ.Dealer).contracts;
    const allGames = useStreamQueries(BJ.GameProposal).contracts;

    const firstDeal = allDealers[0];
    const initDealer = () => {
        const card1 : Card = {suit : "Clubs", rank :   { tag: 'Ace', value: {}}};
        const card2 : Card = {suit : "Clubs", rank :   { tag: 'Pip', value: "2"}};
        const deck : Deck = { tag: 'Deck', value: [card1, card2]};

        const dealer : Dealer = {
            dealer: party, deck: deck, money: "100"
        };
        const newDealerContract = ledger.create(BJ.Dealer, dealer);
        newDealerContract.then( ctr =>
            {
                console.log("dealer created");
                console.log(ctr);
            }
        );
    };

    const proposeGame = () => {
        ledger.exercise(BJ.Dealer.ProposeGame, firstDeal.contractId, {player:player}).then (gameProposal => {
            console.log("proposal created");
        });
    };

    return <div>
        <h2>BlackJack</h2>
        <button onClick={initDealer}>init dealer</button>

        <ul> {
            allDealers.map( d => <li>another deal money: {d.payload.money}</li>)
        }
        </ul>
        <div>
            <input type={"text"} value={player} onChange={e => setPlayer(e.currentTarget.value)}/>
        </div>
        <div>
            <button onClick={proposeGame}>propose game</button>
        </div>
        <h2>games</h2>
        <ul> {
            allGames.map( d => <li>dealer: {d.payload.dealer.dealer} <button>hit</button>  {showDeck(d.payload.dealer.deck)}</li>)
        }
        </ul>
    </div>;
}

function showCard(card: Card) {
    return card.rank + card.suit;
}

function showDeck(deck: Deck) {
    return deck.value.map( c=> showCard(c)).join(",");
}
export default BJMain;