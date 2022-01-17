import React, { useState } from "react";
import FormTeste from "../layout/Componentes/forms/FormTeste";
import Container from "../layout/Container";


export default function Home() {

  const [values, setValues] = useState({});

  function onChange(ev){
    const {name, value} = ev.target;
    setValues({...values, [name]: value})
}

  return (
    <Container>
      <FormTeste title="Teste" onChange={onChange} />
    </Container>
  );
}
