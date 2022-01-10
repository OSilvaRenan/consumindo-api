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
    <div className={styles.container}>
      <ul className={styles.formulario}>
        <li className={styles.titulo}>Excluir Autor</li>
        <li className={styles.nome}>{autor.Nomautor}</li>
        {autor.Codintegracao != null? <li className={styles.nome}>Código de Integração: {autor.Codintegracao}</li>: null }
        {autor.Dscautor != null? <li className={styles.nome}>Descrição do Autor: {autor.Dscautor}</li>: null }
        <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={'/autor/list'}>
              <button className={styles.padrao}>Voltar</button>
            </Link>
          </li>
          <li className={styles.opcao}>
          <button className={styles.sucesso} onClick={deleteAutor}>Deletar Autor</button>
          </li>
        </ul>
      </ul>
    </div>
  </Container>
  );
}