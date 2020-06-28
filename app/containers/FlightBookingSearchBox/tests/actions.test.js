import { resetState } from '../actions';
import { RESET_STATE } from '../constants';

describe('FlightBookingSearchBox actions', () => {
  describe('Reset State', () => {
    it('has a type of RESET_STATE', () => {
      const expected = {
        type: RESET_STATE,
      };
      expect(resetState()).toEqual(expected);
    });
  });
});
