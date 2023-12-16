import { Gender } from "@prisma/client";
import api from "../api";

async function getGenders(): Promise<Gender[]> {
    const {data}  = await api.get("/gender/index")

    return data
}

export default getGenders;
