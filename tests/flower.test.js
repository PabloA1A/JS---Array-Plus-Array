import { describe, expect, it } from "vitest";
import { isLove } from "../src/flower";

describe('isLove', () => {
  it('devolver true si una flor tiene un numero par de petalos y la otra un numeroimpar', () => {
      
  const result1 = isLove(1, 4);
  console.log('Resultado 1:', result1); 
  expect(result1).toBe(true);
  });
});

describe('isLove', () => {
  it('devolver true si una flor tiene un numero par de petalos y la otra un numeroimpar', () => {
      
  const result2 = isLove(2, 2);
  console.log('Resultado 2:', result2);

  expect(result2).toBe(false);
  });
});

describe('isLove', () => {
  it('devolver true si una flor tiene un numero par de petalos y la otra unnumeroimpar', () => {
      
  const result3 = isLove(0, 1);
  console.log('Resultado 3:', result3);

  expect(result3).toBe(true);
  });
});

describe('isLove', () => {
  it('devolver true si una flor tiene un numero par de petalos y la otraunnumeroimpar', () => {
      
  const result4 = isLove(0, 0);
  console.log('Resultado 4:', result4);

  expect(result4).toBe(false);
  });
});