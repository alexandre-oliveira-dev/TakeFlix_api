-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "subscriber" BOOLEAN NOT NULL DEFAULT false,
    "favoritesId" TEXT
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "avaliation" TEXT NOT NULL,
    "imdid" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "favorites_id_key" ON "favorites"("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_favoritesId_fkey" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE SET NULL ON UPDATE CASCADE;
