// playlist/src/index.ts

// #1
import { PrismaClient } from '@prisma/client'
import express from 'express'

// #2
const prisma = new PrismaClient()

// #3
const app = express()

// #4
app.use(express.json())

// #5
app.get('/school', async (req, res) => {
  const school = await prisma.school.findMany()
  res.json({
    success: true,
    payload: school,
    message: "Operation Successful",
  })
})

app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
  });

// #6
app.listen(3000, () =>
console.log('REST API server ready at: http://localhost:3000'),
) 
