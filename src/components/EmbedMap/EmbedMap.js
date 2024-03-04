import React from "react";

import "components/EmbedMap/EmbedMap";

function EmbedMap() {
  return (
    <iframe
      title="Técnico Taguspark campus location"
      className="map"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP9iBr7DPHg0RjG0a1G6GYlY&zoom=11&key=AIzaSyCIDLpBalS_WA1PTlJSwWo5nFRHDqcg0XU"
    ></iframe>
  );
}

export default EmbedMap;
