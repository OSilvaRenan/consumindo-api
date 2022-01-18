import styles from './Input.module.css'

function InputButton(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputButton} type="button" id={props.name} name={props.name} onClick={props.onClick} value={props.value}/>
        </div>     
    )
}

export default InputButton;