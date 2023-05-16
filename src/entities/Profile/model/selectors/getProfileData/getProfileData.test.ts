import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error value', () => {
        const data = {
            username: 'Alex',
            age: 25,
            country: Country.Moldova,
            lastname: 'alexander',
            first: 'xander',
            city: 'Ungheni',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
