// Test the counter value

const pageCount = (seasons, cards) => {
  seasons.innerHTML = ` Seasons ${cards}`;
};

describe('pageCount', () => {
  test('sets innerHTML correctly and check page counts to be 7', () => {
    // Arrange
    const seasons = {
      innerHTML: '',
    };
    const cards = 7;

    // Act
    pageCount(seasons, cards);

    // Assert
    expect(seasons.innerHTML).toBe(' Seasons 7');
  });
});
