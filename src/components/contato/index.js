import React from 'react';
import './style.css';

const BACKGROUND_COLOR = {
    backgroundImage: `url(https://img.redbull.com/images/c_crop,x_505,y_0,h_3620,w_4827/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/10/19/1331824597214_2/pedro-barros-5-for-5)`, 
    backgroundSize: '900px',
  }

function contato() {
  return (
    <div className="container pas__vertical-space-60">
        <div className="row">
            <div className="col-md-6" style={BACKGROUND_COLOR}/>
            <div className="col-md-6 bg-light text-center pas__vertical-space-60 pas__horizontal-space-60">
                <div>
                    <h4>
                        <strong>CONTATE-NOS</strong>
                    </h4>
                    <p>EM CASO DE DÚVIDAS</p>
                </div>
                <div>
                    <input className="pas__form" type="text" name="" id="" placeholder="Nome"/>
                </div>
                <div>
                    <input className="pas__form" type="text" name="" id="" placeholder="Assunto"/>
                </div>
                <div>
                    <textarea className="pas__form pas__textarea" name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem aqui..">
                    </textarea>
                </div>
                <div>
                    <button className="btn btn-dark btn-block">ENVIAR</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default contato;