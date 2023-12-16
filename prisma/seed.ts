import prisma from ".";

async function seed() {
  await prisma.gender.create({
    data: {
      name: "shounen",
      description: "lutinha animada e clichês",
      animes: {
        create: [
          { name: "jujutsu" },
          { name: "one piece" },
          { name: "naruto" },
        ],
      },
    },
  });
}

seed()
  .then(async () => {
    console.log("seed rodando")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
    process.exit(1);
  });
