// * fake data's
import { faker } from '@faker-js/faker';

export function createRandomBenefits() {
    return {
        EmployeeName: faker.person.fullName(),
        Gender: faker.person.sex(),
        DaysWorking: faker.number.int(30),
        DaysRest: faker.number.int(5),
    };
}

export const BENEFITS = faker.helpers.multiple(createRandomBenefits, {
    count: 4,
});
