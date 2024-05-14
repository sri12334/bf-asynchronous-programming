import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const getAddress = (user) => {
    return `${user.id}: ${user.address.city}, ${user.address.street} ${user.address.zipcode}`;
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
fetchUserById(9)
    .then((user) => getAddress(user))
    .then((address) => log(address))
    .catch(handleError);

log('fetching and processing user 8');
fetchUserById(8)
    .then(getAddress)
    .then((address) => log(address))
    .catch(handleError);

log('fetching and processing user 2');
fetchUserById(2)
    .then(getAddress)
    .then((address) => log(address))
    .catch(handleError);

log('fetching and processing user 0');
fetchUserById(0)
    .then((user) => getAddress(user))
    .then((address) => log(address))
    .catch((err) => {
        if (err === 404) {
            log('404: User not found');
        } else {
            error(err);
        }
    });

log('= = = =  the call stack is empty  = = = =');

