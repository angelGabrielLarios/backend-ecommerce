import { randomBytes } from 'crypto';

export function generateUniqueId() {
    const id = randomBytes(16).toString('hex');
    return id;
}


