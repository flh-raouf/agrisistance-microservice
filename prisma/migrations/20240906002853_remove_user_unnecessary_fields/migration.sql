/*
  Warnings:

  - You are about to drop the column `country` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deletion_requested_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_2fa_enabled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isverified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_login` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phonenumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profile_picture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_user_id_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "country",
DROP COLUMN "deletion_requested_at",
DROP COLUMN "email",
DROP COLUMN "firstname",
DROP COLUMN "is_2fa_enabled",
DROP COLUMN "isverified",
DROP COLUMN "last_login",
DROP COLUMN "lastname",
DROP COLUMN "password",
DROP COLUMN "phonenumber",
DROP COLUMN "profile_picture",
DROP COLUMN "subscription_type";

-- DropTable
DROP TABLE "History";
