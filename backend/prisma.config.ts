import 'dotenv/config';
import { defineConfig } from '@prisma/config';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set. Add a .env file in the backend folder or set the environment variable before running Prisma.');
}

export default defineConfig({
    datasource: {
        url: databaseUrl,
    },
    migrations: {
        seed: 'node src/prisma/seed.js',
    }
});