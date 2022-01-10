import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import AutorList from "./pages/autor/AutorListTable";
import AutorDetails from "./pages/autor/AutorDetailsTable";
import AutorCreate from "./pages/autor/AutorCreateForm";
import AutorUpdate from "./pages/autor/AutorUpdateForm";
import AutorDelete from "./pages/autor/AutorDeleteTable";
import EditoraList from "./pages/editora/EditoraListTable";
import EditoraDetails from "./pages/editora/EditoraDetailsTable";
import EditoraCreate from "./pages/editora/EditoraCreateForm";
import EditoraUpdate from "./pages/editora/EditoraUpdateForm";
import EditoraDelete from "./pages/editora/EditoraDeleteTable";
import Navbar from "./layout/Navbar";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Navbar />
                <Routes>
                        <Route path="/" element={<Home/>}/> 
                        <Route path="autor/list" element={<AutorList/>}/>
                        <Route path="autor/details/:id" element={<AutorDetails/>}/>  
                        <Route path="autor/create" element={<AutorCreate/>}/> 
                        <Route path="autor/update/:id" element={<AutorUpdate/>}/> 
                        <Route path="autor/delete/:id" element={<AutorDelete/>}/> 
                        <Route path="editora/list" element={<EditoraList/>}/>
                        <Route path="editora/details/:id" element={<EditoraDetails/>}/>  
                        <Route path="editora/create/" element={<EditoraCreate/>}/> 
                        <Route path="editora/update/:id" element={<EditoraUpdate/>}/> 
                        <Route path="editora/delete/:id" element={<EditoraDelete/>}/>  
                </Routes>
        </BrowserRouter>
    );
}