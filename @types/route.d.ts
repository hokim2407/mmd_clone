declare type NavParamList = {
  Landing: undefined;
  Main: undefined;
  Search: {keyword?: string};
  Map: {
    keyword?: string;
    location?: {latitude: number; longitude: number};
  };
  Detail: {
    hospital: Hospital;
  };
};
declare;
type NavProps = NativeStackScreenProps<NavParamList, string>;
type NavPropsNavigation = NavProps['navigation'];

declare type OnScrollEvent = {
  nativeEvent: {
    contentInset: {bottom: number; left: number; right: number; top: number};
    contentOffset: {x: number; y: number};
    contentSize: {height: number; width: number};
    layoutMeasurement: {height: number; width: number};
    zoomScale: number;
  };
};

declare type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

declare module '@env' {
  export const GOOGLE_KEY: string;
}
declare type HospitalTimeInfo = {
  day: string;
  open: string;
  close: string;
  lunch: string;
};

declare type Hospital = {
  tags: string[];
  cates: {
    name: string;
    cnt: number;
  }[];
  times: HospitalTimeInfo[];

  name: string;
  starStats: Stats;

  review: number;
  reviewContent?: string;

  addr: string;
  coord: {longitude: number; latitude: number};

  dist: string;
  thumbnail: string;
};

declare type Doctor = {
  tags: string[];
  cates: {
    name: string;
    cnt: number;
  }[];

  name: string;
  starStats: Stats;


  review: number;
  reviewContent?: string;

  thumbnail: string;
};

declare type Stats = {
  avg: number;

  like: number;
  hate: number;
  stats: {
    name: string;
    star: number;
  }[];
};
