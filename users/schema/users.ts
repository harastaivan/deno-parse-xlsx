import { z } from 'npm:zod';

const rowCount = 22;

export const rawUsersSchema = z.array(
    z.array(
        z.string().optional(),
    ),
).min(rowCount);

export const usersSchema = z.array(z.object({
    name: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    pm: z.object({
        fullName: z.string(),
        email: z.string().email(),
    }),
}));
