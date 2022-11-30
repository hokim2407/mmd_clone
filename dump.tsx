export const hospitals: Hospital[] = [
  {
    tags: ['태그1', '태그2'],
    cates: [
      {name: '과1', cnt: 2},
      {name: '과2', cnt: 3},
    ],
    times: [
      {day: '월', open: '09:00', close: '18:00', lunch: ''},
      {day: '화', open: '09:00', close: '18:00', lunch: ''},
      {day: '수', open: '09:00', close: '18:00', lunch: ''},
      {day: '목', open: '09:00', close: '18:00', lunch: ''},
      {day: '금', open: '09:00', close: '14:00', lunch: ''},
      {day: '일', open: '', close: '', lunch: ''},
      {day: '공휴일', open: '', close: '', lunch: ''},
    ],
    name: '00병원',
    starStats: {
      avg: 9.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 11,
    addr: '00동 00구 00동',
    coord: {
      longitude: 127.0349290408194,
      latitude: 37.5242413667866,
    },
    dist: '1.2km',
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '친절해요',
  },
  {
    tags: ['태그4', '태그5'],
    cates: [
      {name: '과3', cnt: 4},
      {name: '과4', cnt: 5},
    ],
    times: [
      {day: '월', open: '09:00', close: '18:00', lunch: ''},
      {day: '화', open: '09:00', close: '18:00', lunch: ''},
      {day: '수', open: '09:00', close: '18:00', lunch: ''},
      {day: '목', open: '09:00', close: '18:00', lunch: ''},
      {day: '금', open: '09:00', close: '14:00', lunch: ''},
      {day: '일', open: '', close: '', lunch: ''},
      {day: '공휴일', open: '', close: '', lunch: ''},
    ],
    name: 'ㅁㅁ병원',
    starStats: {
      avg: 7.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 13,
    addr: '11동 11구 11동',
    coord: {
      longitude: 127.0349290408194,
      latitude: 37.5242413667866,
    },
    dist: '0.2km',
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '깨끗해요',
  },
  {
    tags: ['태그@', '태그#'],
    cates: [
      {name: '과11', cnt: 4},
      {name: '과22', cnt: 5},
    ],
    times: [
      {day: '월', open: '09:00', close: '18:00', lunch: ''},
      {day: '화', open: '09:00', close: '18:00', lunch: ''},
      {day: '수', open: '09:00', close: '18:00', lunch: ''},
      {day: '목', open: '09:00', close: '18:00', lunch: ''},
      {day: '금', open: '09:00', close: '14:00', lunch: ''},
      {day: '일', open: '', close: '', lunch: ''},
      {day: '공휴일', open: '', close: '', lunch: ''},
    ],
    name: 'ㅎㅎ병원',

    starStats: {
      avg: 3.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 3,
    addr: '22동 22구 22동',
    coord: {
      longitude: 127.0349290408194,
      latitude: 37.5242413667866,
    },
    dist: '2.4km',
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '가까워요',
  },
];

export const AD = {
  title: '00 할인',
  desc: '00할인 중!',
  price: '10000',
  star: 8.8,
  reviewCnt: 26,
  review: '친절해요',
  thumbnail:
    'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
};

export const banners = [
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    id: 1,
    goto: 'Map',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    id: 12,
    goto: 'Detail',
  },
  {
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    id: 6,
    goto: 'Event',
  },
];

export const mainCategories = [
  '이벤트',
  '치과',
  '피부과',
  '안과',
  '내과',
  '산부인과',
  '정신건강의학과',
  '더보기',
];

export const filters = ['필터1', '필터2', '필터3'];

export const coords = [
  {
    keword: '나이지리아',
    longitude: 36.0759224742651,
    latitude: -1.1271554324040838,
  },
  {
    keword: '도산공원',
    longitude: 127.0349290408194,
    latitude: 37.5242413667866,
  },
  {
    keword: '스타필드 코엑스몰',
    longitude: 127.06001305952668,
    latitude: 37.50996669629023,
  },
];

export const doctors: Doctor[] = [
  {
    tags: ['태그1', '태그2'],
    cates: [
      {name: '과1', cnt: 2},
      {name: '과2', cnt: 3},
    ],
    name: '00원장',
    starStats: {
      avg: 9.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 11,
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '친절해요',
  },
  {
    tags: ['태그4', '태그5'],
    cates: [
      {name: '과3', cnt: 4},
      {name: '과4', cnt: 5},
    ],
    name: 'ㅁㅁ 의사',
    starStats: {
      avg: 7.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 13,
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '깨끗해요',
  },
  {
    tags: ['태그@', '태그#'],
    cates: [
      {name: '과11', cnt: 4},
      {name: '과22', cnt: 5},
    ],
    name: 'ㅎㅎ 의사',

    starStats: {
      avg: 3.2,
      like: 4,
      hate: 2,
      stats: [
        {name: '친절', star: 9.2},
        {name: '금액', star: 6.2},
        {name: '효과', star: 8.2},
      ],
    },
    review: 3,
    thumbnail:
      'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
    reviewContent: '가까워요',
  },
];
