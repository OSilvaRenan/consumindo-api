import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom"; 
import styles from './Autor.module.css';
import api from "../../Api";


const baseURL = "http://localhost:61083/autor";

export default function Update() {
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [nomautor, setNomautor] = React.useState("");
  const [codintegracao, setCodintegracao] = React.useState("");
  const [dscautor, setDscautor] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    api.get(`/autor/${id}`).then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function updateAutor() {
      api
      .put(`${baseURL}/${autor.Codautor}`, {
        Nomautor: nomautor,
        Codintegracao: codintegracao,
        Dscautor: dscautor
      })
      .then((response) => {
        setAutor(response.data);
        navigate(`/autor/details/${id}` , { replace: true });
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
          <li className={styles.titulo}>Editar Autor</li>
          <li className={styles.campos}><input value={autor.nomautor} placeholder={`${autor.Nomautor}`} onChange={nomautor => setNomautor(nomautor.target.value)} /></li>
          <li className={styles.campos}><input placeholder={`${autor.Codintegracao}`} onChange={codintegracao => setCodintegracao(codintegracao.target.value)} /></li>
          <li className={styles.campos}><input placeholder={`${autor.Dscautor}`} onChange={dscautor => setDscautor(dscautor.target.value)} /></li>
          <ul className={styles.opcoes}>
            <li className={styles.opcao}>
              <Link to={'/autor/list'}>
                <button className={styles.padrao}>Voltar</button>
              </Link>
            </li>
            <li className={styles.opcao}>
              <button className={styles.sucesso} onClick={updateAutor}>Atualizar Autor</button>
            </li>
          </ul>
        </ul>
      </div>
    </Container>
  );
}