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
  damlTypes.Template<PlayerAsksForCard, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerAsksForCard'> & {
  Archive: damlTypes.Choice<PlayerAsksForCard, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  NextDeal: damlTypes.Choice<PlayerAsksForCard, NextDeal, damlTypes.ContractId<GameProposal>, undefined>;
};

export declare namespace PlayerAsksForCard {
  export type CreateEvent = damlLedger.CreateEvent<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PlayerAsksForCard, typeof PlayerAsksForCard.templateId>
  export type Event = damlLedger.Event<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
  export type QueryResult = damlLedger.QueryResult<PlayerAsksForCard, undefined, typeof PlayerAsksForCard.templateId>
}



export declare type GameEnd = {
  deck: damlTypes.ContractId<DealerDeck>;
  dealer: damlTypes.Party;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
  shoeOriginal: Deck;
  result: damlTypes.Int;
};

export declare const GameEnd:
  damlTypes.Template<GameEnd, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:GameEnd'> & {
  Archive: damlTypes.Choice<GameEnd, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace GameEnd {
  export type CreateEvent = damlLedger.CreateEvent<GameEnd, undefined, typeof GameEnd.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<GameEnd, typeof GameEnd.templateId>
  export type Event = damlLedger.Event<GameEnd, undefined, typeof GameEnd.templateId>
  export type QueryResult = damlLedger.QueryResult<GameEnd, undefined, typeof GameEnd.templateId>
}



export declare type DealSelf = {
};

export declare const DealSelf:
  damlTypes.Serializable<DealSelf> & {
  }
;


export declare type PlayerStands = {
  deck: damlTypes.ContractId<DealerDeck>;
  dealer: damlTypes.Party;
  player: damlTypes.Party;
  dealerCards: Deck;
  playerCards: Deck;
};

export declare const PlayerStands:
  damlTypes.Template<PlayerStands, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerStands'> & {
  DealSelf: damlTypes.Choice<PlayerStands, DealSelf, damlTypes.ContractId<GameEnd>, undefined>;
  Archive: damlTypes.Choice<PlayerStands, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PlayerStands {
  export type CreateEvent = damlLedger.CreateEvent<PlayerStands, undefined, typeof PlayerStands.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PlayerStands, typeof PlayerStands.templateId>
  export type Event = damlLedger.Event<PlayerStands, undefined, typeof PlayerStands.templateId>
  export type QueryResult = damlLedger.QueryResult<PlayerStands, undefined, typeof PlayerStands.templateId>
}



export declare type Stand = {
};

export declare const Stand:
  damlTypes.Serializable<Stand> & {
  }
;


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
  playerCardValues: damlTypes.Int[];
};

export declare const GameProposal:
  damlTypes.Template<GameProposal, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:GameProposal'> & {
  Archive: damlTypes.Choice<GameProposal, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Hit: damlTypes.Choice<GameProposal, Hit, damlTypes.ContractId<PlayerAsksForCard>, undefined>;
  Stand: damlTypes.Choice<GameProposal, Stand, damlTypes.ContractId<PlayerStands>, undefined>;
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
  damlTypes.Template<PlayerAtTable, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerAtTable'> & {
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
  damlTypes.Template<DealerDeck, undefined, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:DealerDeck'> & {
  Archive: damlTypes.Choice<DealerDeck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace DealerDeck {
  export type CreateEvent = damlLedger.CreateEvent<DealerDeck, undefined, typeof DealerDeck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DealerDeck, typeof DealerDeck.templateId>
  export type Event = damlLedger.Event<DealerDeck, undefined, typeof DealerDeck.templateId>
  export type QueryResult = damlLedger.QueryResult<DealerDeck, undefined, typeof DealerDeck.templateId>
}



export declare type ConsumeDeck = {
};

export declare const ConsumeDeck:
  damlTypes.Serializable<ConsumeDeck> & {
  }
;


export declare type InitialDeck = {
  dealer: damlTypes.Party;
  deck: Deck;
};

export declare const InitialDeck:
  damlTypes.Template<InitialDeck, InitialDeck.Key, 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:InitialDeck'> & {
  Archive: damlTypes.Choice<InitialDeck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, InitialDeck.Key>;
  ConsumeDeck: damlTypes.Choice<InitialDeck, ConsumeDeck, damlTypes.ContractId<DealerDeck>, InitialDeck.Key>;
};

export declare namespace InitialDeck {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<InitialDeck, InitialDeck.Key, typeof InitialDeck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InitialDeck, typeof InitialDeck.templateId>
  export type Event = damlLedger.Event<InitialDeck, InitialDeck.Key, typeof InitialDeck.templateId>
  export type QueryResult = damlLedger.QueryResult<InitialDeck, InitialDeck.Key, typeof InitialDeck.templateId>
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

