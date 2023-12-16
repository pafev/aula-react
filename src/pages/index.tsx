import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getGenders from "@/clientApi/gender/getGenders";
import createGender from "@/clientApi/gender/createGender";
import deleteGender from "@/clientApi/gender/deleteGender";
import getGender from "@/clientApi/gender/getGender";
import updateGender from "@/clientApi/gender/updateGender";


export const getServerSideProps = (async () => {
  const gender = await getGender({id: 1})
  const genders = await getGenders()

  return { props: { gender, genders } };
}) satisfies GetServerSideProps;


export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {

  function handleCreate() {
    createGender({name: "shoujo"}).catch(e => alert(e.response.data.error))
  }

  function handleDelete() {
    deleteGender({id: 2}).catch(e => alert(e.response.data.error))
  }

  function handleUpdate() {
    updateGender({id: 1, name: "seinen"}).catch(e => alert(e.response.data.error))
  }


  return (
    <>
      <h1>Homepage da aula de React</h1>
      <p>{props.gender.name}</p>
      <div>{props.genders.map((item) => <p key={item.id}>{item.name}</p>)}</div>
      <button onClick={handleCreate}>Criar gênero</button>
      <button onClick={handleDelete}>Deletar gênero</button>
      <button onClick={handleUpdate}>Atualizar gênero</button>
    </>
  );
}
