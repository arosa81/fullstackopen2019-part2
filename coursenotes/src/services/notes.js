import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/notes';

const getAll = () => {
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }
  return axios.get(BASE_URL)
    .then(response => response.data.concat(nonExisting))
}

const create = newObject => axios.post(BASE_URL, newObject).then(response => response.data)

const update = (id, newObject) => axios.put(`${BASE_URL}/${id}`, newObject).then(response => response.data)

export default { getAll, create, update }
