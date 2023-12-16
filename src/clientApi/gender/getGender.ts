import { Gender } from "@prisma/client";
import api from "../api";

type GenderIdentifier = {
  id: number;
};

async function getGender(genderIdentifier: GenderIdentifier): Promise<Gender> {
  const { data } = await api.get("/gender/show", { data: genderIdentifier });

  return data;
}

export default getGender;
