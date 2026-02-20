const prisma = require('../prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async ({ nom, motDePasse, role, centreId }) => {
  const hashedPassword = await bcrypt.hash(motDePasse, 10);

  return prisma.utilisateur.create({
    data: {
      nom,
      motDePasse: hashedPassword,
      role,
      centreId,
    },
  });
};

exports.authenticateUser = async ({ nom, motDePasse }) => {
  const user = await prisma.utilisateur.findUnique({ where: { nom } });

  if (!user) {
    throw new Error('Utilisateur non trouvé');
  }

  const isPasswordValid = await bcrypt.compare(motDePasse, user.motDePasse);

  if (!isPasswordValid) {
    throw new Error('Mot de passe incorrect');
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token, user };
};

exports.getUserById = async (id) => {
  return prisma.utilisateur.findUnique({ where: { id } });
};

exports.getAllUsers = async () => {
  return prisma.utilisateur.findMany();
};

exports.updateUser = async (id, { nom, motDePasse, role, centreId }) => {
  const updateData = {};

  if (nom) updateData.nom = nom;
  if (motDePasse) updateData.motDePasse = await bcrypt.hash(motDePasse, 10);
  if (role) updateData.role = role;
  if (centreId) updateData.centreId = centreId;

  return prisma.utilisateur.update({
    where: { id },
    data: updateData,
  });
};

exports.deleteUser = async (id) => {
  return prisma.utilisateur.delete({ where: { id } });
};