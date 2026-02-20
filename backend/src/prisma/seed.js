const { PrismaClient } = require('@prisma/client');

const { PrismaPg } = require('@prisma/adapter-pg');

const bcrypt = require('bcryptjs');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});


const prisma = new PrismaClient({
  adapter,
}); // <-- PAS d'options ici

async function main() {
  // Créer les centres
  await prisma.centre.createMany({
    data: [
      { designation: "Ambohidahy" },
      { designation: "Ankadimbahoaka" },
      { designation: "Antsirabe" },
    ],
  });

  console.log("Centres created");

  // Créer un utilisateur admin

  await prisma.utilisateur.create({
    data: {
      nom: "admin",
      motDePasse: await bcrypt.hash("admin123", 10),
      role: "Admin",
      centreId: 1, // correspond au premier centre
    },
  });

  console.log("Admin user created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });