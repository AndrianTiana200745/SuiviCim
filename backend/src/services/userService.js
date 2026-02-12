const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async ({ email, password }) => {
  const hash = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, password: hash }
  });
};

exports.loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Utilisateur non trouvé');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Mot de passe incorrect');

  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.getUsers = () => prisma.user.findMany();
