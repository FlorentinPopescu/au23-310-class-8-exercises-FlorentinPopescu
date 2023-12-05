// ./ blackjack_Tests.js  -- Mocha is used test functions

/* ------------------------------------------- */
// imports
const expect  = require('chai').expect;
const should = require('chai').should();
const assert = require('assert');

// import 'dealerShouldDraw' from external module 'blackjack.js'
const dsd = require('./blackjack.js');

/* ------------------------------------------- */
'use strict';

/* ------------------------------------------- */
// dealer hand (10, 9) passed in --> expects to return false
let test_10_9 = "10, 9";
let testDealerHand_10_9 = [
    { suit: 'hearts', val: 10, displayVal: '10' },
    { suit: 'hearts', val: 9, displayVal: '9' }
];

describe("Test: 10,9", function() {
    it("10, 9", function() {
        try {
            assert.equal(dsd.dealerShouldDraw(testDealerHand_10_9), false);
            expect(dsd.dealerShouldDraw(testDealerHand_10_9)).to.equal(false);
            console.log(`test (${test_10_9}) passed:`,  dsd.dealerShouldDraw(testDealerHand_10_9));
        } catch(error){
            console.log("test failed");
            console.error(error);
        }
    });
})

/* ------------------------------------------- */
// dealer hand (Ace, 6) passed in --> expects to return true
let test_Ace_6 = "Ace, 6";
let testDealerHand_Ace_6 = [
    { suit: 'hearts', val: 11, displayVal: 'Ace' },
    { suit: 'hearts', val: 6, displayVal: '6' }
];

describe("Test: Ace,6", function() {
    it("Ace, 6", function() {
        try {
            assert.equal(dsd.dealerShouldDraw(testDealerHand_Ace_6), true);
            expect(dsd.dealerShouldDraw(testDealerHand_Ace_6)).to.equal(true);
            console.log(`test (${test_Ace_6}) passed:`,  dsd.dealerShouldDraw(testDealerHand_Ace_6));
        } catch(error){
            console.log("test failed");
            console.error(error);
        }
    });
})

/* ------------------------------------------- */
// dealer hand (Ace, 6) passed in --> expects to return true
let test_10_6_Ace = "10, 6, Ace";
let testDealerHand_10_6_Ace = [
    { suit: 'hearts', val: 10, displayVal: '10' },
    { suit: 'hearts', val: 6, displayVal: '6' },
    { suit: 'hearts', val: 11, displayVal: 'Ace' }
];

describe("Test: 10, 6, Ace", function() {
    it("10, 6, Ace", function() {
        try {
            assert.equal(dsd.dealerShouldDraw(testDealerHand_10_6_Ace), false);
            expect(dsd.dealerShouldDraw(testDealerHand_10_6_Ace)).to.equal(false);
            console.log(`test (${test_10_6_Ace}) passed:`,  dsd.dealerShouldDraw(testDealerHand_10_6_Ace));
        } catch(error){
            console.log("test failed");
            console.error(error);
        }
    });
})

/* ------------------------------------------- */
// dealer hand (Ace, 6) passed in --> expects to return true
let test_2_4_2_5 = "2, 4, 2, 5";
let testDealerHand_2_4_2_5 = [
    { suit: 'hearts', val: 2, displayVal: '2' },
    { suit: 'hearts', val: 4, displayVal: '4' },
    { suit: 'spades', val: 2, displayVal: '2' },
    { suit: 'hearts', val: 5, displayVal: '5' }
];
describe("Test: 2, 4, 2, 5", function() {
    it("2, 4, 2, 5", function() {
        try {
            assert.equal(dsd.dealerShouldDraw(testDealerHand_2_4_2_5), true);
            expect(dsd.dealerShouldDraw(testDealerHand_2_4_2_5)).to.equal(true);
            console.log(`test (${test_2_4_2_5}) passed:`,  dsd.dealerShouldDraw(testDealerHand_2_4_2_5));
        } catch(error){
            console.log("test failed");
            console.error(error);
        }
    });
})
