import commentCounter from '../src/modules/commentcount.js';

describe('commentCounter', () => {
  it('should return 0 when given an empty array', () => {
    const result = commentCounter([]);
    expect(result).toBe(0);
  });

  it('should return the correct count for an array with one comment', () => {
    const result = commentCounter(['Comment 1']);
    expect(result).toBe(1);
  });

  it('should return the correct count for an array with multiple comments', () => {
    const result = commentCounter(['Comment 1', 'Comment 2', 'Comment 3']);
    expect(result).toBe(3);
  });

  it('should handle edge case: undefined input', () => {
    const result = commentCounter(undefined);
    expect(result).toBe(0);
  });

  it('should handle edge case: input is not an array', () => {
    const result = commentCounter('Not an array');
    expect(result).toBe(0);
  });
});
