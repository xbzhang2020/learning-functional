export const partial = (fn, ...args) => {
  let fullArgs = [...args];

  return function (...otherArgs) {
    let index = 0;
    for (let i = 0; i < fullArgs.length && i < otherArgs.length; i++) {
      if (fullArgs[i] === undefined) {
        fullArgs[i] = otherArgs[index++];
      }
    }

    const res = fn(...fullArgs);
    fullArgs = [...args];
    return res;
  };
};
