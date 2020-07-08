const request = (path, method, body = null) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: body ? {
      'Content-Type': 'application/json'
    } : {},
    body: body ? JSON.stringify(body) : null,
    credentials: 'include'
  })
    .then(res => res.json());
};

export const post = (path, body) => request(path, 'POST', body);
export const get = (path, body) => request(path, 'GET', body);
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = (path, body) => request(path, 'DELETE', body);

export const photoPost = (path, file = null) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method: 'POST',
    body: file,
    credentials: 'include'
  })
    .then(res => res.json());
};
