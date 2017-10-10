
const initialState = {
   rounds: [],
   totalRounds: 0,
   currentRound: null

}

const Rounds = (state = initialState, action) => {
   switch (action.type) {
      case 'SOME_ACTION':
         return state;
         break;
      default:
         return state;
   }
}
export default Rounds;
