-- CreateEnum
CREATE TYPE "Itteration" AS ENUM ('MONTHLY', 'QUARTERLY', 'SEMESTERLY', 'ANNUALY', 'PERPETUALLY');

-- CreateTable
CREATE TABLE "Certifications" (
    "id" SERIAL NOT NULL,
    "certName" TEXT NOT NULL,
    "certDescription" TEXT NOT NULL,
    "certCircle" "Itteration" NOT NULL,
    "memberId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "Certifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Certifications" ADD CONSTRAINT "Certifications_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certifications" ADD CONSTRAINT "Certifications_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
