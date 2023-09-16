const commentCounter = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    return 0;
  }
  return arr.length;
};

export default commentCounter;