import styles from './Input.module.css'

function InputSubmit(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputSubmit} type="submit" id={props.name} name={props.name} value={props.value}/>
        </div>     
    )
}

export default InputSubmit;