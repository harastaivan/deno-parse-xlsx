import { getUsers } from './users/getUsers.ts';

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
    getUsers();
}
