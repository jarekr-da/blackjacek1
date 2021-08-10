// Generated from BJ.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Deal = {
};

export declare const Deal:
  damlTypes.Serializable<Deal> & {
  }
;


export declare type GameBeforeDeal = {
  dealer: Dealer;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
};

export declare const GameBeforeDeal:
  damlTypes.Template<GameBeforeDeal, undefined, '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:GameBeforeDeal'> & {
  Archive: damlTypes.Choice<GameBeforeDeal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Deal: damlTypes.Choice<GameBeforeDeal, Deal, damlTypes.ContractId<GameProposal>, undefined>;
};

export declare namespace GameBeforeDeal {
  export type CreateEvent = damlLedger.CreateEvent<GameBeforeDeal, undefined, typeof GameBeforeDeal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GameBeforeDeal, typeof GameBeforeDeal.templateId>
  export type Event = damlLedger.Event<GameBeforeDeal, undefined, typeof GameBeforeDeal.templateId>
  export type QueryResult = damlLedger.QueryResult<GameBeforeDeal, undefined, typeof GameBeforeDeal.templateId>
}



export declare type Hit = {
};

export declare const Hit:
  damlTypes.Serializable<Hit> & {
  }
;


export declare type GameProposal = {
  dealer: Dealer;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
};

export declare const GameProposal:
  damlTypes.Template<GameProposal, undefined, '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:GameProposal'> & {
  Archive: damlTypes.Choice<GameProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Hit: damlTypes.Choice<GameProposal, Hit, damlTypes.ContractId<GameBeforeDeal>, undefined>;
};

export declare namespace GameProposal {
  export type CreateEvent = damlLedger.CreateEvent<GameProposal, undefined, typeof GameProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GameProposal, typeof GameProposal.templateId>
  export type Event = damlLedger.Event<GameProposal, undefined, typeof GameProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<GameProposal, undefined, typeof GameProposal.templateId>
}



export declare type ProposeGame = {
  player: damlTypes.Party;
};

export declare const ProposeGame:
  damlTypes.Serializable<ProposeGame> & {
  }
;


export declare type Dealer = {
  dealer: damlTypes.Party;
  deck: Deck;
  money: damlTypes.Int;
};

export declare const Dealer:
  damlTypes.Template<Dealer, undefined, '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:Dealer'> & {
  Archive: damlTypes.Choice<Dealer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ProposeGame: damlTypes.Choice<Dealer, ProposeGame, damlTypes.ContractId<GameProposal>, undefined>;
};

export declare namespace Dealer {
  export type CreateEvent = damlLedger.CreateEvent<Dealer, undefined, typeof Dealer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Dealer, typeof Dealer.templateId>
  export type Event = damlLedger.Event<Dealer, undefined, typeof Dealer.templateId>
  export type QueryResult = damlLedger.QueryResult<Dealer, undefined, typeof Dealer.templateId>
}



export declare type Deck =
  |  { tag: 'Deck'; value: Card[] }
;

export declare const Deck:
  damlTypes.Serializable<Deck> & {
  }
;


export declare type Card = {
  rank: Rank;
  suit: Suit;
};

export declare const Card:
  damlTypes.Serializable<Card> & {
  }
;


export declare type Rank =
  |  { tag: 'Ace'; value: {} }
  |  { tag: 'Pip'; value: damlTypes.Int }
  |  { tag: 'Jack'; value: {} }
  |  { tag: 'Queen'; value: {} }
  |  { tag: 'King'; value: {} }
;

export declare const Rank:
  damlTypes.Serializable<Rank> & {
  }
;


export declare type Suit =
  | 'Spades'
  | 'Hearts'
  | 'Diamonds'
  | 'Clubs'
;

export declare const Suit:
  damlTypes.Serializable<Suit> & {
  }
& { readonly keys: Suit[] } & { readonly [e in Suit]: e }
;

