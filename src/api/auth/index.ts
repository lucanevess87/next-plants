import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import uuid4 from 'uuid4';

import { User } from './types';

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export type CreateUser = {
  email: string;
  password: string;
  name: string;
};

export async function createUser({ name, email, password }: CreateUser): Promise<void> {
  try {
    const id = uuid4();
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql<User>`
    INSERT INTO users (id, name, email, password)
    VALUES (${id}, ${name}, ${email}, ${hashedPassword})
    ON CONFLICT (id) DO NOTHING;
  `;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}
