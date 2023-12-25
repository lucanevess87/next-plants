const { sql } = require('@vercel/postgres');
const { plants } = require('../src/lib/data.js');


async function seedPlants() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS plants (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        family VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        light VARCHAR(255) NOT NULL,
        temperature VARCHAR(255) NOT NULL,
        water VARCHAR(255) NOT NULL,
        about VARCHAR(255) NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "plants" table`);

    const insertedPlants = await Promise.all(
      plants.map(
        (plant) => sql`
        INSERT INTO plants (id, name, family, price, light, temperature, water, about, image_url)
        VALUES (${plant.id}, ${plant.name}, ${plant.family}, ${plant.price}, ${plant.light}, ${plant.temperature}, ${plant.water}, ${plant.about}, ${plant.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPlants.length} plants`);

    return {
      createTable,
      customers: insertedPlants,
    };
  } catch (error) {
    console.error('Error seeding plants:', error);
    throw error;
  }
}



(async () => {
  await seedPlants();
})();
