import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.company.create({
    data: {
      name: "Company AB",
      card: {
        create: {
          id: 1,
          creditLimit: 10000.0,
          balance: 5500.0,
          status: "ACTIVE",
          cardUrl: "https://exampleurl.com",
        },
      },
    },
  });

  await prisma.transaction.createMany({
    data: [
      {description: "Purchase on amazon", amount: 35.80, cardId: 1, transactionDate: "2023-02-20T09:12:28Z"},
      {description: "Purchase on h&m", amount: 400.99, cardId: 1, transactionDate: "2023-03-18T09:12:28Z"},
      {description: "Purchase on amazon", amount: 535.00, cardId: 1, transactionDate: "2023-02-18T09:12:28Z"},
      {description: "Purchase on amazon", amount: 50.23, cardId: 1, transactionDate: "2023-02-18T09:12:28Z"}
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });