import React, { useEffect, useState } from 'react';

export default function CadastrarLivro(props) {
    const [click, setClick] = useState(false);
    const [isbn, setIsbn] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState(''); 
    
    const cadastrar = ()=>{
        props.func(isbn, titulo, autor);
        console.log(props.getAPI);
        return
    }

    const cadastro = ()=>{
        setClick(true);
        return;
    }

    return (
        <tr className='cadastro'>
            {
                click ? 
                <td colSpan='4' className='cadastroInput'>
                    ISBN: <input type="text" name='isbn' placeholder='00-00-0000-000-0' onChange={e=>setIsbn(e.target.value)}/>
                    Titulo: <input type="text" name='titulo' placeholder='Digite um titulo' onChange={e=>setTitulo(e.target.value)}/>
                    Autor: <input type="text" name='autor' placeholder='Digite nome do autor' onChange={e=>setAutor(e.target.value)}/>
                    <button onClick={_=>cadastrar()}>Cadastrar</button>
                    <span className='cancelar' onClick={_=>setClick(false)}>Cancelar</span>
                </td> : 
                <td colSpan='4'><span className='cadastroClick' onClick={cadastro}>Cadastrar novo livro</span></td>
            }
        </tr>
    )
}
//978-85-7522-578-3