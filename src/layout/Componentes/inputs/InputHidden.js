import styles from './Input.module.css'

function InputHidden(props){

    return(
        <div className={styles.campos}>
            <input className={styles.inputHidden} type="hidden" id={props.name} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
        </div>     
    )
}

export default InputHidden;