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
    collect_date: "2022-12-05 09:13:34",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "1",
    nat_result_name: "阴性",
    report_date: "2022-12-05 15:34:48",
    sample_date: getTime(),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "",
  },
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "2022-12-04 09:34:12",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "1",
    nat_result_name: "阴性",
    report_date: "2022-12-04 16:42:41",
    sample_date: getTime(),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "",
  },
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "2022-12-03 09:25:34",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "1",
    nat_result_name: "阴性",
    report_date: "2022-12-03 15:35:34",
    sample_date: getTime(),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "",
  },
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "2022-12-02 09:54:30",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "1",
    nat_result_name: "阴性",
    report_date: "2022-12-02 14:54:48",
    sample_date: getTime(),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "",
  },
  {
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "2022-12-01 09:44:53",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: "1",
    nat_result_name: "阴性",
    report_date: "2022-12-01 15:55:33",
    sample_date: getTime(),
    sample_orgname: "上海奕检医学检验实验室",
    sample_type_name: "咽拭子",
    test_orgname: "",
  },
];

res.body = JSON.stringify(body);
$done(res);
