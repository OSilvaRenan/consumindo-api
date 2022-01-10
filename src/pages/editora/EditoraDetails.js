import React from "react";
import Container from "../../layout/Container";
import {useParams, Link} from "react-router-dom"; 
import styles from './Editora.module.css';
import api from "../../Api";


export default function Details() {
  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  let { id } = useParams();

  React.useEffect(() => {
    api.get(`/editora/${id}`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrada!";

  return (
    <Container>
      <div className={styles.container}>
      <ul className={styles.formulario}>
        <li className={styles.titulo}>Detalhes Editora</li>
        <li className={styles.nome}>Código da Editora: {editora.Codeditora}</li>
        <li className={styles.nome}>Nome: {editora.Nomeditora}</li>
        {editora.Codintegracao != null? <li className={styles.nome}>Código de Integração: {editora.Codintegracao}</li>: null }
        <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={'/editora/list'}><button className={styles.padrao}>Voltar</button></Link>
          </li>
          <li className={styles.opcao}>
            <Link to={`/editora/delete/${editora.Codeditora}`}><button className={styles.padrao}>Deletar</button></Link>
          </li>
          <li className={styles.opcao}>
            <Link to={`/editora/update/${editora.Codeditora}`}><button className={styles.padrao}>Editar</button></Link> 
          </li>
        </ul>
      </ul>
    </div>
    </Container>
  );
}