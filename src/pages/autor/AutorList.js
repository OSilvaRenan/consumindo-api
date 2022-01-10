import api from "../../Api"; 
import React from "react";
import Container from "../../layout/Container";
import {Link} from 'react-router-dom';
import styles from './Autor.module.css';


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
  if (!autor) return "Autor não encontrado!";

  const autores = autor.map((autor) =>
   <div className={styles.card} key={autor.Codautor}>
      <ul className={styles.info}>
        <li className={styles.codigo}>{autor.Codautor}</li>
        <li className={styles.nome}>{autor.Nomautor}</li>
        <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={`/autor/details/${autor.Codautor}`}>
              <button className={styles.padrao}>Detalhes</button>
            </Link> 
          </li>
          <li className={styles.opcao}>
            <Link to={`/autor/update/${autor.Codautor}`}>
              <button className={styles.padrao}>Editar</button>
            </Link> 
          </li>
          <li className={styles.opcao}>
            <Link to={`/autor/delete/${autor.Codautor}`}>
              <button className={styles.padrao}>Deletar</button>
            </Link>
          </li>
        </ul>         
      </ul>
    </div>    
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