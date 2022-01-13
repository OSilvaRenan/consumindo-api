import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate} from "react-router-dom"; 
import api from "../../Api";
import { useState } from "react/cjs/react.development";
import Form from "../../layout/Componentes/Form";



export default function Update() {

  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  
  React.useEffect(() => {
    api.get(`/autor/${id}`).then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });

  }, []);

  function onChange(ev){
    const {value, name} = ev.target;
    console.log("name: ", name);
    console.log("value: ", value);

    setAutor({...autor, [name]: value})
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
        <Form title="Editar Autor" tabela="autor" onChange={onChange} onSubmit={updateAutor} value={autor}/>
    </Container>
  );
}