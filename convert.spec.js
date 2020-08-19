const { expect } = require("chai");

const convertToRomanNumber = require("./convert");

describe("Convert", () => {
  it("1 === I", () => {
    // Given
    const value = 1;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("I");
  });
  it("2 === II", () => {
    // Given
    const value = 2;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("II");
  });
  it("3 === III", () => {
    // Given
    const value = 3;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("III");
  });
  it("10 === X", () => {
    // Given
    const value = 10;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("X");
  });
  it.skip("5 === V", () => {
    // Given
    const value = 5;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("V");
  });
  it("20 === XX", () => {
    // Given
    const value = 20;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("XX");
  });
  it.skip("11 === XI", () => {
    // Given
    const value = 11;
    // When
    const romanNumber = convertToRomanNumber(value);
    // then
    expect(romanNumber).to.equal("XI");
  });
});
