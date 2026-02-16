const prisma = require('../prismaClient');

exports.getAllOperateurSaisie = async () => {
  return prisma.operateurSaisie.findMany();
};

exports.getOperateurSaisieById = async (id) => {
  return prisma.operateurSaisie.findUnique({ where: { id } });
};

exports.createOperateurSaisie = async ({ nom, dossierId }) => {
  return prisma.operateurSaisie.create({
    data: {
      nom,
      dossierId,
    },
  });
}

exports.updateOperateurSaisie = async (id, { nom, dossierId }) => {
  const updateData = {};

  if (nom) updateData.nom = nom;
  if (dossierId) updateData.dossierId = dossierId;

  return prisma.operateurSaisie.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteOperateurSaisie = async (id) => {
  return prisma.operateurSaisie.delete({ where: { id } });
};  