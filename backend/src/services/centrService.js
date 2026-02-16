const { utilisateur } = require('../prisma/client');
const prisma = require('../prismaClient');

exports.getAllCentre = async () => {
  return prisma.centre.findMany();
};

exports.getCentreById = async (id) => {
  return prisma.centre.findUnique({ where: { id } });
};

exports.createCentre = async ({ designation, utilisateurId }) => {
  return prisma.centre.create({
    data: {
      designation,
      utilisateurId,
    },
  });
}

exports.updateCentre = async (id, { designation, utilisateurId }) => {
  const updateData = {};

  if (designation) updateData.designation = designation;
  if (utilisateurId) updateData.utilisateurId = utilisateurId;

  return prisma.centre.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteCentre = async (id) => {
  return prisma.centre.delete({ where: { id } });
};