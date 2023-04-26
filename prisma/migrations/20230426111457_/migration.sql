/*
  Warnings:

  - You are about to drop the column `favoritesId` on the `users` table. All the data in the column will be lost.
  - Added the required column `usersId` to the `favorites` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_favoritesId_fkey";

-- AlterTable
ALTER TABLE "favorites" ADD COLUMN     "usersId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "favoritesId";

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
