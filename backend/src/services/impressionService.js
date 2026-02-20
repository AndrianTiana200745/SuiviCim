const prisma = require('../prisma/client');

exports.getAllImpression = async () => {
  return prisma.impression.findMany();
};

exports.getImpressionById = async (id) => {
  return prisma.impression.findUnique({ where: { id } });
};

exports.createImpression = async ({ types, dateImpression, dossierId }) => {
  return prisma.impression.create({
    data: {
      types,
      dateImpression,
      dossierId,
    },
  });
}

exports.updateImpression = async (id, { types, dateImpression, dossierId }) => {
  const updateData = {};

  if (types) updateData.types = types;
  if (dateImpression) updateData.dateImpression = dateImpression;
  if (dossierId) updateData.dossierId = dossierId;

  return prisma.impression.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteImpression = async (id) => {
  return prisma.impression.delete({ where: { id } });
};  