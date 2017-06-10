import { RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { environment as env } from 'environments/environment';


export const generateRequestLink = (task: string): string => {
  return `${env.ENDPOINT}/${task}`;
};

// generates the options object which contains the headers
export const generateOptions = (token: string, method: string, body?: any): RequestOptions => {
  const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  const search = new URLSearchParams();
  search.set('api_key', env.KEY);
  return new RequestOptions({
    headers,
    method,
    body,
    search
  });
};

// from object of objects to an array of objects
export const objectToArray = (obj: object): any[] => {
  // tslint:disable:forin
  if (obj instanceof Array) {
    return obj;
  }
  const arr = [];
  for (const item in obj) {
    arr.push(obj[item]);
  }
  return arr;
};

export const adjustLayout = (): void => {
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  const dashboardHeight = document.getElementsByClassName('dashboard')[0].clientHeight;
  const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
  // if there's not so many todos usually the body height would be larger
  const totalHeight = (dashboardHeight + headerHeight) > bodyHeight ?
   (dashboardHeight + headerHeight + 'px') : bodyHeight + 'px';
  const addTodoEl = document.getElementById('add-todo');
  const formEl = document.getElementById('add-todo-form');
  addTodoEl.style.height = totalHeight;
  formEl.style.top = (window.innerHeight / 2) - (formEl.clientHeight / 2) + 'px';
};

export const genRandomId = (): number => Math.round(Math.random() * 999999);
