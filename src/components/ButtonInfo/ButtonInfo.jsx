
//Import
import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import styles from './ButtonInfo_styles'

// Componente base
const ButtonInfo_base = ({ children, imgUrl, src, ...props}) => {
    const ilxAudio = useRef()
    const [running, playAudio] = useState(false)
    const handleAudio = () => {

        if(!running) {
            ilxAudio.current.play()
            playAudio(true)
        } else {
            ilxAudio.current.pause()
            playAudio(false)
        }

    }
    return (
        <div {...props}>
            <button className="btn-clean" onClick={handleAudio}>
                <span>
                    <div className="img">

                    </div>
                </span>
                <span>
                { children || 'Open'}
                </span>                
            </button>
            <audio ref={ilxAudio} onEnded={handleAudio}>
                <source src={ src }/>
                <span>No se puede reproducir el audio</span>
            </audio>

        </div>
    )
}
const ButtonInfo = styled(ButtonInfo_base)`${ styles }`
export default ButtonInfo
