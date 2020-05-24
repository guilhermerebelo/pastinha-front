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
            <div className="col-md-6 bg-dark text-light text-center pas__vertical-space-60 pas__horizontal-space-60">
                <h2> 
                  <strong>QUEM SOMOS</strong>
                </h2>
                <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. 
                    É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá
                    adicionar o seu próprio conteúdo e trocar fontes. Sinta-se à vontade para arrastar e
                    soltar em qualquer lugar em sua página. Sou um ótimo lugar para você contar a sua 
                    história.
                </p>
                <p>

                    Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você
                    pode usar esse espaço para detalhar sua empresa. Fale sobre a sua equipe e sobre os 
                    serviços prestados por você. Conte aos seus visitantes sobre como teve a idéia de iniciar
                    o seu negócio e o que o torna diferente de seus competidores. Faça com que sua empresa se
                    destaque e mostre quem você é.
                </p>
            </div>
            <div className="col-md-6" style={BACKGROUND_COLOR}/>
        </div>
    </div>
  );
}

export default contato;