import { Country, State, City } from "country-state-city";

const useLoaction = () => {
  const getCountryByCode = (countryCode: string) => {
    return Country.getAllCountries().find(
      (country) => country.isoCode === countryCode
    );
  };

  const getStateByCode = (stateCode: string, countryCode: string) => {
    const states = State.getAllStates().find(
      (state) =>
        state.countryCode === countryCode && state.isoCode === stateCode
    );

    if (!states) {
      return null;
    }
    return states;
  };

  const getCountryStates = (countryCode: string) => {
    return State.getAllStates().filter(
      (state) => state.countryCode === countryCode
    );
  };

  return {
    getAllCountries: Country.getAllCountries,
    getCountryByCode,
    getStateByCode,
    getCountryStates,
  };
};

export default useLoaction;
