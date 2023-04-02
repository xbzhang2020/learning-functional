export const compose = (...fnArgs) => {
  return (value) => {
    return fnArgs.reverse().reduce((res, fn) => {
      return fn(res);
    }, value);
  };
};
