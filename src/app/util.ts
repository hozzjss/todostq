import { ENDPOINT, KEY } from './API';
import { RequestOptions, Headers } from '@angular/http';

export const generateRequestLink = (task: string) => {
  return `${ENDPOINT}/${task}?api_key=${KEY}`;
};

// generates the options object which contains the headers
export const generateOptions = (token: string, method: string, body?: any) => {
  const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  return new RequestOptions({
    headers,
    method,
    body
  });
};
export const objectToArray = (obj) => {
  // tslint:disable:forin
  const arr = [];
  for (const item in obj) {
    arr.push(obj[item]);
  }
  return arr;
}