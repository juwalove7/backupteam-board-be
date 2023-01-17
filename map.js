// 아래 셋의 공통점
// 1. 배열한테 사용한다.
const arrayTest = ["1", "2", "3"];
arrayTest.map();
arrayTest.filter();
arrayTest.find();

// 2. return 값이 있다.
// 배열로 return
const filterResult = arrayTest.filter();

// 단일값으로 return
const findResult = arrayTest.find();

// 배열로 return
const mapResult = arrayTest.map();

// map

// filter

// 콜백 내부에서 짝수인 수들을 '참'으로 반환하고, 보따리인 filter()는 콜백이 뱉는 리턴값들 중 '참'인 애들만 모아서 원래 요소로 새 배열에 넣고 반환해준다:
const numbers3 = [5, 4, 3, 2, 1, 0]
const evenNumbers = numbers3.filter(function (value) {
    return value % 2 === 0
})
console.log(`\n원래 배열: ${numbers3}`)
console.log(`짝수만 추출: ${evenNumbers}`)

// find

Array.find() 용법:
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// Expected output: 12



// 1. score.score 가 40 점 미만이면 true , 이상이면 false 를 반환하는 함수
const 함수 = (score) => {
  if (score.score < 40) {
    return true;
  } else {
    return false;
  }
};

// 2. 삼항 연산자로 변환
const 함수 = (score) => {
  const result = score.score < 40 ? true : false;
  return result;
};

// 3. 변수 할당 없이 연산을 반환
const 함수 = (score) => {
  return score.score < 40 ? true : false;
};

// 4. 3항 연산자 무의미 하게 사용하는 것 제거
const 함수 = (score) => {
  return score.score < 40;
};

// 5. 화살표 함수 return 생략 가능 조건일때 생략
const 함수 = (score) => score.score < 40;

// 6. 화살표 함수 인자 하나일때 괄호 생략
const 함수 = (score) => score.score < 40;

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

// 3. 모든 movies 를 반환하는 개발을 한다. 단 movie 를 작성한 user 의 이름을 포함 해라

// 4.  id 가 1번에 해당하는 user 가 작성한 영화 movie_title 로만 이루어진 배열을 가져온다.

// 5. Looney Tunes: Back in Action 라는 movie_title 을 가진 게시물의 작성자의 이메일을 가져온다.
