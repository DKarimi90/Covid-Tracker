import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet"
//import "./Map.css" ;
import { showDataOnMap } from "./Util";
import "./map.css";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}
export default Map;
