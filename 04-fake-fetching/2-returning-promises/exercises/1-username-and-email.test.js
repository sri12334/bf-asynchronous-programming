import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

// --- declare function ---

/**
 * Returns a promise that resolves to a user's username and email.
 * @param {number} id - The ID of the user to fetch.
 * @returns {Promise<string>} A promise that resolves to the user's username and email.
 */
const usernameAndEmail = (id) => {
    return fetchUserById(id)
    .then((user) => `${user.id}. ${user.name}, ${user.email}`)
    .catch((err) => {
        throw new Error(err);
    });
};

// --- test function ---

describe("usernameAndEmail: returns a user's name", () => {
    it("gets user 2's name", () => {
        return usernameAndEmail(2).then((actual) => {
            expect(actual).toEqual('2. Antonette, Shanna@melissa.tv'); // email has been corrected
        });
    });
    it("gets user 3's name", () => {
        return usernameAndEmail(4).then((actual) => {
            expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org'); // email has been corrected
        });
    });
    it("gets user 4's name", () => {
        return usernameAndEmail(7).then((actual) => {
            expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
        });
    });
    it("gets user 8's name", () => {
        return usernameAndEmail(10).then((actual) => {
            expect(actual).toEqual(
                '10. Moriah.Stanton, Rey.Padberg@karina.biz',
            ); // email has been corrected
        });
    });
});

log('= = = =  the call stack is empty  = = = =');
