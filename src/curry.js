export const curry = (fn) => {
  if (typeof fn !== "function") {
    throw new Error("No Function provided!");
  }

  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function (...otherArgs) {
        return curriedFn(...args, ...otherArgs);
      };
    }
    return fn(...args);
  };
};
