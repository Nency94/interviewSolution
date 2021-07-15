
function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;
  
  return function(...args) {
    
    if(timer) {
      lastArgs = args;
    } else {
      func.apply(this, args);
      timer = setTimeout(()=>{
        if(lastArgs) {
          func.apply(this,lastArgs);
          timer = null;
        }
      }, wait)
    
    }
  }
}
