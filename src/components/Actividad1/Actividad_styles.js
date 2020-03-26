import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.fondo-correo{
    width: 58.06em;
    height: 27.125em;
    background-image: url(./src/bg-mail.png);
    background-repeat: no-repeat;
    background-position:0 0;
    background-size: contain;
    font-size:0.95em;
    position: relative;
    color: ${Ilex.textos};
}


.to,.subject,.content{
    width: 80%;
    margin:0 auto;
    font-size: 0.8em;
    padding: 1em;
}
.label{
    font-weight:bold;
    margin-right:1em;
}
.to{
    margin-top:3.5em;
    .mail{
        color: ${Ilex.violeta2};
        font-weight:medium;
    }
}

.box{
    border:1px dashed ${Ilex.color_gris_input};
    box-sizing:border-box;
    display: block;
    border-radius: 0.5em;
    margin-bottom: 1em;
    margin-left: 2em;
    padding: 0.5em;
    box-shadow: 0 0.5em 0 0 rgba(0,0,0,0.2);
}
.pyramid{
    margin-left: -10em;
    transform: scale(0.8) translate(-2em, -3em);
}
.input-right{
    margin-left:8em;
}
.button-info{
    margin-bottom: 2em;
     
}
.check{
    margin-left: 68.8em;
    margin-top: -6.8em;
}

`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;
    flex-wrap: wrap;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em 0;
`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}