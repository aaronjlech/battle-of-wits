
const constants = [
   'SET_TOTAL_TEAMS',
   'ADD_TEAMS',
   'SET_TOTAL_ROUNDS',
   'SET_CURRENT_ROUND',
   'REMOVE_ROUND',
   'SET_TEAM_SCORE',
   'SET_CURRENT_TEAM',
   'SET_ROUND_QUESTIONS',
   'SET_CURRENT_QUESTION',
   'SET_QUESTION_CLOCK',
   'SUBMIT_ANSWER',
   'SET_GAME_WINNER',
   'PAUSE_GAME',
   'END_GAME',
   'START_GAME'
].reduce( (obj, actionType) => {
   obj[actionType] = actionType
   return obj
}, {})

export default constants
