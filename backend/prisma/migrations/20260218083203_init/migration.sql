/*
  Warnings:

  - A unique constraint covering the columns `[designation]` on the table `Centre` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `designation` on the `Centre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Centre" DROP COLUMN "designation",
ADD COLUMN     "designation" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Centres";

-- CreateIndex
CREATE UNIQUE INDEX "Centre_designation_key" ON "Centre"("designation");
