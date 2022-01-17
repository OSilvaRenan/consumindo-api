import React from "react";
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import InputSearch from "../inputs/InputSearch";
import InputTel from "../inputs/InputTel";
import InputText from "../inputs/InputText";
import InputUrl from "../inputs/InputUrl";
import InputColor from "../inputs/InputColor";
import InputDate from "../inputs/InputDate";
import InputEmail from "../inputs/InputEmail";
import InputNumber from "../inputs/InputNumber";
import InputRange from "../inputs/InputRange";
import InputButton from "../inputs/InputButton";
import InputCheckbox from "../inputs/InputCheckbox";
import InputDatetimelocal from "../inputs/InputDatetimelocal";
import InputFile from "../inputs/InputFile";
import InputHidden from "../inputs/InputHidden";
import InputImage from "../inputs/InputImage";
import InputRadio from "../inputs/InputRadio";
import InputReset from "../inputs/InputReset";
import InputSubmit from "../inputs/InputSubmit";

function FormTeste(props){

    return(
        <div className={styles.container}>
            <form className={styles.formulario} onSubmit={props.onSubmit}>
                <h1 className={styles.titulo}>{props.title}</h1>

                <InputButton name="InputButton" value="InputButton" />
                <InputCheckbox text="InputCheckbox" name="InputCheckbox" />
                <InputColor text="InputColor" name="InputColor" onChange={props.onChange}/>
                <InputDate text="InputDate" name="InputDate" onChange={props.onChange}/>
                <InputDatetimelocal text="InputDatetimelocal" name="InputDatetimelocal" onChange={props.onChange}/>
                
                <InputEmail text="InputEmail" name="InputEmail" onChange={props.onChange}/>
                <InputFile text="InputFile" name="InputFile" onChange={props.onChange}/>
                <InputHidden text="InputHidden" name="InputHidden" onChange={props.onChange}/>
                <InputImage text="InputImage" name="InputImage" onChange={props.onChange}/>
                <InputNumber text="InputNumber" name="InputNumber" onChange={props.onChange}/>
                <InputRadio text="InputRadio" name="InputRadio" onChange={props.onChange}/>
                <InputRange text="InputRange" name="InputRange" onChange={props.onChange}/>
                <InputReset text="InputReset" name="InputReset" onChange={props.onChange}/>
                <InputSearch text="InputSearch" name="InputSearch"onChange={props.onChange}/>
                <InputSubmit text="InputSubmit" name="InputSubmit"onChange={props.onChange}/>
                <InputTel text="InputTel" name="InputTel" onChange={props.onChange}/>
                <InputText text="InputText" name="InputText" onChange={props.onChange}/>
                <InputUrl text="InputUrl" name="InputUrl" onChange={props.onChange}/>
                
                <div className={styles.opcoes}>
                    <div className={styles.opcao}>
                        <Link to={`/home`}>
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
    
    export default FormTeste;