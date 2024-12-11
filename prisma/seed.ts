import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'bson';



const prisma = new PrismaClient();

async function main() {

  const userId = new ObjectId().toHexString();

 const user = await prisma.user.create({

  
    data: {
      id: "63a9f0ea7b7a4a0fdb917a34",
      firstName: "Jean-Marc",
      lastName: "Janco",
    },
  });
  return user
}

main().then(console.log).catch(console.error);

export { main }