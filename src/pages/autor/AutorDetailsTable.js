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
      <table className={styles.container}>
        <tbody className={styles.formulario}>
          <tr className={styles.titulo}>Detalhes Autor</tr>
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
              <Link to={`/autor/delete/${autor.Codautor}`}><button className={styles.padrao}>Deletar</button></Link>
            </td>
            <td className={styles.botao}>
              <Link to={`/autor/update/${autor.Codautor}`}><button className={styles.padrao}>Editar</button></Link> 
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}