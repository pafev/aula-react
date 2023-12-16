import { Gender } from "@prisma/client";
import api from "../api";

type NewGender = {
  name: string;
  description?: string;
};

async function createGender(newGender: NewGender): Promise<Gender> {
  const { data } = await api.post("/gender/create", newGender);

  return data;
}

export default createGender;
