-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "released" BOOLEAN NOT NULL DEFAULT false,
    "courseId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School.email_unique" ON "School"("email");

-- AddForeignKey
ALTER TABLE "Teacher" ADD FOREIGN KEY ("courseId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;
