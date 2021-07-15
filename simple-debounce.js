function debounce(func, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      func.call(this, ...args);
    }, wait);
  }
}
