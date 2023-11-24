import { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/Form.module.css";

function Form() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [submitInfo, setSubmitInfo] = useState({
    isSubmitted: false,
    message: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userFormData.name && userFormData.email && userFormData.password) {
      setSubmitInfo({
        isSubmitted: true,
        message: "Boa! O formulário foi submetido",
      });
    } else {
      setSubmitInfo({
        isSubmitted: false,
        message: "Faltou preencher campo :( verifique nome, email ou senha",
      });
    }
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            onChange={handleChange}
            type="text"
            placeholder="Digite seu nome"
            name="name"
          />
          <input
            className={styles.input}
            onChange={handleChange}
            type="email"
            placeholder="Digite seu email"
            name="email"
          />
          <input
            className={styles.input}
            onChange={handleChange}
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
          <input
            className={styles.input}
            onChange={handleChange}
            type="text"
            placeholder="Digite seu endereço"
            name="address"
          />
          <button className={styles.button} type="submit">
            Submeter
          </button>
        </form>
        <div className={styles.divSubmitMessage}>
          <p
            className={
              submitInfo.isSubmitted
                ? styles.submitSuccessMessage
                : styles.submitErrorMessage
            }
          >
            {submitInfo.message}
          </p>
        </div>
      </section>
      <section>
        <h1 className={styles.h1}>Codigo</h1>
        <pre className={styles.pre}>
          {[
            "const [userFormData, setUserFormData] = useState({",
            '    name: "",',
            '    email: "",',
            '    password: "",',
            '    address: ""',
            "})",
            "",
            "function handleChange(e: ChangeEvent<HTMLInputElement>) {",
            "    setUserFormData({",
            "        ...userFormData,",
            "        [e.target.name]: e.target.value // pegamos o name do input e utilizamos como chave de userFormData",
            "    })",
            "}",
            "",
            "function handleSubmit(e: FormEvent<HTMLFormElement>) {",
            "    e.preventDefault()",
            "    // codigo da submissao do seu formulário",
            "}",
            "",
            "return (",
            "    <form onSubmit={handleSubmit}>",
            '        <input onChange={handleChange} type="text" placeholder="Digite seu nome" name="name"/>',
            '        <input onChange={handleChange} type="email" placeholder="Digite seu email" name="email"/>',
            '        <input onChange={handleChange} type="password" placeholder="Digite sua senha" name="password"/>',
            '        <input onChange={handleChange} type="text" placeholder="Digite seu endereço" name="address"/>',
            '        <button className={styles.button} type="submit">Submeter</button>',
            "    </form>",
            ")",
          ].join("\n")}
        </pre>
      </section>
    </>
  );
}

export default Form;
