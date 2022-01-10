import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom"; 
import styles from './Editora.module.css';
import api from "../../Api";

export default function App() {
  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  let [nomeditora, setNomeditora] = React.useState(null);
  let [codintegracao, setCodintegracao] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    api.get(`editora/${id}`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function updateEditora() {
    if((nomeditora == null) || (codintegracao == null)){
      nomeditora = editora.Nomeditora;
      codintegracao = editora.Codintegracao;
    }
    api
      .put(`editora/${id}`, {
        Nomeditora: nomeditora,
        Codintegracao: codintegracao
      })
      .then((response) => {
        setEditora(response.data);
        navigate(`/editora/details/${id}`, { replace: true });
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
          <li className={styles.titulo}>Editar Editora</li>
          <li className={styles.campos}><input placeholder= {`${editora.Nomeditora}`} onChange={nomeditora => setNomeditora(nomeditora.target.value)}/></li>
          <li className={styles.campos}><input placeholder= {`${editora.Codintegracao}`} onChange={codintegracao => setCodintegracao(codintegracao.target.value)}/></li>
          <ul className={styles.opcoes}>
            <li className={styles.opcao}>
              <Link to={'/editora/list'}><button className={styles.padrao}>Voltar</button></Link>
            </li>
            <li className={styles.opcao}>
              <button className={styles.sucesso} onClick={updateEditora}>Atualizar Editora</button>
            </li>
          </ul>
        </ul>
      </div>
     
      
      
      
     
    </Container>
  );
}