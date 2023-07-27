import { IWeatherCountries, IWeatherCountry } from "../types";

export const sortData = (
  keyword: string,
  data: IWeatherCountries,
  temperatures: number[],
  sortBy: number
) => {
  console.log("sortData", { keyword, temperatures, sortBy });

  // 1. 검색어가 있으면 일단 먼저 Country.LocalizedNamed or LocalizedName로 필터링하고,
  const filteredData = data.filter((country: IWeatherCountry) => {
    return (
      country.LocalizedName.includes(keyword) ||
      country.Country.LocalizedName.includes(keyword)
    );
  });

  // 2. Temperature.Metric.Value값이 temperatures[0]~temperatures[1] 사이의 데이터만 필터링하고,
  const filteredData2 = filteredData.filter((country: IWeatherCountry) => {
    return (
      country.Temperature.Metric.Value >= temperatures[0] &&
      country.Temperature.Metric.Value <= temperatures[1]
    );
  });

  // 3. Temperature.Metric.Value을 기준으로 sort가 1이면 오름차순, 0이면 내림차순으로 정렬한다.
  if (sortBy) {
    filteredData2.sort((a: IWeatherCountry, b: IWeatherCountry) => {
      return a.Temperature.Metric.Value - b.Temperature.Metric.Value;
    });
  } else {
    filteredData2.sort((a: IWeatherCountry, b: IWeatherCountry) => {
      return b.Temperature.Metric.Value - a.Temperature.Metric.Value;
    });
  }

  // 4. 마지막으로 정렬된 데이터를 displayData에 저장한다.
  return filteredData2;
};
