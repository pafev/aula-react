import { Gender } from "@prisma/client";
import api from "../api";

type GenderIdentifier = {
  id: number;
};

async function deleteGender(genderIdentifier: GenderIdentifier): Promise<Gender> {
  const { data } = await api.delete("/gender/delete", { data: genderIdentifier });

  return data;
}

export default deleteGender;
