import { Gender } from "@prisma/client"
import api from "../api"

type GenderIdentifier = {id: number}
type GenderNewData = {name?: string, description?: string}

async function updateGender(genderData: GenderIdentifier & GenderNewData): Promise<Gender> {
    const {data} = await api.patch("/gender/update", genderData)

    return data
}

export default updateGender