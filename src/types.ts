export type Weather = {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  dt: number;
  id: number;
  name: string;
  sys: {
    country: string;
  };
  clouds: {
    all: number;
  };
  weather: {
    main: string;
  }[];
  fetchDateTime?: number;
};

export type WeatherResponse = {
  list: Weather[];
};
