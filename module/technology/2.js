function leftPad(str, len, ch) {
  let res = str + ''
  while (res.length < len) {
    res = ch + res
  }
  return res
}
function getTime() {
  const date = new Date(Date.now() - 53 * 60 * 1000) 
  return date.getFullYear() 
    + '-' + leftPad(date.getMonth() + 1 + '', 2, '0') 
    + '-' + leftPad(date.getDate() + '', 2, '0')
    + ' '+ leftPad(date.getHours() + '', 2, '0')
    + ':'+ leftPad(date.getMinutes() + '', 2, '0')
    + ':'+ leftPad(date.getSeconds() + '', 2, '0')
}
let res = $response;
let body = JSON.parse($response.body)
body.data = [{
    card_type_name: "身份证",
    check_project: "核酸",
    collect_date: "",
    collect_mode: "10",
    name: body.data[0].name,
    nat_result: null,
    nat_result_name: null,
    report_date: "",
    sample_date: getTime(),
    sample_orgname: "",
    sample_type_name: "咽拭子",
    test_orgname: "",
}].concat(body.data)

res.body = JSON.stringify(body);
$done(res);