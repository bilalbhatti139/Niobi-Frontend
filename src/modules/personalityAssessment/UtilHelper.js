export const getPairArray = (twoDarray) => {
  return twoDarray.map((item) => item.map((inn) => (inn.isSelected ? 1 : 0)));
};
