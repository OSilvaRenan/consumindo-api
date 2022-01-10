
import React from "react";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import styles from './Autor.module.css';
import api from "../../Api";

export default function List() {
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    api.get("/autor").then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrada!";

  const autores = autor.map((autor) =>
   <table className={styles.card} key={autor.Codautor}>
      <tbody className={styles.info} >
        <tr className={styles.codigo}>{autor.Codautor}</tr>
        <tr className={styles.nome}>{autor.Nomautor}</tr>
        <tr className={styles.opcoes}>
          <td className={styles.opcao}>
            <Link to={`/autor/details/${autor.Codautor}`}>
              <button className={styles.padrao}>Detalhes</button>
            </Link>  
          </td>
          <td className={styles.opcao}>
            <Link to={`/autor/update/${autor.Codautor}`}>
              <button className={styles.padrao}>Editar</button>
            </Link> 
          </td>
          <td className={styles.opcao}>
            <Link to={`/autor/delete/${autor.Codautor}`}>
              <button className={styles.padrao}>Deletar</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table> 
);

  return (
    <Container>
      <div className={styles.menu}>
        <Link to={`/autor/create`}><button className={styles.novo}>Criar Novo</button></Link>
      </div> 
      <div className={styles.autores}>
        {autores}
      </div>     
    </Container>
  );
}