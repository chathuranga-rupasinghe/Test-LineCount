const lineCount = (horizontal, vertical) => {
  const horizontalLineCount = horizontal > 2 ? vertical * (horizontal - 2) : 0;
  const verticalLineCount = vertical > 2 ? horizontal * (vertical - 2) : 0;
  const diagonalLineCount =
    vertical > 2 && horizontal > 2 ? 2 * (horizontal - 2) * (vertical - 2) : 0;

  return horizontalLineCount + verticalLineCount + diagonalLineCount;
};
lineCount(4, 5); // this will return 34
