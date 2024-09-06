-- CreateTable
CREATE TABLE "User" (
    "user_id" VARCHAR(100) NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "country" VARCHAR(50),
    "phonenumber" VARCHAR(15),
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255),
    "profile_picture" VARCHAR(255),
    "subscription_type" VARCHAR(255) NOT NULL DEFAULT 'Basic',
    "isverified" BOOLEAN NOT NULL DEFAULT false,
    "is_2fa_enabled" BOOLEAN NOT NULL DEFAULT false,
    "last_login" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletion_requested_at" TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Land" (
    "land_id" VARCHAR(100) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "land_size" DOUBLE PRECISION NOT NULL,
    "land_name" VARCHAR(100),
    "land_image" VARCHAR(200),
    "ph_level" DOUBLE PRECISION NOT NULL,
    "phosphorus" DOUBLE PRECISION NOT NULL,
    "potassium" DOUBLE PRECISION NOT NULL,
    "oxygen_level" DOUBLE PRECISION NOT NULL,
    "nitrogen" DOUBLE PRECISION NOT NULL,
    "user_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "Land_pkey" PRIMARY KEY ("land_id")
);

-- CreateTable
CREATE TABLE "LandStatistic" (
    "land_stat_id" VARCHAR(100) NOT NULL,
    "land_use" DOUBLE PRECISION NOT NULL,
    "human_coverage" DOUBLE PRECISION NOT NULL,
    "water_availability" DOUBLE PRECISION NOT NULL,
    "distribution_optimality" DOUBLE PRECISION NOT NULL,
    "total_profit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "land_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "LandStatistic_pkey" PRIMARY KEY ("land_stat_id")
);

-- CreateTable
CREATE TABLE "Crop" (
    "crop_id" VARCHAR(100) NOT NULL,
    "crop_name" VARCHAR(30) NOT NULL,
    "crop_area" DOUBLE PRECISION NOT NULL,
    "crop_investment" DOUBLE PRECISION NOT NULL,
    "expected_money_return" DOUBLE PRECISION NOT NULL,
    "expected_weight_return" DOUBLE PRECISION NOT NULL,
    "land_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("crop_id")
);

-- CreateTable
CREATE TABLE "CropMaintenance" (
    "maintenance_id" VARCHAR(100) NOT NULL,
    "pesticide_level" DOUBLE PRECISION NOT NULL,
    "water_sufficienty" DOUBLE PRECISION NOT NULL,
    "land_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "CropMaintenance_pkey" PRIMARY KEY ("maintenance_id")
);

-- CreateTable
CREATE TABLE "Finance" (
    "financial_id" VARCHAR(100) NOT NULL,
    "investment_amount" DOUBLE PRECISION,
    "expected_revenue" DOUBLE PRECISION,
    "land_id" VARCHAR(100),

    CONSTRAINT "Finance_pkey" PRIMARY KEY ("financial_id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "weather_id" VARCHAR(100) NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "rainfall" DOUBLE PRECISION NOT NULL,
    "sunlight" DOUBLE PRECISION NOT NULL,
    "land_id" VARCHAR(100),

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("weather_id")
);

-- CreateTable
CREATE TABLE "BusinessPlan" (
    "business_plan_id" VARCHAR(100) NOT NULL,
    "executive_summary" TEXT NOT NULL,
    "resources" TEXT NOT NULL,
    "crops" TEXT NOT NULL,
    "weather_considerations" TEXT NOT NULL,
    "soil_maintenance" TEXT NOT NULL,
    "profit_estimations" TEXT NOT NULL,
    "other_recommendations" TEXT NOT NULL,
    "land_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "BusinessPlan_pkey" PRIMARY KEY ("business_plan_id")
);

-- CreateTable
CREATE TABLE "History" (
    "action_id" VARCHAR(100) NOT NULL,
    "action_details" VARCHAR(255),
    "date_time" TIMESTAMP NOT NULL,
    "user_id" VARCHAR(100),

    CONSTRAINT "History_pkey" PRIMARY KEY ("action_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Land" ADD CONSTRAINT "Land_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandStatistic" ADD CONSTRAINT "LandStatistic_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CropMaintenance" ADD CONSTRAINT "CropMaintenance_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Finance" ADD CONSTRAINT "Finance_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessPlan" ADD CONSTRAINT "BusinessPlan_land_id_fkey" FOREIGN KEY ("land_id") REFERENCES "Land"("land_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
