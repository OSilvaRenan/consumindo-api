import styles from './Input.module.css'

function InputUrl(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelUrl} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputUrl} type="url" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputUrl;