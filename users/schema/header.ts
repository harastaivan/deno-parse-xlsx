import { z } from 'npm:zod';

enum Header {
    NAME = 'Zákazník',
    FULL_NAME = 'Osoba',
    EMAIL = 'Email',
    PHONE = 'Telefonní číslo',
    PM_FULL_NAME = 'PM',
    PM_EMAIL = 'PM email',
}

export const headerSchema = z.tuple([
    z.literal(Header.NAME),
    z.literal(Header.FULL_NAME),
    z.literal(Header.EMAIL),
    z.literal(Header.PHONE),
    z.literal(Header.PM_FULL_NAME),
    z.literal(Header.PM_EMAIL),
]);
