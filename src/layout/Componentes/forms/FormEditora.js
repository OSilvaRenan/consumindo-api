import React from "react";
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import InputSubmit from "../inputs/InputSubmit";
import InputText from "../inputs/InputText";


function FormEditora(props){

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={props.onSubmit}>
                <h1 className={styles.titulo}>{props.title}</h1>

                <InputText type="text" text="Nome Editora:" name="Nomeditora" placeholder="Digite o Nome da Editora" value={props.value.Nomeditora} onChange={props.onChange}/>
                <InputText type="text" text="Código de Integração:" name="Codintegracao" placeholder="Digite o Código de Integração" value={props.value.Codintegracao} onChange={props.onChange}/>

                <div className={styles.opcoes}>
                    <div className={styles.opcao}>
                        <Link to={`/editora/list`}>
                            <button className={styles.padrao}>Voltar</button>
                        </Link>
                    </div>
                    <div className={styles.opcao}>
                        <InputSubmit name="InputSubmit" value={props.title}></InputSubmit>
                    </div>
                </div>
            </form>
        </div> 
    )}
    
    export default FormEditora;