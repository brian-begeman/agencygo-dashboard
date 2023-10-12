// import fetchRaw from 'electron-fetch';
// // import type { Response, RequestInit } from 'electron-fetch';
// import Store from 'electron-store';
// import { ipcMain } from 'electron';
import { API_URL } from '../config';

interface IFetchOptions extends RequestInit {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  withAuth?: boolean;
}

const fetchReq = async (
  url: string,
  options: IFetchOptions,
  
): Promise<Response> => {
  try {
    let token = '';
    if (options.withAuth) {
      // const store = new Store();
      // token = store.get('cookie') as string;
      // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTIzYjZjNzNmNDkwYjAyMGE2YTYyYTYiLCJpYXQiOjE2OTcwMjg1MTAsImV4cCI6MTY5NzAzMjExMH0.Y5FlMyQh7n9zjoQ3RymL00dI0DuXruzqbuSe9kn3CmE';
      if (!token) {
        // ipcMain.emit('logout-request');
        throw new Error('No token');
      }
    }
    const urlPath = `${API_URL}/${url}`;
    const optionsFetch = {
      ...options,
    };
    if (options.withAuth) {
      optionsFetch.headers = {
        ...optionsFetch.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    const response = await fetch(urlPath, optionsFetch);
    const code = response.status;
    if (code >= 400) {
      console.log(response)
      throw new Error('Failed to fetch data');
    }
    return response;
  } catch (error: any) {
    throw new Error(error?.msg || error?.message);
  }
};

export default fetchReq;
