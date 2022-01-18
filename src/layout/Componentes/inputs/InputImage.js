import styles from './Input.module.css'

function InputImage(props){

    return(
        <div className={styles.campos}>
            <label className={styles.labelImage} htmlFor={props.name}>{props.text}</label>
            <input className={styles.inputImage} type="image" id={props.name} name={props.name} src={props.src} alt={props.alt} onChange={props.onChange} value={props.value == null ? '': props.value}/>
        </div>     
    )
}

export default InputImage;