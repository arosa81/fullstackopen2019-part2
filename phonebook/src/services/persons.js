import axios from 'axios';
export const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => axios.get(BASE_URL).then(response => response.data)

//Get specific person using ID
const getPerson = id => axios.get(`${BASE_URL}/${id}`).then(response => response.data)

//Create person with person object
const createPerson = newPerson => axios.post(BASE_URL, newPerson).then(response => response.data)

//Update person using ID
const updatePerson = (id, newPerson) => axios.put(`${BASE_URL}/${id}`, newPerson).then(response => response.data)

//Delete person using ID
const deletePerson = (id, newPerson) => axios.delete(`${BASE_URL}/${id}`, newPerson).then(response => response.data)

export default { getAll, getPerson, createPerson, updatePerson, deletePerson };
