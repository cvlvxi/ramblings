// export function* range(start, end) {
//   yield start;
//   if (start === end) return;
//   yield* range(start + 1, end);
// }
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

export function range(start, end, padding = 2) {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i.pad(padding));
  }
  return ans;
}
