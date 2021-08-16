"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.NextDeal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PlayerAsksForCard = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerAsksForCard',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({deck: damlTypes.ContractId(exports.DealerDeck).decoder, dealer: damlTypes.Party.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    deck: damlTypes.ContractId(exports.DealerDeck).encode(__typed__.deck),
    dealer: damlTypes.Party.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
  };
}
,
  Archive: {
    template: function () { return exports.PlayerAsksForCard; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  NextDeal: {
    template: function () { return exports.PlayerAsksForCard; },
    choiceName: 'NextDeal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.NextDeal.decoder; }),
    argumentEncode: function (__typed__) { return exports.NextDeal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameProposal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PlayerAsksForCard);



exports.GameEnd = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:GameEnd',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({deck: damlTypes.ContractId(exports.DealerDeck).decoder, dealer: damlTypes.Party.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, shoeOriginal: exports.Deck.decoder, result: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    deck: damlTypes.ContractId(exports.DealerDeck).encode(__typed__.deck),
    dealer: damlTypes.Party.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
    shoeOriginal: exports.Deck.encode(__typed__.shoeOriginal),
    result: damlTypes.Int.encode(__typed__.result),
  };
}
,
  Archive: {
    template: function () { return exports.GameEnd; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GameEnd);



exports.DealSelf = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PlayerStands = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerStands',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({deck: damlTypes.ContractId(exports.DealerDeck).decoder, dealer: damlTypes.Party.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    deck: damlTypes.ContractId(exports.DealerDeck).encode(__typed__.deck),
    dealer: damlTypes.Party.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
  };
}
,
  DealSelf: {
    template: function () { return exports.PlayerStands; },
    choiceName: 'DealSelf',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DealSelf.decoder; }),
    argumentEncode: function (__typed__) { return exports.DealSelf.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameEnd).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameEnd).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PlayerStands; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PlayerStands);



exports.Stand = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Hit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GameProposal = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:GameProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({deck: damlTypes.ContractId(exports.DealerDeck).decoder, dealer: damlTypes.Party.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, playerCardValues: damlTypes.List(damlTypes.Int).decoder, }); }),
  encode: function (__typed__) {
  return {
    deck: damlTypes.ContractId(exports.DealerDeck).encode(__typed__.deck),
    dealer: damlTypes.Party.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
    playerCardValues: damlTypes.List(damlTypes.Int).encode(__typed__.playerCardValues),
  };
}
,
  Archive: {
    template: function () { return exports.GameProposal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Hit: {
    template: function () { return exports.GameProposal; },
    choiceName: 'Hit',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Hit.decoder; }),
    argumentEncode: function (__typed__) { return exports.Hit.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PlayerAsksForCard).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PlayerAsksForCard).encode(__typed__); },
  },
  Stand: {
    template: function () { return exports.GameProposal; },
    choiceName: 'Stand',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Stand.decoder; }),
    argumentEncode: function (__typed__) { return exports.Stand.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PlayerStands).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PlayerStands).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GameProposal);



exports.AcceptGame = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PlayerAtTable = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:PlayerAtTable',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({player: damlTypes.Party.decoder, dealer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    player: damlTypes.Party.encode(__typed__.player),
    dealer: damlTypes.Party.encode(__typed__.dealer),
  };
}
,
  Archive: {
    template: function () { return exports.PlayerAtTable; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptGame: {
    template: function () { return exports.PlayerAtTable; },
    choiceName: 'AcceptGame',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptGame.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptGame.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameProposal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PlayerAtTable);



exports.DealerDeck = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:DealerDeck',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealer: damlTypes.Party.decoder, deck: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealer: damlTypes.Party.encode(__typed__.dealer),
    deck: exports.Deck.encode(__typed__.deck),
  };
}
,
  Archive: {
    template: function () { return exports.DealerDeck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.DealerDeck);



exports.ConsumeDeck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.InitialDeck = {
  templateId: 'a965ccb80a2293487cf88ea130b94a5429f9f7249977fd1bca2587ae7dbfd99d:BJ:InitialDeck',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealer: damlTypes.Party.decoder, deck: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealer: damlTypes.Party.encode(__typed__.dealer),
    deck: exports.Deck.encode(__typed__.deck),
  };
}
,
  Archive: {
    template: function () { return exports.InitialDeck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ConsumeDeck: {
    template: function () { return exports.InitialDeck; },
    choiceName: 'ConsumeDeck',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ConsumeDeck.decoder; }),
    argumentEncode: function (__typed__) { return exports.ConsumeDeck.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DealerDeck).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DealerDeck).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.InitialDeck);



exports.Deck = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Deck'), value: damlTypes.List(exports.Card).decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Deck': return {tag: __typed__.tag, value: damlTypes.List(exports.Card).encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type Deck';
  }
}
,
};



exports.Card = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({rank: exports.Rank.decoder, suit: exports.Suit.decoder, }); }),
  encode: function (__typed__) {
  return {
    rank: exports.Rank.encode(__typed__.rank),
    suit: exports.Suit.encode(__typed__.suit),
  };
}
,
};



exports.Rank = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Ace'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('Pip'), value: damlTypes.Int.decoder, }), jtv.object({tag: jtv.constant('Jack'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('Queen'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('King'), value: damlTypes.Unit.decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Ace': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'Pip': return {tag: __typed__.tag, value: damlTypes.Int.encode(__typed__.value)};
    case 'Jack': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'Queen': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'King': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type Rank';
  }
}
,
};



exports.Suit = {
  Spades: 'Spades',
  Hearts: 'Hearts',
  Diamonds: 'Diamonds',
  Clubs: 'Clubs',
  keys: ['Spades','Hearts','Diamonds','Clubs',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.Suit.Spades), jtv.constant(exports.Suit.Hearts), jtv.constant(exports.Suit.Diamonds), jtv.constant(exports.Suit.Clubs)); }),
  encode: function (__typed__) { return __typed__; },
};

