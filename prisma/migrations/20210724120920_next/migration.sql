/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `postcode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - Added the required column `details` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enquiry` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "postcode",
DROP COLUMN "state",
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "enquiry" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
