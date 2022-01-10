import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom"; 
import styles from './Editora.module.css';
import api from "../../Api";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from "../../layout/Componentes/Input";

const validation = z.object({
  nomeditora: z.string().nonempty({ message: 'O Nome da Editora é obrigatório.' }).max(40, {message: 'O Nome da Editora precisa ter menos de 40 caracteres.'}),
  codintegracao: z.string().nonempty({ message: 'O Código de Integração é obrigatório.' }).max(15, { message: 'O Código de Integração precisa ter menos de 15 caracteres.'}),
});

export default function Update() {

  const{register, handleSubmit, formState: {errors }} = useForm({
    resolver: zodResolver(validation)
 });

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

  function updateEditora(data) {
      api
      .put(`/editora/${editora.Codeditora}`, {
        Nomeditora: data.nomeditora,
        Codintegracao: data.codintegracao
      })
      .then((response) => {
        setEditora(response.data);
        alert("Editora Atualizada!");
        navigate(`/editora/details/${id}` , { replace: true });
      }).catch(error => {
        setError(error);
      });  
    }

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrado!";

  return (
    <Container>
    <div className={styles.container}>
      <form className={styles.formulario} onSubmit={handleSubmit(updateEditora)}>
        <h1 className={styles.titulo}>Editar Editora</h1>

        <Input type="text" text="Nome Editora:" value={editora.Nomeditora} name="nomeditora" placeholder="Digite o Nome da Editora" {...register("nomeditora")}/>
        <Input type="text" text="Código de Integração:" value={editora.Codintegracao} name="codintegracao" placeholder="Digite o Código de Integração" {...register("codintegracao")}/>

        {/* <div className={styles.campos}>
          <label className={styles.label}>Nome Editora: </label>
          <input className={styles.input} type="text" value={editora.Nomeditora} placeholder={editora.Nomeditora} name="nomeditora" {...register("nomeditora")} />
          {errors.nomeditora?.message && <span className={styles.erro}>{errors.nomeditora?.message}</span>}
        </div>
        <div className={styles.campos}>
          <label className={styles.label}>Código de Integração: </label>
          <input className={styles.input} value={editora.Codintegracao} placeholder={editora.Codintegracao} name="codintegracao" {...register("codintegracao")}/>
          {errors.codintegracao?.message && <span className={styles.erro}>{errors.codintegracao?.message}</span>}
        </div>
        <div className={styles.opcoes}>
        <div className={styles.opcao}>
          <Link to={`/editora/list`}>
            <button className={styles.padrao}>Voltar</button>
          </Link>
        </div>
        <div className={styles.opcao}>
            <button type="submit" className={styles.sucesso}>Atualizar Editora</button>
        </div>
        </div> */}
      </form>
    </div>
  </Container>
  );
}