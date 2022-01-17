import React, {useState} from "react";
import Container from "../../layout/Container";
import {useParams, useNavigate} from "react-router-dom"; 
import api from "../../Api";
import FormEditora from "../../layout/Componentes/forms/FormEditora";

export default function Update() {

  const [editora, setEditora] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();


  React.useEffect(() => {
    api.get(`/editora/${id}`).then((response) => {
      setEditora(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  function onChange(ev){
    const {name, value} = ev.target;
    setEditora({...editora, [name]: value})
}

  function updateEditora(ev) {
    ev.preventDefault();
      api
      .put(`/editora/${editora.Codeditora}`, editora)
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
     <FormEditora title="Editar Editora" onChange={onChange} onSubmit={updateEditora} value={editora}/>
  </Container>
  );
}