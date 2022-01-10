import api from "../../Api";
import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom"; 
import styles from './Autor.module.css';

export default function App() {
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
      api.get(`/autor/${id}`).then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function deleteAutor() {
    api
      .delete(`/autor/${id}`)
      .then(() => {
        alert("Autor deletado!");
        setAutor(null);
        navigate('/autor/list', { replace: true });
      }).catch(error => {
        setError(error);
      });
  }

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  return (
    <Container>
      <table className={styles.container}>
        <tbody className={styles.formulario}>
          <tr className={styles.titulo}>Excluir Autor</tr>
          <tr className={styles.campos}>
            <td className={styles.descricao}>Código do Autor:</td>
            <td className={styles.informacao}>{autor.Codautor}</td>
          </tr>
          <tr className={styles.campos}>
            <td className={styles.descricao}>Nome: </td>
            <td className={styles.informacao}>{autor.Nomautor}</td>
          </tr>
          {autor.Codintegracao != null? <tr className={styles.campos}><td className={styles.descricao}>Código de Integração:</td><td className={styles.informacao}>{autor.Codintegracao}</td></tr>: null }
          {autor.Dscautor != null? <tr className={styles.campos}><td className={styles.descricao}>Descrição do Autor:</td><td className={styles.informacao}>{autor.Dscautor}</td></tr>: null }
          <tr className={styles.botao}>
            <td className={styles.botao}>
              <Link to={'/autor/list'}><button className={styles.padrao}>Voltar</button></Link>
            </td>
            <td className={styles.botao}>
              <button className={styles.sucesso} onClick={deleteAutor}>Deletar Autor</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>

 
  );
}