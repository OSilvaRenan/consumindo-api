import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate, Link} from "react-router-dom"; 
import styles from './Autor.module.css';
import api from "../../Api";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from "../../layout/Componentes/Input";

const validation = z.object({
  nomautor: z.string().nonempty({ message: 'O Nome do Autor é obrigatório.' }).max(40, {message: 'O Nome do Autor precisa ter menos de 40 caracteres.'}),
  codintegracao: z.string().nonempty({ message: 'O Código de Integração é obrigatório.' }).max(15, { message: 'O Código de Integração precisa ter menos de 15 caracteres.'}),
  dscautor: z.string().max(15, { message: 'A Descrição do Autor precisa ter menos de 15 caracteres.'}),
});

export default function Update() {

  const{register, handleSubmit, formState: {errors }} = useForm({
    resolver: zodResolver(validation)
 });

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

  function updateAutor(data) {
      api
      .put(`/autor/${autor.Codautor}`, {
        Nomautor: data.nomautor,
        Codintegracao: data.codintegracao,
        Dscautor: data.dscautor
      })
      .then((response) => {
        setAutor(response.data);
        alert("Autor Atualizado!");
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
      <form className={styles.formulario} onSubmit={handleSubmit(updateAutor)}>
        <h1 className={styles.titulo}>Editar Autor</h1>

          <Input type="text" text="Nome Autor:" value={autor.Nomautor} name="nomautor" placeholder="Digite o Nome do Autor" {...register("nomautor")}/>
          <Input type="text" text="Código de Integração:" value={autor.Codintegracao} name="codintegracao" placeholder="Digite o Código de Integração" {...register("codintegracao")}/>
          <Input type="text" text="Descrição do Autor:" value={autor.Dscautor} name="dscautor" placeholder="Digite a Descrição do Autor" {...register("dscautor")}/>


        {/* <div className={styles.campos}>
          <label className={styles.label}>Nome Autor: </label>
          <input className={styles.input} type="text" value={autor.Nomautor} placeholder={autor.Nomautor} name="nomautor" {...register("nomautor")} />
          {errors.nomautor?.message && <span className={styles.erro}>{errors.nomautor?.message}</span>}
        </div>
        <div className={styles.campos}>
          <label className={styles.label}>Código de Integração: </label>
          <input className={styles.input} value={autor.Codintegracao} placeholder={autor.Codintegracao} name="codintegracao" {...register("codintegracao")}/>
          {errors.codintegracao?.message && <span className={styles.erro}>{errors.codintegracao?.message}</span>}
        </div>
        <div className={styles.campos}>
          <label className={styles.label}>Descrição do Autor: </label>
          <input className={styles.input} value={autor.Dscautor} placeholder={autor.Dscautor} name="dscautor" {...register("dscautor")}/>
          {errors.dscautor?.message && <span className={styles.erro}>{errors.dscautor?.message}</span>}
        </div> */}
        <div className={styles.opcoes}>
        <div className={styles.opcao}>
          <Link to={`/autor/list`}>
            <button className={styles.padrao}>Voltar</button>
          </Link>
        </div>
        <div className={styles.opcao}>
            <button type="submit" className={styles.sucesso}>Atualizar Autor</button>
        </div>
        </div>
      </form>
    </div>
  </Container>
  );
}