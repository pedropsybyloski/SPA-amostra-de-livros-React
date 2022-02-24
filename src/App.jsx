import { useState } from 'react';
import './App.css';
import TableBody from './components/TableBody';

function App() {

  return (
    <div className='content'>
      <header>
        <h1>Tabela de livros</h1>
      </header>
        <TableBody></TableBody>
    </div>
  )
}

export default App
