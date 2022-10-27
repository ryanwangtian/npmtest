const BLACK_LIST = ['乒', '篮', 'NBA', 'CBA', '排', 'NBL', '女', '英雄联盟', '中甲', '中乙', 'U21联赛']
const res = $response;
const body = JSON.parse($response.body)
body.list = body.list.filter(item => !BLACK_LIST.find(text => item.match_title && item.match_title.includes(text)))

res.body = JSON.stringify(body);
$done(res);