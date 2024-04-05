const { initializeTowers, hanoi } = require('./hanoi-testable');

describe('Tower of Hanoi Tests', () => {
  test('Correct final state for 3 disks', async () => {
    const { A, B, C } = initializeTowers(3);
    await hanoi(3, A, C, B, { A, B, C });
    expect(A).toEqual([]);
    expect(B).toEqual([]);
    expect(C).toEqual(['---', '--', '-']);
  });

  test('Correct final state for 4 disks', async () => {
    const { A, B, C } = initializeTowers(4);
    await hanoi(4, A, C, B, { A, B, C });
    expect(A).toEqual([]);
    expect(B).toEqual([]);
    expect(C).toEqual(['----', '---', '--', '-']);
  });
});
