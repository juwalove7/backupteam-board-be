// 배열로 return
// const filterResult = arrayTest.filter();
// 조건에 일치하는것을 걸러내는것. true인 것들만

// 단일값으로 return
// const findResult = arrayTest.find();

// 배열로 return
// const mapResult = arrayTest.map();
// 배열에 있는 모든 item 들을 반환

const scores = [
  {
    name: "지영",
    score: 80,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "효원",
    score: 50,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "정기",
    score: 60,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "대신",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "택환",
    score: 74,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "호승",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "희선",
    score: 23,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "설인",
    score: 56,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
];

// 1. 배열에서 40점 미만 점수 받은 자 구하기
// for 문 의 경우에는 전부 이름으로 된 배열을 반환하는 한편-ok,
// filter 를 사용하면 배열내 객체들로 이루어진 배열을 반환한다.
// for 문을 사용 했을때 처럼 이름으로만 이루어진 배열로 반환하도록 수정한다.

// const 정예 = scores.filter((value) => {
//   return value.score < 40;
// });
// console.log(정예);

// 숙제 1번 완료
const want = scores
  .map((score) => {
    if (score.score < 40) {
      return {
        name: score.name,
        score: score.score,
      };
    }
  })
  .filter((e) => e);
console.log(want);

// 2. 가장 공부를 잘했던 "지영" 의 점수 확인
// for 문의 경우 지영 의 score 반 변수에 할당 되는 한편
// find 를 사용하면 지영의 객체를 반환한다.
// 이때 지영의 score 만 할당되도록 수정한다.

// 2번 숙제 완료
let scoreTop = null;
const elite = scores.map((score) => {
  for (let i = 0; i < scores.length; i++)
    if (scoreTop < score.score) {
      scoreTop = score.score;
    }
  return { score: scoreTop };
});
console.log(scoreTop);

const movies = [
  {
    id: 1,
    movie_title: "Misérables, Les",
    hit_count: 23,
    user_id: 1,
    created_at: "2022-08-11 00:40:32",
  },
  {
    id: 3,
    movie_title: "Captain Ron",
    hit_count: 1,
    user_id: 1,
    created_at: "2022-08-14 18:09:47",
  },
  {
    id: 4,
    movie_title: "Siberia",
    hit_count: 37,
    user_id: 9,
    created_at: "2022-02-08 02:44:29",
  },
  {
    id: 5,
    movie_title: "Girl, The",
    hit_count: 82,
    user_id: 6,
    created_at: "2022-08-29 00:02:21",
  },
  {
    id: 6,
    movie_title: "44 Minutes: The North Hollywood Shoot-Out",
    hit_count: 2,
    user_id: 4,
    created_at: "2022-12-06 20:33:12",
  },
  {
    id: 7,
    movie_title: "C'mon Man",
    hit_count: 62,
    user_id: 2,
    created_at: "2022-08-18 16:43:05",
  },
  {
    id: 8,
    movie_title: "Jim Jefferies: Alcoholocaust",
    hit_count: 4,
    user_id: 8,
    created_at: "2022-07-05 16:49:03",
  },
  {
    id: 9,
    movie_title: "Grand Budapest Hotel, The",
    hit_count: 35,
    user_id: 9,
    created_at: "2022-01-10 08:22:27",
  },
  {
    id: 10,
    movie_title: "Ju-on: The Curse 2",
    hit_count: 64,
    user_id: 7,
    created_at: "2022-10-18 21:59:19",
  },
  {
    id: 11,
    movie_title: "Looney Tunes: Back in Action",
    hit_count: 17,
    user_id: 8,
    created_at: "2022-10-26 06:56:30",
  },
  {
    id: 12,
    movie_title: "Undertaker and His Pals, The",
    hit_count: 91,
    user_id: 6,
    created_at: "2022-02-22 11:23:11",
  },
  {
    id: 13,
    movie_title: "BlinkyTM",
    hit_count: 4,
    user_id: 5,
    created_at: "2022-01-08 21:02:09",
  },
  {
    id: 14,
    movie_title: "Alien Predator (Mutant II) (Falling, The)",
    hit_count: 47,
    user_id: 2,
    created_at: "2022-02-28 15:55:13",
  },
  {
    id: 15,
    movie_title: "Lorenzo's Oil",
    hit_count: 26,
    user_id: 6,
    created_at: "2022-01-21 02:46:27",
  },
  {
    id: 16,
    movie_title: "Beyond Re-Animator",
    hit_count: 88,
    user_id: 5,
    created_at: "2022-04-26 13:44:52",
  },
  {
    id: 17,
    movie_title: "Mississippi Burning",
    hit_count: 64,
    user_id: 8,
    created_at: "2022-11-14 05:23:58",
  },
  {
    id: 18,
    movie_title:
      "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)",
    hit_count: 55,
    user_id: 1,
    created_at: "2022-03-24 06:27:21",
  },
  {
    id: 19,
    movie_title: "Power and Terror: Noam Chomsky in Our Times",
    hit_count: 85,
    user_id: 3,
    created_at: "2022-04-30 19:43:43",
  },
  {
    id: 20,
    movie_title: "Grumpy Cat's Worst Christmas Ever",
    hit_count: 58,
    user_id: 9,
    created_at: "2022-12-13 00:46:27",
  },
];

const users = [
  { id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" },
  { id: 2, name: "Mead Lantiff", email: "mlantiff2q@imageshack.us" },
  { id: 3, name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com" },
  { id: 4, name: "Kimmy Hulks", email: "khulks2o@google.de" },
  { id: 5, name: "Margot Haward", email: "mhaward2n@census.gov" },
  { id: 6, name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de" },
  { id: 7, name: "Tuck Francis", email: "tfrancis2l@msn.com" },
  { id: 8, name: "Duke Davsley", email: "ddavsley2k@pinterest.com" },
  { id: 9, name: "Jimmy Weld", email: "jweld2j@tripadvisor.com" },
  { id: 10, name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov" },
];

// 3. 모든 movies 를 반환하는 개발을 한다.
// 단 movie 를 작성한 user 의 이름을 포함 해라

// users의 id는 movis의 user_id와 연결된다.
//map filter, find, 객체 분해할당

// 이중 반복문
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(j * i);
//   }
// }

//  4-1번
const allMovies = movies.map((movie) => {
  // movies 를 반복 돌게함
  // --> 1번 무비 -> 1~10번 유저 -> 2번 무비 -> 1~10번 유저 -> 3번 무비 -> ...
  const username = users.filter((user) => {
    // users를 반복 돌게하면서 movie 의 user_id랑 user.id가 같으면
    if (movie.user_id === user.id) {
      return true;
    }
  }); // 배열로 반환됨

  return {
    id: movie.id,
    movie_title: movie.movie_title,
    hit_count: movie.hit_count,
    user_id: movie.user_id,
    created_at: movie.created_at,
    name: username[0].name,
  };
});

// console.log(allMovies);
// 첫번째 반복
// movie :
// {
//   id: 1,
//   movie_title: "Misérables, Les",
//   hit_count: 23,
//   user_id: 1,
//   created_at: "2022-08-11 00:40:32",
//   여기에 이름을 붙여주고 싶음
// }
// 유저는 1 - 10 까지 돔
// filter 에서 조건에 일치해서 true 를 반환한 값들로 배열이 구성됨
// username :
// [{ id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" }]

//username[0].name
// Trix Hannaby

/* 4-1
const allMovies = movies.map((movie) => {
  const name = users.find((user) => movie.user_id === user.id).name;
  return {
    ...movie,
    name,
  };
});

console.log(allMovies);
*/

// const usersname = [
//   [{ id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" }],
//   [{ id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" }],
//   [{ id: 9, name: "Jimmy Weld", email: "jweld2j@tripadvisor.com" }],

//   // 뭐가 담겨올까요?
// ];

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const plusTwo = numArr.map((item) => item + 2);
// console.log(plusTwo);

// map
// map 은 return되는 값들로 배열이 구성된다.
// const allmovis = movies.map((all) => {
//   console.log("------------------구분선------------------");
//   console.log(all);
// });

// for (all of movies) {
//   console.log("------------------구분선------------------");
//   console.log(all);
// }

// filter
// 조건에 의해 true 인 값들로만 배열이 구성된다.
// const id9Movies = movies.filter((movie) => movie.user_id === 9);

// console.log(id9Movies);

// const arrowFn = () => console.log();
// const arrowFn2 = () => {
//   console.log();
//   return;
// };

// console.log(allmovis);

// 4-2.  id 가 1번에 해당하는 user 가
// 작성한 영화 movie_title 로만 이루어진 배열을 가져온다.

console.log(
  "movie_title",
  allMovies[0].movie_title,
  allMovies[1].movie_title,
  allMovies[2].movie_title
);

// 4-3. Looney Tunes: Back in Action 라는 movie_title 을 가진 게시물의 작성자의 이메일을 가져온다.
const findmovies = movies.find((movie) => {
  if (movie.movie_title === "Looney Tunes: Back in Action") {
    return true;
  }
});

// const findmovies2 = movies.find(
//   (movie) => movie.movie_title === "Looney Tunes: Back in Action"
// );

// console.log(findmovies);
// console.log(findmovies.user_id);

const finduser = users.find((user) => {
  if (user.id === findmovies.user_id) {
    return true;
  }
});
// 1 false 2 false 3 false 4 false 5 false 6 false 7 false 8 true stop => 8 반환
// const finduser2 = users.find((user) => user.id === findmovies.user_id);
// console.log(finduser);
// console.log(finduser.email);
console.log(finduser.email);

// console.log(findmovies);
// console.log(findmovies.user_id);

// {
//   id: 20,
//   movie_title: "Grumpy Cat's Worst Christmas Ever",
//   hit_count: 58,
//   user_id: 9,
//   created_at: "2022-12-13 00:46:27",
// },

// const allMovies = movies.map((movie) => {
//   // movies 를 반복 돌게함
//   // --> 1번 무비 -> 1~10번 유저 -> 2번 무비 -> 1~10번 유저 -> 3번 무비 -> ...
//   const username = users.filter((user) => {
//     // users를 반복 돌게하면서 movie 의 user_id랑 user.id가 같으면
//     if (movie.user_id === user.id) {
//       return true;
//     }
//   }); // 배열로 반환됨

//   return {
//     id: movie.id,
//     movie_title: movie.movie_title,
//     hit_count: movie.hit_count,
//     user_id: movie.user_id,
//     created_at: movie.created_at,
//     name: username[0].name,
//   };
// });

// console.log(allMovies);
