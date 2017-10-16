import { ADD_TEAMS, INCREASE_TEAMS, DECREASE_TEAMS, SET_CURRENT_TEAM, SET_CURRENT_QUESTIONS } from '../../constants';



export function decreaseTeams(){
   return {
      type: DECREASE_TEAMS
   }
}

export function increaseTeams(){
   return {
      type: INCREASE_TEAMS
   }
}
