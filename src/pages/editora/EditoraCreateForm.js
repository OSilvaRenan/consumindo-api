import React from "react";
import { useNavigate} from "react-router-dom"; 
import api from "../../Api";
import Container from "../../layout/Container";
import { useState } from 'react/cjs/react.development';
import FormEditora from "../../layout/Componentes/forms/FormEditora";

export default function Create() {

  const [editora, setEditora] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    api.get(`/editora`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function onChange(ev){
    const {name, value} = ev.target;
    setValues({...values, [name]: value})
}

  function createEditora(ev) {
    ev.preventDefault();
    api.post("/editora", values)
        .then((response) => {
          setEditora(response.data);
          alert("Editora Criada!");
          navigate('/editora/list', { replace: true });
        }).catch(error => {
          setError(error);
        });

  }

  if (error) return `Erro: ${error.message}`;
  if (!editora) return "Editora não encontrada!";

  return (
    <Container>
       <FormEditora titulo="Nova Editora" onChange={onChange} onSubmit={createEditora} value={values}/>
    </Container>
  );
}