// https://bigfrontend.dev/problem/decode-message

function decode(message) {
  let i = 0, j = 0, ans = "";
  while (message[i] && message[i][j]) {
    ans += message[i][j];
    message[i+1]?i++:i--;
    j++;
  }
  return ans;
}
//00,11,22,13,04,15,26
