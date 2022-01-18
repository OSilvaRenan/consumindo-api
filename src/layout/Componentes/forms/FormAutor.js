import React from "react";
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import InputText from "../inputs/InputText";


function FormAutor(props){

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={props.onSubmit}>
                <h1 className={styles.titulo}>{props.title}</h1>

                <InputText text="Nome Autor:" name="Nomautor" placeholder="Digite o Nome do Autor" value={props.value.Nomautor} onChange={props.onChange}/>
                <InputText text="Código de Integração:" name="Codintegracao" placeholder="Digite o Código de Integração" value={props.value.Codintegracao} onChange={props.onChange}/>
                <InputText text="Descrição do Autor:" name="Dscautor" placeholder="Digite a Descrição do Autor" value={props.value.Dscautor} onChange={props.onChange}/>
                  
                <div className={styles.opcoes}>
                    <div className={styles.opcao}>
                        <Link to={`/autor/list`}>
                            <button className={styles.padrao}>Voltar</button>
                        </Link>
                    </div>
                    <div className={styles.opcao}>
                        <button type="submit" className={styles.sucesso}>{props.title}</button>
                    </div>
                </div>
            </form>
        </div> 
    )}
    
    export default FormAutor;