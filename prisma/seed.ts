import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {

 const user = await prisma.user.create({
    data: {
      id: "1",
      firstName: "Jean-Marc",
      lastName: "Janco",
    },
  });
  return user
}

main().then(console.log).catch(console.error);

export { main }