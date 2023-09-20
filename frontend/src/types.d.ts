/* interface란?
interface는 타입을 정의하는 것이다.
interface는 타입스크립트에서만 사용할 수 있는 문법이다.
interface는 객체의 타입을 정의할 때 사용한다.
interface는 클래스와 비슷하지만 클래스보다 더 많은 기능을 제공한다.
interface는 클래스와 달리 컴파일 후에는 사라진다.
interface는 클래스와 달리 접근 제한자를 사용할 수 없다.
interface는 클래스와 달리 속성에 기본 값을 할당할 수 없다.
interface는 클래스와 달리 속성에 static 키워드를 사용할 수 없다.
interface는 클래스와 달리 extends 키워드를 사용할 수 없다.
interface는 클래스와 달리 implements 키워드를 사용할 수 없다.
interface는 클래스와 달리 생성자를 사용할 수 없다.
interface는 클래스와 달리 new 키워드를 사용할 수 없다. */

export interface ITodoVariables {
  condition: string;
  todo: string;
}

// ----------------------------------------------------------------

// Weathers Interface

export interface IWeatherCountry {
  key: number;
  country_code: string;
  country_localized_name: string;
  localized_name: string;
  temperature_value: number;
}

// ----------------------------------------------------------------

// Weather Detail Interface

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface APIWeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface DBWeatherData {
  key: number;
  country_code: string;
  country_localized_name: string;
  localized_name: string;
  temperature_value: string;
}

interface WeatherDetail {
  api_data: APIWeatherData;
  db_data: DBWeatherData;
}

// ----------------------------------------------------------------

// Lucky Draw Interfaces

export interface videoItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}
