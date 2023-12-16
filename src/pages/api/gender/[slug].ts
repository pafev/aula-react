import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.slug === "index" && req.method === "GET") {
    try {
      const genders = await prisma.gender.findMany();
      res.status(200).json(genders);
    } catch (e) {
      res.status(500).json({ error: "erro no servidor" });
    }
  }

  if (req.query.slug === "show" && req.method === "GET") {
    try {
      const where = req.body;
      const gender = await prisma.gender.findUnique({ where });
      res.status(200).json(gender);
    } catch (e) {
      res.status(500).json({ error: "erro no servidor" });
    }
  }

  if (req.query.slug === "create" && req.method === "POST") {
    try {
      const data = req.body;
      const gender = await prisma.gender.create({ data });
      res.status(200).json(gender);
    } catch (e) {
      res.status(400).json({ error: "não foi possível criar" });
    }
  }

  if (req.query.slug === "update" && req.method === "PATCH") {
    try {
      const { id, ...genderData } = req.body;
      const gender = await prisma.gender.update({
        where: { id },
        data: genderData,
      });
      res.status(200).json(gender);
    } catch (e) {
      res.status(400).json({ error: "não foi possível atualizar" });
    }
  }

  if (req.query.slug === "delete" && req.method === "DELETE") {
    try {
      const where = req.body;
      const gender = await prisma.gender.delete({ where });
      res.status(200).json(gender);
    } catch (e) {
      res.status(400).json({ error: "não foi possível deletar" });
    }
  }

  res.status(400).json({ error: "método da API não conhecido" })
}

export default handler;
