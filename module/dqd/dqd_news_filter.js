const res = $response;
const body = JSON.parse($response.body);
body.articles = body.articles.filter((item) => item.category === "足球");

res.body = JSON.stringify(body);
$done(res);
