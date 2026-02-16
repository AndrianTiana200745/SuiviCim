/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Centres" AS ENUM ('Ambohidahy', 'Ankadimbahoaka', 'Antsirabe');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Admin', 'User');

-- CreateEnum
CREATE TYPE "Types" AS ENUM ('Immatriculation', 'Immatriculation_Mutation', 'Mutation');

-- CreateEnum
CREATE TYPE "TypeImp" AS ENUM ('Carte', 'Attestation');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'User',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Centre" (
    "id" SERIAL NOT NULL,
    "designation" "Centres" NOT NULL DEFAULT 'Ambohidahy',
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "Centre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dossier" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "datePaiement" TIMESTAMP(3) NOT NULL,
    "dateRdv" TIMESTAMP(3) NOT NULL,
    "vehiculeId" INTEGER NOT NULL,

    CONSTRAINT "Dossier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" SERIAL NOT NULL,
    "type" "Types" NOT NULL DEFAULT 'Immatriculation',
    "dossierId" INTEGER NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperateurSaisie" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "dossierId" INTEGER NOT NULL,

    CONSTRAINT "OperateurSaisie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "proprietaire" TEXT NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Impression" (
    "id" SERIAL NOT NULL,
    "type" "TypeImp" NOT NULL DEFAULT 'Attestation',
    "dossierId" INTEGER NOT NULL,

    CONSTRAINT "Impression_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protocole" (
    "id" SERIAL NOT NULL,
    "designation" TEXT NOT NULL,
    "dateArrivee" TIMESTAMP(3) NOT NULL,
    "dossierId" INTEGER NOT NULL,

    CONSTRAINT "Protocole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_nom_key" ON "Utilisateur"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Dossier_reference_key" ON "Dossier"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicule_numero_key" ON "Vehicule"("numero");

-- AddForeignKey
ALTER TABLE "Centre" ADD CONSTRAINT "Centre_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dossier" ADD CONSTRAINT "Dossier_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "Vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperateurSaisie" ADD CONSTRAINT "OperateurSaisie_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Impression" ADD CONSTRAINT "Impression_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Protocole" ADD CONSTRAINT "Protocole_dossierId_fkey" FOREIGN KEY ("dossierId") REFERENCES "Dossier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
