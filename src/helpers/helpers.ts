import axios from "axios";
import { blur,  focus } from "../styles/playerCounter"

export function isEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0;
}

export const setStorage = (key: string, data: Object): void => {
  const dataJson: string = JSON.stringify(data)
  sessionStorage.setItem(key, dataJson)
}

export const getStorage = (key: string): [] => {
  const getData: any = sessionStorage.getItem(`${key}`)
  const dataJson = JSON.parse(getData)
  return dataJson
}

export const setFocus = (focused: Function, blur1: Function, blur2: Function) => {
  focused(focus)
  blur1(blur)
  blur2(blur)
}

export const fetchTrending = (callback: Function) => {
  const options = {
    method: 'GET',
    url: 'https://steamcharts.p.rapidapi.com/api/v1/games/trending',
    headers: {
      'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
      'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    callback(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}