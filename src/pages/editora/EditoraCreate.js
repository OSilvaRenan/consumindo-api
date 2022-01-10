import React from "react";
import { useNavigate, Link} from "react-router-dom"; 
import api from "../../Api";
import Container from "../../layout/Container";
import styles from './Editora.module.css';

export default function Create() {
  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [nomeditora, setNomeditora] = React.useState("");
  const [codintegracao, setCodintegracao] = React.useState("");
  const [dsceditora, setDsceditora] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    api.get(`/editora`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function createEditora() {
    if(nomeditora !== ""){
      api
      .post("/editora", {
        Nomeditora: nomeditora,
        Codintegracao: codintegracao
      })
      .then((response) => {
        setEditora(response.data);
        alert("Editora Criada!");
        navigate('/editora/list', { replace: true });
      }).catch(error => {
        setError(error);
      });
    }else{
      alert("Digite o Nome da Editora!");
    }
  }

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrada!";

  return (
    <Container>
      <div className={styles.container}>
        <ul className={styles.formulario}>
          <li className={styles.titulo}>Novo Editora</li>
          <li className={styles.campos}><input placeholder="Digite o Nome do Editora" value={nomeditora} onChange={nomeditora => setNomeditora(nomeditora.target.value)} /></li>
          <li className={styles.campos}><input placeholder="Digite o Código de Integração" value={codintegracao} onChange={codintegracao => setCodintegracao(codintegracao.target.value)} /></li>
          <li className={styles.campos}><input placeholder="Digite a Descrição do Editora" value={dsceditora} onChange={dsceditora => setDsceditora(dsceditora.target.value)} /></li>
          <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={`/editora/list`}>
            <button className={styles.padrao}>Voltar</button>
          </Link>
          </li>
          <li className={styles.opcao}>
              <button onClick={createEditora} className={styles.sucesso}>Criar Editora</button>
          </li>
          </ul>
        </ul>
      </div>
    </Container>
  );
}