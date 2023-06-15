import xlsx from 'npm:node-xlsx@0.22.0';
import { z } from 'npm:zod';
import { headerSchema } from './schema/header.ts';
import { rawUsersSchema, usersSchema } from './schema/users.ts';

export const getUsers = () => {
    const worksheets = xlsx.parse(`./data/users.xlsx`);

    const [rawHeader, ...data] = rawUsersSchema.parse(worksheets[0].data);

    // If header parse fails change order of destructuring LOC 17
    headerSchema.parse(rawHeader);

    const users = [];

    for (const row of data) {
        const [name, fullName, email, phone, pmFullName, pmEmail] = row;

        try {
            z.string().parse(name);

            users.push({
                name,
                fullName,
                email: email?.trim(),
                phone,
                pm: {
                    fullName: pmFullName,
                    email: pmEmail,
                },
            });
        } catch (error) {
            continue;
        }
    }

    return usersSchema.parse(users);
};
