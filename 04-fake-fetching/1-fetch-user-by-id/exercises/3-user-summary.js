import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* User Summary */

// --- declare some callbacks ---

const createSummary = (user) => {
    return {
        name: user.name,
        city: user.address.city,
        companyName: user.company.name
    };
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 5');
fetchUserById(5)
    .then((user) => createSummary(user))
    .then((summary) => log(summary))
    .catch(handleError);

log('fetching and processing user 1');
fetchUserById(1)
    .then(createSummary)
    .then((summary) => log(summary))
    .catch(handleError);

log('fetching and processing user 10');
fetchUserById(10)
    .then(createSummary)
    .then((summary) => log(summary))
    .catch(handleError);

log('fetching and processing user -1');
fetchUserById(-1)
    .then((user) => createSummary(user))
    .then((summary) => log(summary))
    .catch((err) => {
        if (err === 404) {
            log('404: User not found');
        } else {
            error(err);
        }
    });

log('= = = =  the call stack is empty  = = = =');
