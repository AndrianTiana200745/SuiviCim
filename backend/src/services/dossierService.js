const prisma = require('../prismaClient');

exports.getAllDossier = async () => {
  return prisma.dossier.findMany();
};

exports.getDossierById = async (id) => {
  return prisma.dossier.findUnique({ where: { id } });
};

exports.createDossier = async ({ reference, datePaiement, dateRdv, voitureId }) => {
  return prisma.dossier.create({
    data: {
      reference,
      datePaiement,
      dateRdv,
      voitureId,
    },
  });
}

exports.updateDossier = async (id, { reference, datePaiement, dateRdv, voitureId }) => {
  const updateData = {};

  if (reference) updateData.reference = reference;
  if (datePaiement) updateData.datePaiement = datePaiement;
  if (dateRdv) updateData.dateRdv = dateRdv;
  if (voitureId) updateData.voitureId = voitureId;

  return prisma.dossier.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteDossier = async (id) => {
  return prisma.dossier.delete({ where: { id } });
};