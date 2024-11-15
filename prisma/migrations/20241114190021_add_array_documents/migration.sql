/*
  Warnings:

  - You are about to drop the column `infographic` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "infographic";

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostDocument" (
    "postId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "PostDocument_pkey" PRIMARY KEY ("postId","documentId")
);

-- AddForeignKey
ALTER TABLE "PostDocument" ADD CONSTRAINT "PostDocument_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostDocument" ADD CONSTRAINT "PostDocument_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
