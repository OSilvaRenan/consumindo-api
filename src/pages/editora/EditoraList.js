
import React from "react";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import styles from './Editora.module.css';
import api from "../../Api";

export default function List() {
  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    api.get("/editora").then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrada!";

  const editoras = editora.map((editora) =>
   <div className={styles.card} key={editora.Codeditora}>
      <ul className={styles.info} >
        <li className={styles.codigo}>{editora.Codeditora}</li>
        <li className={styles.nome}>{editora.Nomeditora}</li>
        <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={`/editora/details/${editora.Codeditora}`}>
              <button className={styles.padrao}>Detalhes</button>
            </Link>  
          </li>
          <li className={styles.opcao}>
            <Link to={`/editora/update/${editora.Codeditora}`}>
              <button className={styles.padrao}>Editar</button>
            </Link> 
          </li>
          <li className={styles.opcao}>
            <Link to={`/editora/delete/${editora.Codeditora}`}>
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
        <Link to={`/editora/create`}><button className={styles.novo}>Criar Novo</button></Link>
      </div> 
      <div className={styles.editoras}>
        {editoras}
      </div>     
    </Container>
  );
}