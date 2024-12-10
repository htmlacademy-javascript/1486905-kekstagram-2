const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные формы',
};

// На промисах

/*const load = (Route, Method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${Route}`, { Method, body })
    .then((response) =>
      response.ok ? response.json() : Promise.reject(ErrorText[Method])
    );

const getData = () => load(Route.GET_DATA);

const sendData = () => load(Route.SEND_DATA, Method.POST, body);*/

/*const createLoader = (onSuccess, onError) => () => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

export { createLoader };*/

// С использованием async/await

const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { method, body });
  return response.ok ? response.json() : Promise.reject(ErrorText[method]);
};

const getData = async () => await load(Route.GET_DATA);

const sendData = async (body) => await load(route.SEND_DATA, method.POST, body);

export { getData, sendData };


