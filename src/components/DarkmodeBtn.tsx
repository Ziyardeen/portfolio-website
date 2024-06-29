import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DarkBtn = styled.button`
    background-color: #d6f7d6;
    width: none;width:100px;
    min-height:50px;
    text-align:center;
    margin:0 20px;

    &:hover{
        background-color: white;
    }

    @media (max-width: 768px) {
    margin:20px 0;
  }
`

const DarkmodeBtn = () => {
    const [darkMode, setDarkmode] = useState(() => {
      const mode = localStorage.getItem('dark-mode')
      return mode? JSON.stringify(mode):false
    })

    useEffect(() => {
        darkMode? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));
      }, [darkMode]);

  return (
    <DarkBtn onClick={()=>setDarkmode(prev =>!prev)}>
         {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </DarkBtn>
  )
}

export default DarkmodeBtn