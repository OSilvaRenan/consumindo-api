import React, {useState} from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate} from "react-router-dom"; 
import api from "../../Api";
import FormAutor from "../../layout/Componentes/forms/FormAutor";

export default function Update() {

  // const autor = {Codautor: 0, Nomautor: '', Codintegracao: '', Dscautor: ''};
  // setState({autor});
  
  const [autor, setAutor] = useState({Codautor: 0, Nomautor: '', Codintegracao: '', Dscautor: ''});
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  // const [values, setValues] = useState({});
  
  React.useEffect(() => {
    api.get(`/autor/${id}`).then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });

  }, []);

  function onChange(ev){
    // const autor = {...this.state.autor};
    // autor[ev.target.name] = ev.target.value;
    // setAutor(autor);

    const {value, name} = ev.target;
     console.log("name: ", name);
     console.log("value: ", value);

    setAutor({...autor, [name]: value})

    // this.setState({autor});
}

  function updateAutor(ev) {
     ev.preventDefault();
      api
      .put(`/autor/${autor.Codautor}`, autor)
      .then((response) => {
        setAutor(response.data);
        alert("Autor Atualizado!");
        navigate(`/autor/details/${id}` , { replace: true });
      }).catch(error => {
        setError(error);
      });  
    }

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  return (
    <Container>
        <FormAutor title="Editar Autor" onChange={onChange} onSubmit={updateAutor} value={autor}/>
    </Container>
  );
}