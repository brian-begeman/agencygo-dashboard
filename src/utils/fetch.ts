import fetchRaw from 'electron-fetch';
import type { Response, RequestInit } from 'electron-fetch';
import { API_URL } from '../config';

interface IFetchOptions extends RequestInit {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const fetch = async (
  url: string,
  options: IFetchOptions
): Promise<Response> => {
  const urlPath = `${API_URL}/${url}`;
  const response = await fetchRaw(urlPath, options);
  return response;
};

export default fetch;
