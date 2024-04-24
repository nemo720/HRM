// * fake data's
import { faker } from '@faker-js/faker';

export function createRandomUser() {
    return {
        EmployeeName: faker.person.fullName(),
        Gender: faker.person.sex(),
        DaysWorking: faker.number.int(30),
        DaysRest: faker.number.int(5),
    };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 11,
});
