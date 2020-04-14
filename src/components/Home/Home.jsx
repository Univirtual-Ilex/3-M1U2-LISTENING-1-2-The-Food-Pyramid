import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import ButtonX from '../ButtonX'
import estilos_home from './Home_styles'
import {ButtonLink} from '../ButtonX'


const Home_base = function ({staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo entrada-top-Y-3'>
                        <div className='bloque-izquierdo-container'>
                            <h1> The food pyramid</h1>
                            <p>
                            Listen to the description of the food pyramid and identify the information about each section of the diagram. Then, complete the sentences with the correct word you listen to.
                            </p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-2'>
                        <figure className="cover">  
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home