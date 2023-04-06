import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

let baseURL = process.env.NEXT_PUBLIC_API_URL;

// ตั้งค่า baseURL ของ axios
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials:true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
axios.interceptors.request.use(
  (config) => {
    // ใส่ logic ตรวจจับและแก้ไข request ตามต้องการ
    // eslint-disable-next-line no-console
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // ใส่ logic ตรวจจับและแก้ไข response ตามต้องการ
    // eslint-disable-next-line no-console
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// สร้าง type สำหรับ response ของ axios
type AxiosResponseData<T> = {
  data: T;
};

// สร้าง type สำหรับ error ของ axios
type AxiosErrorData = {
  message: string;
  response?: AxiosResponse;
};

// สร้าง function สำหรับรับ response ของ axios
const onSuccess = (response: AxiosResponse) => {
  return response.data;
};

// สร้าง function สำหรับรับ error ของ axios
const onError = (error: AxiosErrorData) => {
  // eslint-disable-next-line no-console
  console.log(error);
  if (error.response) {
    // กรณี error ที่เกิดจาก API response
    throw error.response.data.message;
  } else {
    // กรณี error ที่ไม่ได้เกิดจาก API response
    throw error.message;
  }
};

// สร้าง function สำหรับส่ง request ด้วย axios
const sendRequest = async <T>(
  config: AxiosRequestConfig,
): Promise<AxiosResponseData<T>> => {
  try {
    const response = await axiosInstance.request<T>(config);
    return onSuccess(response);
  } catch (error:any) {
    return onError(error);
  }
};

export default sendRequest;
