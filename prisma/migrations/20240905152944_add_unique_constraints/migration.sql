/*
  Warnings:

  - A unique constraint covering the columns `[land_id]` on the table `BusinessPlan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[land_id]` on the table `Crop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[land_id]` on the table `CropMaintenance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[land_id]` on the table `Finance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[land_id]` on the table `LandStatistic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[land_id]` on the table `Weather` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BusinessPlan_land_id_key" ON "BusinessPlan"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "Crop_land_id_key" ON "Crop"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "CropMaintenance_land_id_key" ON "CropMaintenance"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "Finance_land_id_key" ON "Finance"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "LandStatistic_land_id_key" ON "LandStatistic"("land_id");

-- CreateIndex
CREATE UNIQUE INDEX "Weather_land_id_key" ON "Weather"("land_id");
