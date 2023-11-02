import React from 'react';
import ExternalSiteEmbed from '../externalSite/externalSite';
import SocialMedia from '../socialmedia/socialmedia';
import Footer from '../footer/footer';


function NewPage() {
  return (
    <div>
        <ExternalSiteEmbed />
        <SocialMedia />
        <Footer />
    </div>
  );
}

export default NewPage;
