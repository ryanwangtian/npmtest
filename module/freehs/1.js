function leftPad(str, len, ch) {
  let res = str + "";
  while (res.length < len) {
    res = ch + res;
  }
  return res;
}
function formatTime(date) {
  return (
    date.getFullYear() +
    "-" +
    leftPad(date.getMonth() + 1 + "", 2, "0") +
    "-" +
    leftPad(date.getDate() + "", 2, "0") +
    " 00:00:01"
  );
}
let res = $response;
let body = JSON.parse($response.body);
body.data = [
  {
    sample_date: formatTime(new Date()),
    nat_result_name: "阳性",
    nat_result: "2",
    collect_mode: "10",
  },
];

res.body = JSON.stringify(body);
$done(res);
