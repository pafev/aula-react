import { useState } from "react";
import styles from "@/styles/useState.module.css";

function UseStatePage() {
  const [count1by1, setCount1by1] = useState(0);
  const [count3by3, setCount3by3] = useState(0);

  function handleChangeCount1by1() {
    setCount1by1(count1by1 + 1);
  }

  function handleChangeCount3by3() {
    setCount3by3((prev) => prev + 1);
    setCount3by3((prev) => prev + 1);
    setCount3by3((prev) => prev + 1);
  }

  return (
    <>
      <section>
        <h1>Contador utilizando 1 setState</h1>
        <div>
          <span>{count1by1}</span>
          <button className={styles.button} onClick={handleChangeCount1by1}>
            Contar
          </button>
        </div>
      </section>
      <section>
        <h1>Contador utilizando 3 setState's</h1>
        <div>
          <span>{count3by3}</span>
          <button className={styles.button} onClick={handleChangeCount3by3}>
            Contar
          </button>
        </div>
      </section>
      <section className={styles.sectionCode}>
        <h1>Codigo</h1>
        <pre className={styles.pre}>
          {[
            'const [count1by1, setCount1by1] = useState(0);',
            'const [count3by3, setCount3by3] = useState(0);',
            '',
            'function handleChangeCount1by1() {',
            '    setCount1by1(count1by1 + 1);',
            '}',
            '',
            'function handleChangeCount3by3() {',
            '    setCount3by3((prev) => prev + 1);',
            '    setCount3by3((prev) => prev + 1);',
            '    setCount3by3((prev) => prev + 1);',
            '}',
            '',
            'return (',
            '    <>',
            '      <div>',
            '        <span>{count1by1}</span>',
            '        <button onClick={handleChangeCount1by1}>',
            '          Contar',
            '        </button>',
            '      </div>',
            '',
            '      <div>',
            '        <span>{count3by3}</span>',
            '        <button onClick={handleChangeCount3by3}>',
            '          Contar',
            '        </button>',
            '      </div>',           
            '    </>',
            ');'
          ].join("\n")}
        </pre>
      </section>
    </>
  );
}

export default UseStatePage;
