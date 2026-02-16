const prisma = require('../prismaClient');

exports.getAllOperation = async () => {
  return prisma.operation.findMany();
};

exports.getOperationById = async (id) => {
  return prisma.operation.findUnique({ where: { id } });
};

exports.createOperation = async ({ type, date, montant, dossierId }) => {
  return prisma.operation.create({
    data: {
      type,
      date,
      montant,
      dossierId,
    },
  });
}

exports.updateOperation = async (id, { type, date, montant, dossierId }) => {
  const updateData = {};

  if (type) updateData.type = type;
  if (date) updateData.date = date;
  if (montant) updateData.montant = montant;
  if (dossierId) updateData.dossierId = dossierId;

  return prisma.operation.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteOperation = async (id) => {
  return prisma.operation.delete({ where: { id } });
};