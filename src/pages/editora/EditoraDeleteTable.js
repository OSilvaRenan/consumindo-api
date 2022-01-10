import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom";
import styles from './Editora.module.css'; 
import api from "../../Api";

export default function App() {
  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    api.get(`/editora/${id}`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function deleteEditora() {
    api.delete(`/editora/${id}`)
      .then(() => {
        alert("Editora deletada!");
        setEditora(null)
        navigate('/editora/list', { replace: true });
      }).catch(error => {
      setError(error);
    });
  }

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrada!";

  return (
    <Container>
    <table className={styles.container}>
      <tbody className={styles.formulario}>
        <tr className={styles.titulo}>Excluir Editora</tr>
        <tr className={styles.campos}>
          <td className={styles.descricao}>Código da Editora:</td>
          <td className={styles.informacao}>{editora.Codeditora}</td>
        </tr>
        <tr className={styles.campos}>
          <td className={styles.descricao}>Nome: </td>
          <td className={styles.informacao}>{editora.Nomeditora}</td>
        </tr>
        {editora.Codintegracao != null? <tr className={styles.campos}><td className={styles.descricao}>Código de Integração:</td><td className={styles.informacao}>{editora.Codintegracao}</td></tr>: null }
        <tr className={styles.botao}>
          <td className={styles.botao}>
            <Link to={'/editora/list'}><button className={styles.padrao}>Voltar</button></Link>
          </td>
          <td className={styles.botao}>
            <button className={styles.sucesso} onClick={deleteEditora}>Deletar Editora</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Container>
  );
}