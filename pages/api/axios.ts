import axios, { AxiosRequestConfig } from "axios";

let headers = {}
if (global.window != undefined) {
  headers = {
    "Authorization": localStorage.getItem("jwt")
  }
}
const config: AxiosRequestConfig = {
  headers
};

export const axios_instance = axios.create(config)

export interface ApiResponse<T> {
  status: number,
  message: string,
  payload: T
}