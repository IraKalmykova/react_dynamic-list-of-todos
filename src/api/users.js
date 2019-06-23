const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllTodos = async () => {
  return fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
}

export const getAllUsers = async () => {
  return fetch(`${BASE_URL}/users`)
    .then(response => response.json())
}