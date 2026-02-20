const prisma = require('../prisma/client');

exports.getAllProtocole = async () => {
  return prisma.protocole.findMany();
};

exports.getProtocoleById = async (id) => {
  return prisma.protocole.findUnique({ where: { id } });
};

exports.createProtocole = async ({ designation, dateArrivee, dossierId }) => {
  return prisma.protocole.create({
    data: {
      designation,
      dateArrivee,
      dossierId,
    },
  });
}

exports.updateProtocole = async (id, { designation, dateArrivee, dossierId }) => {
  const updateData = {};

  if (designation) updateData.designation = designation;
  if (dateArrivee) updateData.dateArrivee = dateArrivee;
  if (dossierId) updateData.dossierId = dossierId;

  return prisma.protocole.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteProtocole = async (id) => {
  return prisma.protocole.delete({ where: { id } });
};  