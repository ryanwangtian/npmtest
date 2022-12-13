function leftPad(str, len, ch) {
  let res = str + "";
  while (res.length < len) {
    res = ch + res;
  }
  return res;
}
function getTime() {
  const date = new Date(Date.now() - 53 * 60 * 1000);
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
body.data = [
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "2022-12-01 09:44:53",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "2",
    nat_result_name: "阳性",
    report_date: "2022-12-01 15:55:33",
    sample_date: "2022-12-01 09:44:53",
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "上海奕检医学检验实验室",
  },
].concat(body.data);

res.body = JSON.stringify(body);
$done(res);
