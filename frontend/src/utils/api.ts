import Cookie from "js-cookie";
import axios from "axios";
import { ITodoVariables } from "../types";
import { QueryFunctionContext } from "react-query";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_API_LOCAL_URL,
  withCredentials: true,
  // 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목
  //   여기서, credential 정보가 포함되어 있는 요청은 아래 두 가지 경우를 의미합니다.

  // 1. 쿠키를 첨부해서 보내는 요청
  // 2. 헤더에 Authorization 항목이 있는 요청
});

export const transformTodo = (variables: ITodoVariables) =>
  instance
    .post(`/chatgpt/`, variables, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);

export const getSites = () =>
  instance.get(`/sites/`).then((response) => response.data);

export const getAllWeather = () =>
  instance.get(`/weathers/`).then((response) => response.data);

export const getWeatherDetail = ({ queryKey }: QueryFunctionContext) => {
  const [_, weatherPk] = queryKey;
  return instance
    .get(`/weathers/${weatherPk}`)
    .then((response) => response.data);
};
