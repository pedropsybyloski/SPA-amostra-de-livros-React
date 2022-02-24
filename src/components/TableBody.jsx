import React, { useState, useEffect } from 'react';
//import livros from '../data/livros';
import Search from './Search';
import CadastrarLivro from './CadastrarLivro';

export default function TableBody() {
    const [livrosAPI, setLivrosAPI] = useState([]);
    const [busca, setBusca] = useState('');
    const [doc, setDoc] = useState(''); //Recebe uma string de <Search/>
    const [nextValue, setNextValue] = useState();
    const [cadLivros, setCadLivros] = useState();
    const [isbn, setIsbn] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    useEffect(async () => {
        await fetch("/Api/livros_api.json")
            .then(response => response.json())
            .then(data => setLivrosAPI(data))
            .catch(err => console.log(err));
    }, [])

    const getInformation = (doc) => {
        setDoc(doc);
    }

    const cadastrarLivro = (isbn, titulo, autor) =>{
        setIsbn(isbn);
        setTitulo(titulo);
        setAutor(autor);
        livrosAPI.push({id: isbn, titulo: titulo, autor: autor});
    }

    const removeLivro = (id) => {
        const livro = livrosAPI.filter(i => i.id !== id)
        setLivrosAPI(livro);
    }

    useEffect(() => {
        setBusca(doc)
        const val = livrosAPI.filter((value) => value.titulo.toString().toLowerCase().includes(busca) || value.autor.toString().toLowerCase().includes(busca));
        setNextValue(val);
    }, [doc])

    return (
        <div>
            <Search func={getInformation}></Search>
            {doc === '' ?
                <table>
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(livrosAPI.map((livro, indice) => {
                            return (
                                <tr key={indice} className='tableData'>
                                    <td>{livro.id}</td>
                                    <td><strong>{livro.titulo}</strong></td>
                                    <td>{livro.autor}</td>
                                    <td>
                                        <div className='t-btn'>
                                            <button onClick={() => removeLivro(livro.id)}>Remover</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }))
                        }
                        <CadastrarLivro getAPI={livrosAPI} func={cadastrarLivro}/>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'><h3>Todos os direitos reservados</h3></td>
                        </tr>
                    </tfoot>
                </table>
                :
                <table>
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(nextValue.map((livro, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>
                                        <div className='t-btn'>
                                            <button onClick={() => removeLivro(livro.id)}>Remover</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'><h3>Todos os direitos reservados</h3></td>
                        </tr>
                    </tfoot>
                </table>
            }
        </div>
    )
}