export const pipe = (...fnArgs) => {
  return (value) => {
    return fnArgs.reduce((res, fn) => {
      return fn(res);
    }, value);
  };
};
