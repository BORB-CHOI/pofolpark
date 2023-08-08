import { IWeatherCountry } from "../types";

export const sortData = (
  keyword: string,
  data: IWeatherCountry[],
  temperatures: number[],
  sortBy: number
) => {
  // 1. 검색어가 있으면 일단 먼저 Country.LocalizedNamed or LocalizedName로 필터링하고,
  const filteredData = data.filter((country: IWeatherCountry) => {
    return (
      country.localized_name.includes(keyword) ||
      country.country_localized_name.includes(keyword)
    );
  });

  // 2. temperature_value값이 temperatures[0]~temperatures[1] 사이의 데이터만 필터링하고,
  const filteredData2 = filteredData.filter((country: IWeatherCountry) => {
    return (
      country.temperature_value >= temperatures[0] &&
      country.temperature_value <= temperatures[1]
    );
  });

  // 3. temperature_value을 기준으로 sort가 1이면 오름차순, 0이면 내림차순으로 정렬한다.
  if (sortBy) {
    filteredData2.sort((a: IWeatherCountry, b: IWeatherCountry) => {
      return a.temperature_value - b.temperature_value;
    });
  } else {
    filteredData2.sort((a: IWeatherCountry, b: IWeatherCountry) => {
      return b.temperature_value - a.temperature_value;
    });
  }

  // 4. 마지막으로 정렬된 데이터를 displayData에 저장한다.
  return filteredData2;
};
