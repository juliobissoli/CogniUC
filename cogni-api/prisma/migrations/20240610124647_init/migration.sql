-- CreateTable
CREATE TABLE "uc" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL,
    "dateInit" DATETIME NOT NULL,
    "concessionaire" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "numInstallation" INTEGER NOT NULL,
    "numClient" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "unitDescription" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "isRural" BOOLEAN NOT NULL,
    "orgType" TEXT NOT NULL,
    "licenseType" TEXT NOT NULL,
    "personCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
