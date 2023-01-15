const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/host", (req, res) => {
  res.send("/host 요청 했음");
});

app.post("/post", (req, res) => {
  res.send("/host 요청했음");
});

// api를 각각 5개 콘솔 로그로 찍는것 만들기

// querystring
app.post("/test", (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  res.send({ name, age });
});

// jungmin
app.get("/api/?name=abc&age=25", (req, res) => {
  req.query;
});

// app.get("/host", (req, res) => {
//   const query = req.query;
//   console.log(query);
// });

// path params
app.get("/:id", (req, res) => {
  const param = req.params;
  console.log(param);
});

// jungmin
app.get("/api/:postId", (req, res) => {
  req.params;
});

//header
app.get("/header", (req, res) => {
  const header = req.header;
  console.log(header);
});

// cookie
app.get("/header", (req, res) => {
  const cookie = req.header.cookie;
  console.log(cookie);
});

// jungmin
// req.cookie;

//json
app.get("/", (req, res) => {
  const json = req.body;
});

// 01/13 숙제 게시판 API 목록
// 예제 : login api
// app.post("/login", (req, res) => {
//   const { email, password } = req.body
//   console.log("email", email)
//   console.log("passsword", password)
//   res.send("/login api")
// })

// post 회원가입
app.post("/signup", (req, res) => {
  const { nickname, password, userId } = req.body;

  // console.log(nickname, password, userId);

  res.send("signup api");
});

// post 로그인
app.post("/login", (req, res) => {
  const { userId, password } = req.body;

  // console.log(userId, password);

  res.send("login api");
});

// get 회원정보 한명 가져오기
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  // console.log(userId);

  res.send("get userId api");
});

// get 게시글 리스트 가져오기
app.get("/getposts", (req, res) => {
  const post = {
    nickname: "hohoho",
    content: "huhuhu",
  };

  res.send(post);
});

// get 선택 게시글 상세 정보 가져오기
app.get("/posts/:userId", (req, res) => {
  const { userId } = req.params;

  // console.log(userId);

  res.send("get postsId api");
});

// post 게시글 작성하기
app.post("/posts/created", (req, res) => {
  const { title, content, nickname, password } = req.body;

  // console.log(content, nickname, password);

  res.send("created posts api");
});

// post 게시글 수정하기
app.patch("/posts/patch/:postId", (req, res) => {
  const { postId } = req.params;
  const { content, nickname, password } = req.body;

  // console.log(content, nickname, password);

  res.send("patch posts api");
});

// post 게시글 삭제하기
app.delete("/posts/delete/:postId", (req, res) => {
  const { postId } = req.params;
  const { password } = req.body;

  res.send("deleted post api");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸습니다!");
});

// 숙제

// 값을 받아서 console.log()로 찍고 res.send로 찍는 걸로 만들어라.

// 과제제출 github
// 이름: github 주소
