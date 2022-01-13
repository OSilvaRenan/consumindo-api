import React from "react";
import styles from './Form.module.css';
import Input from "../../layout/Componentes/Input";
import { Link } from 'react-router-dom';

function Form(props){

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={props.onSubmit}>
                <h1 className={styles.titulo}>{props.title}</h1>

                { props.tabela == "autor" ? 
                    <div>
                        <Input type="text" text="Nome Autor:" name="nomautor" placeholder="Digite o Nome do Autor" value={props.value.Nomautor} onChange={props.onChange}/>
                        <Input type="text" text="Código de Integração:" name="codintegracao" placeholder="Digite o Código de Integração" value={props.value.Codintegracao} onChange={props.onChange}/>
                        <Input type="text" text="Descrição do Autor:" name="dscautor" placeholder="Digite a Descrição do Autor" value={props.value.Dscautor} onChange={props.onChange}/>
                    </div>
                    :  
                    <div>
                        <Input type="text" text="Nome Editora:" name="nomeditora" placeholder="Digite o Nome da Editora" onChange={props.onChange}/>
                        <Input type="text" text="Código de Integração:" name="codintegracao" placeholder="Digite o Código de Integração" onChange={props.onChange}/>
                    </div>  
                }
                
                <div className={styles.opcoes}>
                    <div className={styles.opcao}>
                        <Link to={`/autor/list`}>
                            <button className={styles.padrao}>Voltar</button>
                        </Link>
                    </div>
                    <div className={styles.opcao}>
                        <button type="submit" className={styles.sucesso}>Criar</button>
                    </div>
                </div>
            </form>
        </div> 
    )}
    
    export default Form;