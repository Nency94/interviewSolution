//https://bigfrontend.dev/problem/implement-general-memoization-function
function memo(func, resolver) {
  // your code here
  let cache = {};
  return  function (...args) {
    const key = resolver ? resolver(...args) : args.join('_');
      if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }  
    return cache[key];
  }
}
