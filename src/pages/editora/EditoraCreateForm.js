import React from "react";
import { useNavigate, Link} from "react-router-dom"; 
import api from "../../Api";
import Container from "../../layout/Container";
import styles from './Editora.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from "../../layout/Componentes/Input";

const validation = z.object({
  nomeditora: z.string().nonempty({ message: 'O Nome da Editora é obrigatório.' }).max(40, {message: 'O Nome da Editora precisa ter menos de 40 caracteres.'}),
  codintegracao: z.string().max(15, { message: 'O Código de Integração precisa ter menos de 15 caracteres.'})
});


export default function Create() {
 
   const{register, handleSubmit, formState: {errors }} = useForm({
      resolver: zodResolver(validation)
   });

  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    api.get(`/editora`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function createEditora(data) {
   api.post("/editora", {
        Nomeditora: data.nomeditora,
        Codintegracao: data.codintegracao
      })
      .then((response) => {
        setEditora(response.data);
        alert("Editora Criada!");
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
        <form className={styles.formulario} onSubmit={handleSubmit(createEditora)}>
          <h1 className={styles.titulo}>Nova Editora</h1>

          <Input type="text" text="Nome Editora:" value={editora.Nomeditora} name="nomeditora" placeholder="Digite o Nome da Editora" {...register("nomeditora")}/>
          <Input type="text" text="Código de Integração:" value={editora.Codintegracao} name="codintegracao" placeholder="Digite o Código de Integração" {...register("codintegracao")}/>

          {/* <div className={styles.campos}>
            <label className={styles.label}>Nome Editora: </label>
            <input className={styles.input}type="text" placeholder="Digite o Nome do Editora" name="nomeditora" {...register("nomeditora")} />
            {errors.nomeditora?.message && <span className={styles.erro}>{errors.nomeditora?.message}</span>}
          </div>
          <div className={styles.campos}>
            <label className={styles.label}>Código de Integração: </label>
            <input className={styles.input} placeholder="Digite o Código de Integração" name="codintegracao" {...register("codintegracao")}/>
            {errors.codintegracao?.message && <span className={styles.erro}>{errors.codintegracao?.message}</span>}
          </div> */}
          <div className={styles.opcoes}>
          <div className={styles.opcao}>
            <Link to={`/editora/list`}>
            <button className={styles.padrao}>Voltar</button>
          </Link>
          </div>
          <div className={styles.opcao}>
              <button type="submit" className={styles.sucesso}>Criar Editora</button>
          </div>
          </div>
        </form>
      </div>
    </Container>
  );
}