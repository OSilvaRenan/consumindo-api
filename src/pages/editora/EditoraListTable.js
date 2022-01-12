
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
   <table className={styles.card} key={editora.Codeditora}>
      <tbody className={styles.info} >
        <tr className={styles.codigo}>{editora.Codeditora}</tr>
        <tr className={styles.nome}>{editora.Nomeditora}</tr>
        <tr className={styles.opcoes}>
          <td className={styles.opcao}>
            <Link to={`/editora/details/${editora.Codeditora}`}>
              <button className={styles.padrao}>Detalhes</button>
            </Link>  
          </td>
          <td className={styles.opcao}>
            <Link to={`/editora/update/${editora.Codeditora}`}>
              <button className={styles.padrao}>Editar</button>
            </Link> 
          </td>
          <td className={styles.opcao}>
            <Link to={`/editora/delete/${editora.Codeditora}`}>
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
        <Link to={`/editora/create`}><button className={styles.novo}>Criar Nova</button></Link>
      </div> 
      <div className={styles.editoras}>
        {editoras}
      </div>     
    </Container>
  );
}