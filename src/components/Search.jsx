import React from 'react';

export default function Search(props) {
  const cb = props.func;  

  return (
    <div className='search'>
      <span className='searchText'>Pesquisar: </span>
      <input className='searchInput' type="text" placeholder='Pesquisar livro/autor' onChange={e=> cb(e.currentTarget.value)} />
    </div>
  )
}
