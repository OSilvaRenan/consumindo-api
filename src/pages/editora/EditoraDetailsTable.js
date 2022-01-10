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
      <table className={styles.container}>
        <tbody className={styles.formulario}>
          <tr className={styles.titulo}>Detalhes Editora</tr>
          <tr className={styles.campos}>
            <td className={styles.descricao}>Código da Editora:</td>
            <td className={styles.informacao}>{editora.Codeditora}</td>
          </tr>
          <tr className={styles.campos}>
            <td className={styles.descricao}>Nome: </td>
            <td className={styles.informacao}>{editora.Nomeditora}</td>
          </tr>
          {editora.Codintegracao != null? <tr className={styles.campos}><td className={styles.descricao}>Código de Integração:</td><td className={styles.informacao}>{editora.Codintegracao}</td></tr>: null }
          {editora.Dsceditora != null? <tr className={styles.campos}><td className={styles.descricao}>Descrição do Editora:</td><td className={styles.informacao}>{editora.Dsceditora}</td></tr>: null }
          <tr className={styles.botao}>
            <td className={styles.botao}>
              <Link to={'/editora/list'}><button className={styles.padrao}>Voltar</button></Link>
            </td>
            <td className={styles.botao}>
              <Link to={`/editora/delete/${editora.Codeditora}`}><button className={styles.padrao}>Deletar</button></Link>
            </td>
            <td className={styles.botao}>
              <Link to={`/editora/update/${editora.Codeditora}`}><button className={styles.padrao}>Editar</button></Link> 
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}