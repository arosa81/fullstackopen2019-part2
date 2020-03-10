import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => axios.get(BASE_URL).then(response => response.data)

const createPerson = newPerson => axios.post(BASE_URL, newPerson).then(response => response.data)

const updatePerson = (id, newPerson) => axios.put(`${BASE_URL}/${id}`, newPerson).then(response => response.data)

export default { getAll, createPerson, updatePerson };
