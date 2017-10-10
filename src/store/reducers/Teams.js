

const initialState = {
   totalTeams: 0,
   teams: [],
   currentTeam: null
}
// team = {
//    name: "STRING",
//    color: OBJECT,
//    score: 0
// }

const Teams = (state = initialState, action) => {
   switch (action.type) {
      case 'ACTION_ONE':

         break;
      default:
         return state;
   }
}

export default Teams;
