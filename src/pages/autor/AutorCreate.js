import api from "../../Api";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../layout/Container";
import styles from './Autor.module.css';


export default function Create() {
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [nomautor, setNomautor] = React.useState("");
  const [codintegracao, setCodintegracao] = React.useState("");
  const [dscautor, setDscautor] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    api.get("/autor").then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function createAutor() {
    if(nomautor !== ""){
      api
      .post("/autor", {
        Nomautor: nomautor,
        Codintegracao: codintegracao,
        Dscautor: dscautor
      })
      .then((response) => {
        setAutor(response.data);
        alert("Autor Criado!");
        navigate('/autor/list', { replace: true });
      }).catch(error => {
        setError(error);
      });
    }else{
      alert("Digite o Nome do Autor!");
    }
  }
  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  return (
    <Container>
      <div className={styles.container}>
        <ul className={styles.formulario}>
          <li className={styles.titulo}>Novo Autor</li>
          <li className={styles.campos}><input placeholder="Digite o Nome do Autor"  onChange={nomautor => setNomautor(nomautor.target.value)} /></li>
          <li className={styles.campos}><input placeholder="Digite o Código de Integração"  onChange={codintegracao => setCodintegracao(codintegracao.target.value)} /></li>
          <li className={styles.campos}><input placeholder="Digite a Descrição do Autor"  onChange={dscautor => setDscautor(dscautor.target.value)} /></li>
          <ul className={styles.opcoes}>
            <li className={styles.opcao}>
              <Link to={`/autor/list`}>
                <button className={styles.padrao}>Voltar</button>
              </Link>
            </li>
            <li className={styles.opcao}>
                <button onClick={createAutor} className={styles.sucesso}>Criar Autor</button>
            </li>
          </ul>
        </ul>
      </div>
    </Container>
  );
}