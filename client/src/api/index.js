import axios from 'axios'

const URL = 'https://dragonapp10.herokuapp.com'
// const URL = 'http://localhost:5000'

//Auth api

export const login = (data) => axios.post(`${URL}/user/login`, data)

//Programming qustion api

export const createQuestionBank = (data) => axios.post(`${URL}/questionPack`,data)

export const getQuestionBank = () => axios.get(`${URL}/questionPacks`)

export const getSingleQuestionBank = (id) => axios.get(`${URL}/questionPack/${id}`)

export const addQuestionToBank = (id,data) => axios.post(`${URL}/question/${id}`,data)

export const deleteQuestionBank = (id) => axios.delete(`${URL}/questionPack/${id}`)

export const deleteQuestion = (id) => axios.delete(`${URL}/questionPack/question/${id}`)

//User Api

export const changeUsername = (data) => axios.post(`${URL}/user/username/change`,data)

export const getscheduledInterviews = (id) => axios.get(`${URL}/user/rooms/${id}`)

export const uploadResume = (data) => axios.post(`${URL}/user/uploadResume`, data)

export const addInterviewScore = (data)=>axios.post(`${URL}/user/addInterviewScore`,data)

//Room API

export const scheduleInterview = (data) => axios.post(`${URL}/scheduledRoom`, data)

export const createActiveInterview = (data) => axios.post(`${URL}/activeRoom`, data)

export const deleteRoom= (id) => axios.delete(`${URL}/room/${id}`)

//STream Api

export const getAllStreams = () => axios.get(`${URL}/stream/currentStreams`)

export const addNewStream = (data) => axios.post(`${URL}/stream/newStream`,data)

export const deleteStream = (id) => axios.delete(`${URL}/stream/deleteStream/${id}`)

export const getsahebquestion = (id) => axios.get(`${URL}/getsahebquestion/${id}`)

