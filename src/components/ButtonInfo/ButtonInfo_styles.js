import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
button{
    background-color: ${Ilex.color_rosa_radios};
    display: flex;
    align-items: center;
    font-family: ${Ilex.titulos};
    font-size: 0.7em;
    padding: 1em;
    border-radius:0.8em;
    box-shadow: 0 0.6em 0 0 rgba(0,0,0,0.2);
    width: 21.5em;
    cursor: pointer;
    transition: background  0.3s ease-in-out;
    &:hover{
        .img{
            background-image: url(./src/bocina_hover.png);
        }
        box-shadow: 0 0.8em 0 0 ${Ilex.verde};


    }
    span {
        color: #fff;
        display: inline-block;
        text-transform: uppercase;
        .img{
            background-image: url(./src/bocina.png);
            background-size: contain;
            background-repeat: no-repeat;
            margin-right: 0.35em;
            width: 2.5em;
            height: 2.5em;
            
        }
    }
}
`

export default styles
    