const res = $response;
const body = JSON.parse($response.body);
body.articles = Array.isArray(body.articles)
  ? body.articles.filter((item) => item.category === "足球")
  : body.articles;

res.body = JSON.stringify(body);
$done(res);
