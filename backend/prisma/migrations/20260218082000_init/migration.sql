/*
  Warnings:

  - You are about to drop the column `utilisateurId` on the `Centre` table. All the data in the column will be lost.
  - Added the required column `centreId` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Centre" DROP CONSTRAINT "Centre_utilisateurId_fkey";

-- AlterTable
ALTER TABLE "Centre" DROP COLUMN "utilisateurId";

-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "centreId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_centreId_fkey" FOREIGN KEY ("centreId") REFERENCES "Centre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
