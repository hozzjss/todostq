import { RequestOptions, Headers } from '@angular/http';
import { environment as env } from 'environments/environment';


export const generateRequestLink = (task: string) => {
  return `${env.ENDPOINT}/${task}?api_key=${env.KEY}`;
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

// from object of objects to an array of objects
export const objectToArray = (obj) => {
  // tslint:disable:forin
  const arr = [];
  for (const item in obj) {
    arr.push(obj[item]);
  }
  return arr;
};
