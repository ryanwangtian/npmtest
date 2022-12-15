function leftPad(str, len, ch) {
  let res = str + "";
  while (res.length < len) {
    res = ch + res;
  }
  return res;
}
function formatDate(date) {
  return (
    date.getFullYear() +
    "-" +
    leftPad(date.getMonth() + 1 + "", 2, "0") +
    "-" +
    leftPad(date.getDate() + "", 2, "0") +
    " " +
    leftPad(date.getHours() + "", 2, "0") +
    ":" +
    leftPad(date.getMinutes() + "", 2, "0") +
    ":" +
    leftPad(date.getSeconds() + "", 2, "0")
  );
}
let res = $response;
let body = JSON.parse($response.body);
let username = body.userInfo ? body.userInfo.split(",")[0] : "";
body.data = [
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: formatDate(new Date(Date.now() - 487 * 60 * 1000)),
    collect_mode: "10",
    name:
      username.length === 2
        ? "*" + username.slice(1)
        : "**" + username.slice(2),
    nat_result: "2",
    nat_result_name: "阳性",
    report_date: formatDate(new Date(Date.now() - 53 * 60 * 1000)),
    sample_date: formatDate(new Date(Date.now() - 487 * 60 * 1000)),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "上海奕检医学检验实验室",
  },
];
// .concat(body.data || []);

res.body = JSON.stringify(body);
$done(res);
