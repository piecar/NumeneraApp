import cyphers from '../../../src/data/Cyphers';

const mockMath = Object.create(global.Math);

describe('Cyphres.js', () => {
  it('should return a single form factor of Handles', () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    const expected =
      expect.stringMatching(/^Handles with powerful suction cups/);

    expect(cyphers[0].formFactor()).toEqual(expected);
  });

  it('should return a single form factor of Gloves', () => {
    mockMath.random = () => 0.4;
    global.Math = mockMath;
    const expected =
          expect.stringMatching(/^Gloves/);

    expect(cyphers[0].formFactor()).toEqual(expected);
  });
});
