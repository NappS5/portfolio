import React from 'react';
import ExternalSiteEmbed from '../externalSite/externalSite';
import Footer from '../footer/footer';
import { useEffect } from 'react';



function NewPage() {
  useEffect(() => {
    // Rola a página até o topo quando a Nova Página é carregada
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <ExternalSiteEmbed />
        <Footer />
    </div>
  );
}

export default NewPage;
