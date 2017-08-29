import axios from 'axios';




const fetchQuestion(params) {
   axios.get(`https://opentdb.com/api.php?amount=1&category=25&difficulty=${params.difficulty}&type=multiple`)
}
