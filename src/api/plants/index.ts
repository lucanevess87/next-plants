import { sql } from '@vercel/postgres';

import { Plant } from './types';

export async function fetchPlants() {
  try {
    return await sql<Plant>`SELECT * FROM plants`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch plants.');
  }
}

export async function fetchPlantsById(id: string) {
  try {
    const plants = await sql<Plant>`SELECT * FROM plants WHERE plants.id = ${id}`;
    return plants.rows?.[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch plant.');
  }
}
