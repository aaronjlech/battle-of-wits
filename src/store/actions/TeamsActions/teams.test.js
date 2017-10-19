import * as actionTypes from '../../constants';
import * as actions from './index';

describe('team actions', () => {
   it('create an action that increments total teams', () => {
      const expectedAction = {
         type: actionTypes.INCREASE_TEAMS
      }
      expect(actions.increaseTeams()).toEqual(expectedAction)
   })
   it('create an action that decrements total teams', () => {
      const expectedAction = {
         type: actionTypes.DECREASE_TEAMS
      }
      expect(actions.decreaseTeams()).toEqual(expectedAction)
   })
   it('')

})
