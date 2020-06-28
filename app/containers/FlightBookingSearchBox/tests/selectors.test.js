import {
  makeSelectSourceCities,
  makeSelectDestinationCities,
} from '../selectors';

describe('makeSelectSourceCities', () => {
  const sourceCitiesSelector = makeSelectSourceCities();
  it('should select the source cities', () => {
    const cities = [];
    const mockedState = {
      sourceCities: [],
    };
    expect(sourceCitiesSelector(mockedState)).toEqual(cities);
  });
});

describe('makeSelectDestinationCities', () => {
  const destinationCitiesSelector = makeSelectDestinationCities();
  it('should select the destination cities', () => {
    const cities = [];
    const mockedState = {
      destinationCities: [],
    };
    expect(destinationCitiesSelector(mockedState)).toEqual(cities);
  });
});
