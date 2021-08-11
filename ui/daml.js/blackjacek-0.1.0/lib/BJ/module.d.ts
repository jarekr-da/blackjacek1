// Generated from BJ.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type NextDeal = {
};

export declare const NextDeal:
  damlTypes.Serializable<NextDeal> & {
  }
;


export declare type PlayerAsksForCard = {
  deck: damlTypes.ContractId<DealerDeck>;
  dealer: damlTypes.Party;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
};

export declare const PlayerAsksForCard:
  damlTypes.Template<PlayerAsksForCard, undefined, 'dd8de2afed586db7facbd37f58673a6f7f64a10c632a77e51ca04e554b4d7f56:BJ:PlayerAsksForCard'> & {
  Archive: damlTypes.Choice<PlayerAsksForCard, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  NextDeal: damlTypes.Choice<PlayerAsksForCard, NextDeal, damlTypes.ContractId<GameProposal>, undefined>;
};

export declare namespace PlayerAsksForCard {
  export type CreateEvent = damlLedger.CreateEvent<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PlayerAsksForCard, typeof PlayerAsksForCard.templateId>
  export type Event = damlLedger.Event<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
  export type QueryResult = damlLedger.QueryResult<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
}



export declare type Hit = {
};

export declare const Hit:
  damlTypes.Serializable<Hit> & {
  }
;


export declare type GameProposal = {
  deck: damlTypes.ContractId<DealerDeck>;
  dealer: damlTypes.Party;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
};

export declare const GameProposal:
  damlTypes.Template<GameProposal, undefined, 'dd8de2afed586db7facbd37f58673a6f7f64a10c632a77e51ca04e554b4d7f56:BJ:GameProposal'> & {
  Archive: damlTypes.Choice<GameProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Hit: damlTypes.Choice<GameProposal, Hit, damlTypes.ContractId<PlayerAsksForCard>, undefined>;
};

export declare namespace GameProposal {
  export type CreateEvent = damlLedger.CreateEvent<GameProposal, undefined, typeof GameProposal.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GameProposal, typeof GameProposal.templateId>
  export type Event = damlLedger.Event<GameProposal, undefined, typeof GameProposal.templateId>
  export type QueryResult = damlLedger.QueryResult<GameProposal, undefined, typeof GameProposal.templateId>
}



export declare type AcceptGame = {
};

export declare const AcceptGame:
  damlTypes.Serializable<AcceptGame> & {
  }
;


export declare type PlayerAtTable = {
  player: damlTypes.Party;
  dealer: damlTypes.Party;
};

export declare const PlayerAtTable:
  damlTypes.Template<PlayerAtTable, undefined, 'dd8de2afed586db7facbd37f58673a6f7f64a10c632a77e51ca04e554b4d7f56:BJ:PlayerAtTable'> & {
  Archive: damlTypes.Choice<PlayerAtTable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptGame: damlTypes.Choice<PlayerAtTable, AcceptGame, damlTypes.ContractId<GameProposal>, undefined>;
};

export declare namespace PlayerAtTable {
  export type CreateEvent = damlLedger.CreateEvent<PlayerAtTable, undefined, typeof PlayerAtTable.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PlayerAtTable, typeof PlayerAtTable.templateId>
  export type Event = damlLedger.Event<PlayerAtTable, undefined, typeof PlayerAtTable.templateId>
  export type QueryResult = damlLedger.QueryResult<PlayerAtTable, undefined, typeof PlayerAtTable.templateId>
}



export declare type DealerDeck = {
  dealer: damlTypes.Party;
  deck: Deck;
};

export declare const DealerDeck:
  damlTypes.Template<DealerDeck, DealerDeck.Key, 'dd8de2afed586db7facbd37f58673a6f7f64a10c632a77e51ca04e554b4d7f56:BJ:DealerDeck'> & {
  Archive: damlTypes.Choice<DealerDeck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, DealerDeck.Key>;
};

export declare namespace DealerDeck {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<DealerDeck, DealerDeck.Key, typeof DealerDeck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DealerDeck, typeof DealerDeck.templateId>
  export type Event = damlLedger.Event<DealerDeck, DealerDeck.Key, typeof DealerDeck.templateId>
  export type QueryResult = damlLedger.QueryResult<DealerDeck, DealerDeck.Key, typeof DealerDeck.templateId>
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

