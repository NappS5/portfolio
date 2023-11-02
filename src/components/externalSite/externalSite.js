import React from 'react';
import './externalSite.css'

function ExternalSiteEmbed() {
  return (
    <div className='external-container'>
      <div className='exp-container'>
        <h1 className='exp'>Portfólio</h1>
        <p className='description-exp'>Aqui logo abaixo tenho um site que mostra um pouco do meu trabalho com React. Esse é um WebApp onde basicamente,
          você irá poder criar um evento definindo uma data, e um número máximo de pessoas para comparecerem ao mesmo. Depois de criado, você pode
          compartilhar o link do evento criado para seus convidados, para eles preencherem as vagas com seus nomes, quando todas as vagas foreem preenchidas
          irá ser exibida uma mensagem dizendo que o evento está cheio (sugiro copiar o link manualmente, pois estou emulando um site dentro de outro, então
          pode ser que a função de copiar não funcione tão bem aqui).</p>
        <span className='link-exp'>
          Caso queira optar por realmente entrar no site  <a className='link' href="https://rsvp-app-frontend.onrender.com/" target='blank'> Clique aqui </a>
        </span>
      </div>
      <iframe className='site'
        title="Conteúdo Externo"
        src="https://rsvp-app-frontend.onrender.com/" // Substitua com a URL do site que deseja incorporar
        width="1000"
        height="600"
      ></iframe>
    </div>
  );
}

export default ExternalSiteEmbed;
