import React from "react";
import { useNavigate, Link} from "react-router-dom"; 
import api from "../../Api";
import Container from "../../layout/Container";
import styles from './Autor.module.css';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from "../../layout/Componentes/Input";

const validation = z.object({
  nomautor: z.string().nonempty({ message: 'O Nome do Autor é obrigatório.' }).max(40, {message: 'O Nome do Autor precisa ter menos de 40 caracteres.'}),
  codintegracao: z.string().nonempty({ message: 'O Código de Integração é obrigatório.' }).max(15, { message: 'O Código de Integração precisa ter menos de 15 caracteres.'}),
  dscautor: z.string().max(15, { message: 'A Descrição do Autor precisa ter menos de 15 caracteres.'}),
});


export default function Create() {
 
   const{register, handleSubmit, formState: {errors }} = useForm({
      resolver: zodResolver(validation)
   });

  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    api.get("/autor").then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function createAutor(data) {
    // console.log("Nomeautor: ", data.nomautor);
    // console.log("Codintegracao: ", data.codintegracao);
    // console.log("Dscautor: ", data.dscautor);
       api
       .post("/autor", {
         Nomautor: data.nomautor,
         Codintegracao: data.codintegracao,
         Dscautor: data.dscautor
       })
       .then((response) => {
         setAutor(response.data);
         alert("Autor Criado!");
         navigate('/autor/list', { replace: true });
       }).catch(error => {
         setError(error);
       });
  }

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  

  return (
    <Container>
      <div className={styles.container}>
        <form className={styles.formulario} onSubmit={handleSubmit(createAutor)}>
          <h1 className={styles.titulo}>Novo Autor</h1>

         <Input type="text" text="Nome Autor:" name="nomautor" placeholder="Digite o Nome do Autor" {...register("nomautor")}/>
         <Input type="text" text="Código de Integração:" name="codintegracao" placeholder="Digite o Código de Integração" {...register("codintegracao")}/>
         <Input type="text" text="Descrição do Autor:" name="dscautor" placeholder="Digite a Descrição do Autor" {...register("dscautor")}/>

           {/* <div className={styles.campos}>
            <label className={styles.label}>Nome Autor: </label>
            <input className={styles.input}type="text" placeholder="Digite o Nome do Autor" name="nomautor" {...register("nomautor")} />
            {errors.nomautor?.message && <span className={styles.erro}>{errors.nomautor?.message}</span>}
          </div> 

          <div className={styles.campos}>
            <label className={styles.label}>Código de Integração: </label>
            <input className={styles.input} placeholder="Digite o Código de Integração" name="codintegracao" {...register("codintegracao")}/>
            {errors.codintegracao?.message && <span className={styles.erro}>{errors.codintegracao?.message}</span>}
          </div>
          <div className={styles.campos}>
            <label className={styles.label}>Descrição do Autor: </label>
            <input className={styles.input} placeholder="Digite a Descrição do Autor" name="dscautor" {...register("dscautor")}/>
            {errors.dscautor?.message && <span className={styles.erro}>{errors.dscautor?.message}</span>}
          </div> */}

          <div className={styles.opcoes}>
          <div className={styles.opcao}>
            <Link to={`/autor/list`}>
            <button className={styles.padrao}>Voltar</button>
          </Link>
          </div>
          <div className={styles.opcao}>
              <button type="submit" className={styles.sucesso}>Criar Autor</button>
          </div>
          </div>
        </form>
      </div>
    </Container>
  );
}