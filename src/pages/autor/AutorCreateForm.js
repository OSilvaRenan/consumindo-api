import React from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../Api";
import Container from "../../layout/Container";
import { useState } from 'react/cjs/react.development';
import FormAutor from "../../layout/Componentes/forms/FormAutor";

export default function Create() {
 
  const [autor, setAutor] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    api.get("/autor").then((response) => {
      setAutor(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  function onChange(ev){
      const {name, value} = ev.target;
      setValues({...values, [name]: value})
  }
 
  function createAutor(ev) {
      ev.preventDefault();
      api.post("/autor", values)
          .then((response) => {
            setAutor(response.data);
            alert("Autor Criado!");
            navigate('/autor/list', { replace: true });
          }).catch(error => {
            setError(error);
          });
  }

  if (error) return `Erro: ${error.message}`;
  if (!autor) return "Autor não encontrado!";

  return (
    <Container>
        <FormAutor title="Novo Autor" onChange={onChange} onSubmit={createAutor} value={values}/>
    </Container>
  );
}