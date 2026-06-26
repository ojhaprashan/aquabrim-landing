
import React from 'react';

const MapArea = () => {
  return (
    <>
   <div className="map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <iframe
              src="https://www.google.com/maps?q=Aquabrim%20Pvt.%20Ltd.%2C%20Plot%20no.%2035%2C%20Union%20Bank%20of%20India%20Building%2C%20100%20Feet%20Road%2C%20Ghitorni%2C%20New%20Delhi%20110030&output=embed"
              width="1920"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Aquabrim Pvt. Ltd. location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapArea;