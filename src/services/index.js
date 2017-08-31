import axios from 'axios';




export function fetchQuestion(params) {
   const { category, difficulty} = params
   return axios.get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`)
}
