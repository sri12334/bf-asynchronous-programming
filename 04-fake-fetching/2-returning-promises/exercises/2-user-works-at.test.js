import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/**
 * Checks if a user works at a specific company.
 * @param {number} userId - The ID of the user to check.
 * @param {string} companyName - The name of the company to check.
 * @returns {Promise<boolean>} A promise that resolves to true if the user works at the specified company, otherwise false.
 */
const userWorksAt = (userId, companyName) => {
    return fetchUserById(userId)
    .then((user) => {
        return user.company.name === companyName;
    })
    .catch((err) => {
        throw new Error(err);
    });
};

// --- test function ---

describe('userWorksAt checks if a user works at a specific company', () => {
    it('user 4 does work at Robel-Corkery', () => {
        return userWorksAt(4, 'Robel-Corkery').then((actual) => {
            expect(actual).toEqual(true);
        });
    });
    it('user 4 does not work at Romaguera-Jacobson', () => {
        return userWorksAt(4, 'Romaguera-Jacobson').then((actual) => {
            expect(actual).toEqual(false);
        });
    });
    it('user 6 does work at Considine-Lockman', () => {
        return userWorksAt(6, 'Considine-Lockman').then((actual) => {
            expect(actual).toEqual(true); // Correct value is true not false
        });
    });
    it('user 7 does not work at John Groups', () => {
        return userWorksAt(7, 'John Groups').then((actual) => {
            expect(actual).toEqual(false);
        });
    });
});

log('= = = =  the call stack is empty  = = = =');
