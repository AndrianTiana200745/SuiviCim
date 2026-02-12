const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    adapter: process.env.DATABASE_URL,
    log: ['query', 'info', 'warn', 'error'],
});

module.exports = prisma;
