import { RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { environment as env } from 'environments/environment';


export const generateRequestLink = (task: string) => {
  return `${env.ENDPOINT}/${task}`;
};

// generates the options object which contains the headers
export const generateOptions = (token: string, method: string, body?: any) => {
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
export const objectToArray = (obj) => {
  // tslint:disable:forin
  const arr = [];
  for (const item in obj) {
    arr.push(obj[item]);
  }
  return arr;
};
export const adjustLayout = () => {
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  const dashboardHeight = document.getElementsByClassName('dashboard')[0].clientHeight;
  const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
  const totalHeight = dashboardHeight + headerHeight + 'px';
  const addTodoEl = document.getElementById('add-todo');
  const formEl = document.getElementById('add-todo-form');
  addTodoEl.style.height = totalHeight;
  formEl.style.top = (window.innerHeight / 2) - (formEl.clientHeight / 2) + 'px';
};

export const genRandomId = () => Math.round(Math.random() * 999999);
