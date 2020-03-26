import React, {useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonInfo from '../ButtonInfo'

// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import { Olist } from './Actividad_styles'
import { Item } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import Data from './Actividad_data'
import InputWords from '../InputWords'
import ButtonCheck from '../ButtonCheck'
import Modal from '../Generales/Modal'






const Actividad_base =  ({staticContext, ...props}) => {

    const [okInput0, setInput0] = useState(false)
    const [okInput1, setInput1] = useState(false)
    const [okInput2, setInput2] = useState(false)
    const [okInput3, setInput3] = useState(false)
    const [okInput4, setInput4] = useState(false)
    const [okInput5, setInput5] = useState(false)
    const [okInput6, setInput6] = useState(false)
    const [okInput7, setInput7] = useState(false)
    const [okInput8, setInput8] = useState(false)
    const [okInput9, setInput9] = useState(false)
    const [okInput10, setInput10] = useState(false)
    const [okInput11, setInput11] = useState(false)
    const [okInput12, setInput12] = useState(false)
    const [okInput13, setInput13] = useState(false)
    const [okInput14, setInput14] = useState(false)

    const [errInput0, setErrInput0] = useState(false)
    const [errInput1, setErrInput1] = useState(false)
    const [errInput2, setErrInput2] = useState(false)
    const [errInput3, setErrInput3] = useState(false)
    const [errInput4, setErrInput4] = useState(false)
    const [errInput5, setErrInput5] = useState(false)
    const [errInput6, setErrInput6] = useState(false)
    const [errInput7, setErrInput7] = useState(false)
    const [errInput8, setErrInput8] = useState(false)
    const [errInput9, setErrInput9] = useState(false)
    const [errInput10, setErrInput10] = useState(false)
    const [errInput11, setErrInput11] = useState(false)
    const [errInput12, setErrInput12] = useState(false)
    const [errInput13, setErrInput13] = useState(false)
    const [errInput14, setErrInput14] = useState(false)



    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)


    const checkAnswer = (id, text) => {
        var data = Data[id]
        if(text.toLowerCase() === data.answer.toLowerCase()){
            data.right = 1
            eval("setInput" + id)(true)
            eval("setErrInput" + id)(false)
        }else{
            data.right = 0
            eval("setErrInput" + id)(true)
            eval("setInput" + id)(false)
        }
    }

    const checkActivity = () => {
        var count = 0

        Data.map((data) => {
            if(data.right === 1)
                count ++
            else{
                setOk(false)
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setErr(false)
                setModal(true)
            }
        })
    }

    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={43}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Complete the information with the correct words.' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    LISTEN CAREFULLY TO THE INFORMATION AND THEN COMPLETE WITH THE CORRECT WORDS.
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow>
               <ICol w={28} pt={3}>
                  <Olist>                      
                    <Item className="box">The last group is called <InputWords idArr={0} changeCheck={checkAnswer} ok={okInput0} err={errInput0} /> and sugars <InputWords idArr={1} changeCheck={checkAnswer} ok={okInput1} err={errInput1} /> . They <InputWords idArr={2} changeCheck={checkAnswer} ok={okInput2} err={errInput2} /> contain vitamins or minerals</Item>
                    <Item className="box"> The <InputWords idArr={3} changeCheck={checkAnswer} ok={okInput3} err={errInput3} />group and its derivative products are rich source of calcium. It<InputWords idArr={4} changeCheck={checkAnswer} ok={okInput4} err={errInput4} />essential for our bones</Item>
                    <Item className="box"> Fruits give you natural <InputWords idArr={5} changeCheck={checkAnswer} ok={okInput5} err={errInput5} />, fibres and <InputWords idArr={6} changeCheck={checkAnswer} ok={okInput6} err={errInput6} />. Principally vitamin <InputWords idArr={7} changeCheck={checkAnswer} ok={okInput7} err={errInput7} />.</Item>
                  </Olist>
                </ICol>
               <ICol w={15} py={8} px={10}>
                   <img  className="pyramid" src="./src/pyramid.png" alt=""/>
               </ICol>
               <ICol  className="input-right" w={28} pt={1}>
                 <ButtonInfo src={"./media/audio.mp3"} className="button-info">
                     CLICK HERE TO LISTEN THE AUDIO
                     </ButtonInfo>  
                 <Olist>
                    <Item className="box"> The <InputWords idArr={8} changeCheck={checkAnswer} ok={okInput8} err={errInput8} /> group is rich in protein.</Item>                     
                    <Item className="box"> Vegetables contain essential vitamins (<InputWords idArr={9} changeCheck={checkAnswer} ok={okInput9} err={errInput9} /> and <InputWords idArr={10} changeCheck={checkAnswer} ok={okInput10} err={errInput10} />). It is important to eat <InputWords idArr={11} changeCheck={checkAnswer} ok={okInput11} err={errInput11} /> vegetables a <InputWords idArr={12} changeCheck={checkAnswer} ok={okInput12} err={errInput12} />.</Item>
                    <Item className="box"> This group includes breads, cereals, <InputWords idArr={13} changeCheck={checkAnswer} ok={okInput13} err={errInput13} /> and <InputWords idArr={14} changeCheck={checkAnswer} ok={okInput14} err={errInput14} />.</Item>       
                </Olist>
               </ICol>
               <IRow>
                  <ButtonCheck className="check" onClick={checkActivity} ></ButtonCheck>
               </IRow>
               <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} finished={ok} />
            </IRow>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad