// The root provides a resolver function for each API endpoint
/* const root = {
    createUser: ({ user }) => `Hello ${user}`,
};

export default root; */

import * as authHandlers from './auth';

export default { ...authHandlers };
