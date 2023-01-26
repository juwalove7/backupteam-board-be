const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// const cookieParser = require("cookie");

const movies = require("./src/models/movie");
const users = require("./src/models/user");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// 영화제목 리스트
app.get("/movies", (req, res) => {
  // // 1. 영화 전체 목록을 순회한다.
  // // 2. 순회 하면서 영화 제목 작성자 (user_id) 에 해당하는
  // user를 users 에서 검색한다
  // // 3. 2번에 일치하는 user 의 name 만 가져온다
  // // 4. 가져온 name을 순회중 movie 의 name property 에 추가한다.
  // ```

  const page = req.query.page || 1;

  //splice가 지우고 넣기에 ...을 써서 원본을 보전하기 위한 코드
  const cloneMovies = [...movies];

  cloneMovies.sort((a, b) => {
    const prevTimestamp = new Date(a.created_at).getTime();
    const curTimestamp = new Date(b.created_at).getTime();

    return curTimestamp - prevTimestamp;
  });

  // 게시글 목록을 10개 단위로 나눈다
  // 마지막 페이지 숫자 구하게 해주는 코드
  const lastPage = Math.ceil(movies.length / 10);
  // 처음 보여지는 페이지
  const startIndex = (page - 1) * 10;
  // 총 화면에 보여질 페이지 그룹 = Math.ceil(현재 페이지/ 한 화면에 나타낼 페이지 수);

  // 총 페이지 수 = Math.ceil(전체 개수/ 한 페이지에 나타낼 데이터 수);

  //splice는 지우고 넣기에 페이지 수가 계속 줄어든다.
  const paginationMovies = cloneMovies.splice(startIndex, 10);
  // console.log("startIndex" : startIndex);
  // console.log("lastPage", lastPage);
  // console.log("page", page);

  const moviesList = paginationMovies.map((movie) => ({
    ...movie,
    name: users.find((user) => user.id === movie.user_id).name,
  }));

  // moviesList.sort((a, b) => {
  //   const prevTimestamp = new Date(a.created_at).getTime();
  //   const curTimestamp = new Date(b.created_at).getTime();

  //   return curTimestamp - prevTimestamp;
  // });

  // const lastPage = Math.ceil(movies.length / 10);
  // const startIndex = (page - 1) * 10;
  // console.log("startIndex" : startIndex);
  // console.log("lastPage", lastPage);

  res.send({
    pageInfo: {
      lastPage,
    },
    moviesList,
    // movies: paginationMovies,
  });
});

// 영화 상세조회
app.get("/movies/:id", (req, res) => {
  // table 2개 주신것

  // 1. 사용자가 보내준 id 를 가져온다
  const { id } = req.params;
  // body, params로 전달되는건 문자열로 넘어옴

  // 2. id 에 해당하는 movie 를 가져온다
  const findMovie = movies.findIndex((movie) => movie.id === Number(id));
  // js에서는 ===쓰기, 강력한 체크

  // 3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
  const hit_movie = movies[findMovie];
  const new_movie = {
    ...hit_movie,
    hit_count: hit_movie.hit_count + 1,
  };

  // const Hit_like = findMovie.splice()
  // 4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다. (findIndex, splice 사용)
  movies.splice(findMovie, 1, new_movie);
  console.log(hit_movie);
  // 5. hit_count 1을 더한 객체를 반환한다.
  return res.send(hit_movie);

  // splice
  // 배열. splice(작업 위치, 위치로부터 몇 칸 이동했냐, 끼워넣을 것 )
});

// 영화 등록하기
app.post("/movies", (req, res) => {
  // 1. 사용자가 등록할 영화의 정보를 주면 받아온다 from 요청 (req)
  const createdMovie = req.body;
  // 2. 가져온 영화정보에 id 를 부여한다.
  createdMovie.id = movies[movies.length - 1].id + 1;
  // 3. 조회수 (hit_count) 는 기본으로 0으로 설정한다.
  createdMovie.hit_count = 0;
  // 4. 작성일은 현재 시각을 넣는다.
  // 시간 부분 공부하기! 문자열을 빼고 원하는만큼 가져오는 양식!
  createdMovie.created_at = new Date()
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");
  // 3. 2,3,4 전부 부여된 영화정보를 movies 추가한다.
  console.log(createdMovie);

  // unshift는 배열 앞부분에 추가되어서 244번줄 로직상 배열 제일 끝에 id를 참고하니 21만 나오게 됨.
  // {21,21,1,2,3,4,5,...,20}
  // movies.unshift(createdMovie);

  // push는 배열에서 제일 뒤에 계속 추가되는 형식으로 id 값이 증가하게 됨.
  // {1,2,3,4,5,...,20,21,22,23}
  movies.push(createdMovie);
  res.send(createdMovie);
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸습니다!");
});
