import React from "react";
import Container from "../../layout/Container";
import {useParams, Link} from "react-router-dom";   
import styles from './Autor.module.css';
import api from "../../Api";



export default function Details() {
  let { id } = useParams();
 
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    api.get(`/autor/${id}`).then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  return (
    <Container>
      <div className={styles.container}>
      <ul className={styles.formulario}>
        <li className={styles.titulo}>Detalhes Autor</li>
        <li className={styles.nome}>Código do Autor: {autor.Codautor}</li>
        <li className={styles.nome}>Nome: {autor.Nomautor}</li>
        {autor.Codintegracao != null? <li className={styles.nome}>Código de Integração: {autor.Codintegracao}</li>: null }
        {autor.Dscautor != null? <li className={styles.nome}>Descrição do Autor: {autor.Dscautor}</li>: null }
        <ul className={styles.opcoes}>
          <li className={styles.opcao}>
            <Link to={'/autor/list'}><button className={styles.padrao}>Voltar</button></Link>
          </li>
          <li className={styles.opcao}>
            <Link to={`/autor/delete/${autor.Codautor}`}><button className={styles.padrao}>Deletar</button></Link>
          </li>
          <li className={styles.opcao}>
            <Link to={`/autor/update/${autor.Codautor}`}><button className={styles.padrao}>Editar</button></Link> 
          </li>
        </ul>
      </ul>
    </div>
    </Container>
  );
}