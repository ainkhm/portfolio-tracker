-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "amountInvested" DOUBLE PRECISION NOT NULL,
    "valuation" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "roundType" TEXT NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
