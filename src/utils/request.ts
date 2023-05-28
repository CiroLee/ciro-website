import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { HTTP_STATUS } from '@/utils/constants';
import { ICommonRes } from '@/types/http';
const axiosInstance = axios.create({
  timeout: 3 * 36000,
  withCredentials: true,
});

const request = <T>(config: AxiosRequestConfig): Promise<ICommonRes<T>> => {
  return new Promise((resolve, reject) => {
    axiosInstance(config).then(res => {
      if (res.status === HTTP_STATUS.axiosSuccess) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    });
  });
};

export default request;
