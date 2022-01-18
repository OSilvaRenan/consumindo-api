import styles from './Input.module.css'

function InputNumber(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelNumber} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputNumber} type="number" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputNumber;