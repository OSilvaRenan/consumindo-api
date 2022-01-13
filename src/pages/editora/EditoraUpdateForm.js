import React from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate} from "react-router-dom"; 
import api from "../../Api";
import { useState } from "react/cjs/react.development";
import Form from "../../layout/Componentes/Form";


export default function Update() {

  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  React.useEffect(() => {
    api.get(`/editora/${id}`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function onChange(ev){
    const {name, value} = ev.target;
    setValues({...values, [name]: value})
}

  function updateEditora(ev) {
    ev.preventDefault();
      api
      .put(`/editora/${editora.Codeditora}`,values)
      .then((response) => {
        setEditora(response.data);
        alert("Editora Atualizada!");
        navigate(`/editora/details/${id}` , { replace: true });
      }).catch(error => {
        setError(error);
      });  
    }

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrado!";

  return (
    <Container>
     <Form title="Editar Editora" tabela="editora" onChange={onChange} onSubmit={updateEditora} value={values}/>
  </Container>
  );
}