// Note: you shouldn't need to change anything in this file.

Scrabble = require("../src/scrabble");
let scrabble;

describe("Scrabble", function () {
  it("returns 0 for empty words", function () {
    scrabble = new Scrabble("");

    expect(scrabble.score()).toEqual(0);
  });

  it("returns 0 for whitespace", function () {
    scrabble = new Scrabble(" \t\n");

    expect(scrabble.score()).toEqual(0);
  });

  it("returns 0 for null", function () {
    scrabble = new Scrabble(null);

    expect(scrabble.score()).toEqual(0);
  });

  it("scores short word", function () {
    scrabble = new Scrabble("a");

    expect(scrabble.score()).toEqual(1);
  });

  it("scores short word", function () {
    scrabble = new Scrabble("f");

    expect(scrabble.score()).toEqual(4);
  });

  it("scores a simple word", function () {
    scrabble = new Scrabble("street");

    expect(scrabble.score()).toEqual(6);
  });

  it("scores a more complicated word", function () {
    scrabble = new Scrabble("quirky");

    expect(scrabble.score()).toEqual(22);
  });

  it("scores a case-insensitive word", function () {
    scrabble = new Scrabble("OXYPHENBUTAZONE");

    expect(scrabble.score()).toEqual(41);
  });

  //Extension criteria Tests
  //double letter
  it("double letter", function () {
    scrabble = new Scrabble("{a}");

    expect(scrabble.score()).toEqual(2);
  });
  //triple letter
  it("triple letter", function () {
    scrabble = new Scrabble("[a]");

    expect(scrabble.score()).toEqual(3);
  });
  //double letter in word
  it("double letter in word", function () {
    scrabble = new Scrabble("cabb{a}ge");

    expect(scrabble.score()).toEqual(15);
  });
  //triple letter in word
  it("triple letter in word", function () {
    scrabble = new Scrabble("[a]m");

    expect(scrabble.score()).toEqual(6);
  });
  //double word
  it("double word", function () {
    scrabble = new Scrabble("{cabbage}");

    expect(scrabble.score()).toEqual(28);
  });
  //triple word
  it("triple word", function () {
    scrabble = new Scrabble("[cabbage]");

    expect(scrabble.score()).toEqual(42);
  });
  //double-letter triple-letter nested in double word
  it("triple-letter triple-letter nested in double word", function () {
    scrabble = new Scrabble("{h[e][l]lo}");

    expect(scrabble.score()).toEqual(24);
  });
  //triple-letter triple-letter double-letter nested in double word
  it("triple-letter triple-letter double-letter nested in double word", function () {
    scrabble = new Scrabble("{h[e][l]{l}o}");

    expect(scrabble.score()).toEqual(26);
  });
  //triple-letter nested in double word
  it("triple-letter nested in double word", function () {
    scrabble = new Scrabble("{he[l]lo}");
    expect(scrabble.score()).toEqual(20);
  });
  //double letter in double word
  it("double-letter next to bracket, nested in double word", function () {
    scrabble = new Scrabble("{{h}ello}");
    expect(scrabble.score()).toEqual(24);
  });
});
