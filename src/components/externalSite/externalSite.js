import React from 'react';
import './externalSite.css'

function ExternalSiteEmbed() {
  return (
    <div>
      <iframe
        title="Conteúdo Externo"
        src="https://rancho030.com.br/" // Substitua com a URL do site que deseja incorporar
        width="1472"
        height="600"
      ></iframe>
    </div>
  );
}

export default ExternalSiteEmbed;
