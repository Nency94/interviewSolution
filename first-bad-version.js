//https://bigfrontend.dev/problem/first-bad-version
function firstBadVersion(isBad) {
  return (version) => {
    let start = 0, end = version;
    while(start <= end){
      let mid = parseInt((start+end)/2);
      if(isBad(mid)){
        end = mid -1;
      }else{
        start = mid +1 ;
      }
    }
    return start <= version ? start: -1;
  }
}
