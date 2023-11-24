import { useEffect, useState } from "react";
import styles from "@/styles/useEffect.module.css";

function UseEffectPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [makeRequest, setMakeRequest] = useState(false);

  function handleClick() {
    setMakeRequest(!makeRequest);
  }

  useEffect(() => {
    setImageUrl("");
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data[0].url);
      });
  }, [makeRequest]);

  return (
    <>
      <section className={styles.section}>
        {imageUrl.length > 0 ? (
          <img className={styles.img} src={imageUrl} alt="imagem de gatinho" />
        ) : (
          <span>Carregando...</span>
        )}
        <button className={styles.button} onClick={handleClick}>Fazer nova requisição</button>
      </section>
      <section>
        <h1 className={styles.h1}>Codigo</h1>
        <pre className={styles.pre}>
          {[
            'const [imageUrl, setImageUrl] = useState("");',
            '',
            'function handleClick() {',
            '    setMakeRequest(!makeRequest);',
            '}',
            '',
            'useEffect(() => {',
            '    fetch("https://api.thecatapi.com/v1/images/search")',
            '      .then((response) => response.json())',
            '      .then((data) => {',
            '          setImageUrl(data[0].url);',
            '      });',
            '}, [makeRequest]);',
            '',
            'return (',
            '    <>',
            '        <img src={imageUrl} alt="imagem de gatinho" />',
            '        <button onClick={handleClick}>Fazer nova requisição</button>',
            '    </>',
            ');',
          ].join("\n")}
        </pre>
      </section>
    </>
  );
}

export default UseEffectPage;
