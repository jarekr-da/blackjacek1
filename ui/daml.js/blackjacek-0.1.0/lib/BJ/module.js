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


exports.Deal = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GameBeforeDeal = {
  templateId: '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:GameBeforeDeal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealer: exports.Dealer.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealer: exports.Dealer.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
  };
}
,
  Archive: {
    template: function () { return exports.GameBeforeDeal; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Deal: {
    template: function () { return exports.GameBeforeDeal; },
    choiceName: 'Deal',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Deal.decoder; }),
    argumentEncode: function (__typed__) { return exports.Deal.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameProposal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GameBeforeDeal);



exports.Hit = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GameProposal = {
  templateId: '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:GameProposal',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealer: exports.Dealer.decoder, player: damlTypes.Party.decoder, dealerCards: exports.Deck.decoder, playerCards: exports.Deck.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealer: exports.Dealer.encode(__typed__.dealer),
    player: damlTypes.Party.encode(__typed__.player),
    dealerCards: exports.Deck.encode(__typed__.dealerCards),
    playerCards: exports.Deck.encode(__typed__.playerCards),
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
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameBeforeDeal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameBeforeDeal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.GameProposal);



exports.ProposeGame = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({player: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    player: damlTypes.Party.encode(__typed__.player),
  };
}
,
};



exports.Dealer = {
  templateId: '9cb5481665b88dd8f4d291b1c9ca2d8658e671dfba9afa685ad4df723b9883e4:BJ:Dealer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({dealer: damlTypes.Party.decoder, deck: exports.Deck.decoder, money: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    dealer: damlTypes.Party.encode(__typed__.dealer),
    deck: exports.Deck.encode(__typed__.deck),
    money: damlTypes.Int.encode(__typed__.money),
  };
}
,
  Archive: {
    template: function () { return exports.Dealer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ProposeGame: {
    template: function () { return exports.Dealer; },
    choiceName: 'ProposeGame',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ProposeGame.decoder; }),
    argumentEncode: function (__typed__) { return exports.ProposeGame.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.GameProposal).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.GameProposal).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Dealer);



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

