import styles from './Input.module.css'

function InputColor(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelColor} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputColor} type="color" id={props.name} name={props.name} value={props.value} onChange={props.onChange}/>
        </div>     
    )
}

export default InputColor;