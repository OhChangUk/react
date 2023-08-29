import React from 'react'
import { styled } from 'styled-components'

const Style = styled.div `
    background-color: orange;
    font-size: 27px;
    ul{
        max-width: 1200px;
        margin:0 auto;
        display: flex;
        justify-content:space-between;
    }
`

function Styled() {
    let Menu = ["메뉴1","메뉴2","메뉴3","메뉴4","메뉴5"]
  return (
    <Style>
        <ul>
            {
                Menu.map((el,i)=>{
                    return( 
                        <li className='text-center' key={i}>{el}</li>
                    )
                }) // 반복문은 중괄호
            }
        </ul>
    </Style>
  )
}

export default Styled