const prisma = require('../prismaClient');

exports.getAllVoiture = async () => {
  return prisma.voiture.findMany();
};

exports.getVoitureById = async (id) => {
  return prisma.voiture.findUnique({ where: { id } });
};

exports.createVoiture = async ({ numero, proprietaire }) => {
  return prisma.voiture.create({
    data: {
      numero,
      proprietaire,
    },
  });
}

exports.updateVoiture = async (id, { numero, proprietaire }) => {
  const updateData = {};

  if (numero) updateData.numero = numero;
  if (proprietaire) updateData.proprietaire = proprietaire;

  return prisma.voiture.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteVoiture = async (id) => {
  return prisma.voiture.delete({ where: { id } });
};  