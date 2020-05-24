import React from 'react';
import './style.css';

function contato() {
  return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div>
                    <h2>CONTATE-NOS</h2>
                    <p>EM CASO DE DÚVIDAS</p>
                </div>
                <div>
                    <input type="text" name="" id="" placeHolder="Nome"/>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder="Assunto"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem aqui..">
                    </textarea>
                </div>
            </div>
        </div>
    </div>
  );
}

export default contato;