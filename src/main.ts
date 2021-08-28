// playlist/src/main.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... your Prisma Client queries will go here


main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())


  const newSchool = await prisma.school.create({
    data: {
      name: 'Maduka University',
      email: 'maduka@madukauni.com',
     teacher: {
        create: {
          title: 'MAT111',
        },
      },
    },
  })
  console.log('Created new school: ', newSchool)

  const allSchools = await prisma.school.findMany({
    include: { teacher: true },
  })
  console.log('All schools: ')
  console.dir(allSchools, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

