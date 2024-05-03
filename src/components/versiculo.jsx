import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../stylesheet/versiculo.css'
import { useState } from 'react'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {changeVersiculo} from '../redux/versiculoSlice.js'
import {versiculos} from '../Versiculos/vs.js'
import CopyToClipboard from 'react-copy-to-clipboard'

function Versiculo () {

    const[copiado, setCopiado] = useState('')

    const versiculo = useSelector((state) => state.versiculo)

    const dispatch = useDispatch();

    const cambiarVS = () => {
        let min = 1
        let max = 53
        let num = Math.floor(Math.random()*(max-min+1)+min)
        if(num < 5) {
            document.getElementById('quote-box').className ='card color1'
            document.getElementById('card-body').className = 'card-body color1'
            document.getElementById('App').className = 'App d-flex bgColor1'
            document.getElementById('new-quote').className = 'btn cambiar color1'
            document.getElementById('copiar').className='bi bi-copy copiar color1'
            document.getElementById('tweet-quote').className='color1'
        }
        else if(num <10){
            document.getElementById('quote-box').className ='card color2'
            document.getElementById('card-body').className = 'card-body color2'
            document.getElementById('App').className = 'App d-flex bgColor2'
            document.getElementById('new-quote').className = 'btn cambiar color2'
            document.getElementById('copiar').className='bi bi-copy copiar color2'
            document.getElementById('tweet-quote').className='color2'
        }
        else if(num <15){
            document.getElementById('quote-box').className ='card color3'
            document.getElementById('card-body').className = 'card-body color3'
            document.getElementById('App').className = 'App d-flex bgColor3'
            document.getElementById('new-quote').className = 'btn cambiar color3'
            document.getElementById('copiar').className='bi bi-copy copiar color3'
            document.getElementById('tweet-quote').className='color3'
        }
        else if(num <20){
            document.getElementById('quote-box').className ='card color4'
            document.getElementById('card-body').className = 'card-body color4'
            document.getElementById('App').className = 'App d-flex bgColor4'
            document.getElementById('new-quote').className = 'btn cambiar color4'
            document.getElementById('copiar').className='bi bi-copy copiar color4'
            document.getElementById('tweet-quote').className='color4'
        }
        else if(num <25){
            document.getElementById('quote-box').className ='card color5'
            document.getElementById('card-body').className = 'card-body color5'
            document.getElementById('App').className = 'App d-flex bgColor5'
            document.getElementById('new-quote').className = 'btn cambiar color5'
            document.getElementById('copiar').className='bi bi-copy copiar color5'
            document.getElementById('tweet-quote').className='color5'
        }
        else if(num <30){
            document.getElementById('quote-box').className ='card color6'
            document.getElementById('card-body').className = 'card-body color6'
            document.getElementById('App').className = 'App d-flex bgColor6'
            document.getElementById('new-quote').className = 'btn cambiar color6'
            document.getElementById('copiar').className='bi bi-copy copiar color6'
            document.getElementById('tweet-quote').className='color6'
        }
        else if(num <35){
            document.getElementById('quote-box').className ='card color7'
            document.getElementById('card-body').className = 'card-body color7'
            document.getElementById('App').className = 'App d-flex bgColor7'
            document.getElementById('new-quote').className = 'btn cambiar color7'
            document.getElementById('copiar').className='bi bi-copy copiar color7'
            document.getElementById('tweet-quote').className='color7'
        }
        else if(num <40){
            document.getElementById('quote-box').className ='card color8'
            document.getElementById('card-body').className = 'card-body color8'
            document.getElementById('App').className = 'App d-flex bgColor8'
            document.getElementById('new-quote').className = 'btn cambiar color8'
            document.getElementById('copiar').className='bi bi-copy copiar color8'
            document.getElementById('tweet-quote').className='color8'
        }
        else if(num <45){
            document.getElementById('quote-box').className ='card color9'
            document.getElementById('card-body').className='card-body color9'
            document.getElementById('App').className = 'App d-flex bgColor9'
            document.getElementById('new-quote').className = 'btn cambiar color9'
            document.getElementById('copiar').className='bi bi-copy copiar color9'
            document.getElementById('tweet-quote').className='color9'
        }
        else if(num <=50){
            document.getElementById('quote-box').className ='card color10'
            document.getElementById('card-body').className='card-body color10'
            document.getElementById('App').className = 'App d-flex bgColor10'
            document.getElementById('new-quote').className = 'btn cambiar color10'
            document.getElementById('copiar').className='bi bi-copy copiar color10'
            document.getElementById('tweet-quote').className='color10'
        }
        setCopiado('')
        dispatch(changeVersiculo(versiculos.find(versiculo => versiculo.id === num)))
    }

    const copied = () => {
        document.getElementById('copiar').className ='copiar'
        setCopiado('Copiado')
    }

    return (
        <div className='card' id="quote-box">
            <div className='card-header'>
                <p id='author'>{versiculo.cita}</p>
                <CopyToClipboard text={versiculo.cita + '  ' + versiculo.texto}><i onClick={copied} class='bi bi-copy copiar' id='copiar'>{copiado}</i></CopyToClipboard>
            </div>
            <div className='card-body' id='card-body'>
                <blockquote className='blockquote mb-0'>
                <p id='text' className='versiculo'>{versiculo.texto}</p>
                </blockquote>
                <div className='botones container d-flex'>
                    <a className='tweet' rel='noreferrer' id='tweet-quote' target='_blank' href='https://twitter.com/intent/tweet'><i class='bi bi-twitter-x'></i></a>
                    <button className='btn cambiar' id='new-quote' onClick={cambiarVS}>Cambiar</button>
                </div>
            </div>
        </div>
    )
}

export default Versiculo