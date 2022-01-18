import styles from './Input.module.css'

function InputReset(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputReset} type="reset" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputReset;