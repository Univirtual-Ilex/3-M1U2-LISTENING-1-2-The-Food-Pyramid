import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
margin: ${props => props.m || 0}em;
/*width:${props => props.w ? props.w+'em' : '100%'};*/
.input-words {
    padding: ${props => props.p || 0 + 'em'};
}
`

export const Input = styled.input`
border-bottom:1px solid ${Ilex.color_gris_input};
/*padding: 0.1em 0.6em;*/
box-sizing:border-box;
display: block;
font-family:${Ilex.font};
font-size:1em;
color:${Ilex.textos};
font-weight:bold;
width:100%;
&.ok{
    border-bottom:0.1em solid ${Ilex.verde};
}
&.err{
    border-bottom:0.1em solid ${Ilex.color_rojo};
}

`

export default styles
    