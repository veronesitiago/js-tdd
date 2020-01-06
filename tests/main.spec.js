/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  // smokes tests
  describe('Smokes tests', () => {
    it('should exist method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 4 when `div(8, 2)`', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `não é possível divisão por zero!` when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
