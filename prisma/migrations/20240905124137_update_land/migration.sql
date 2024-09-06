/*
  Warnings:

  - A unique constraint covering the columns `[latitude,longitude]` on the table `Land` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Land_latitude_longitude_key" ON "Land"("latitude", "longitude");
