//https://bigfrontend.dev/problem/can-you-shuffle-an-array

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomNum = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomNum];
    arr[randomNum] = temp;
  }
}
