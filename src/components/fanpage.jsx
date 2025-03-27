import React from 'react';

const FacebookPagePlugin = () => {
  const pageUrl = 'https://www.facebook.com/semadd4';
  const encodedPageUrl = encodeURIComponent(pageUrl);

  return (
    <div style={{ backgroundColor: '#22315E' }}>
    <div className="container py-4" >
      <div className="row align-items-center">
        {/* Columna 1: Invitación */}
        <div className="col-md-6 text-center mb-3">
          <h2 className='text-white'>¡Síguenos en Facebook!</h2>
          <p className='text-white'> 
            Únete a nuestra comunidad para estar al día con nuestras últimas noticias,
            promociones y contenido exclusivo.
          </p>
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visítanos
          </a>
        </div>

        {/* Columna 2: Plugin de Facebook */}
        <div className="col-md-6 text-center">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodedPageUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
            width="900"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Facebook Page Plugin"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FacebookPagePlugin;
