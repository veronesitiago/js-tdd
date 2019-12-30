/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */

let expect = require('chai').expect;

describe('Main', () => {
  let arr;
  // Roda uma vez antes do bloco
  before(() => {
    // console.log('before');
  });

  // Roda uma vez depois do bloco
  after(() => {
    // console.log('after');
  });

  // Roda todas as vezes, antes de cada bloco
  beforeEach(() => {
    // console.log('beforeEach');
    arr = [1, 2, 3];
  });

  // Roda todas as vezes, depois de cada bloco
  afterEach(() => {
    // console.log('afterEach');
  });

  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
