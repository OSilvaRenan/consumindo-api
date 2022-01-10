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
      <div className={styles.container}>
        <ul className={styles.formulario}>
          <li className={styles.titulo}>Excluir Editora</li>
          <li className={styles.nome}>{editora.Nomeditora}</li>
          {editora.Codintegracao != null? <li className={styles.nome}>Código de Integração: {editora.Codintegracao}</li>: null }
          <ul className={styles.opcoes}>
            <li className={styles.opcao}>
              <Link to={'/editora/list'}>
                <button className={styles.padrao}>Voltar</button>
              </Link>
            </li>
            <li className={styles.opcao}>
            <button className={styles.sucesso} onClick={deleteEditora}>Deletar Editora</button>
            </li>
          </ul>
        </ul>
      </div>
    </Container>
  );
}