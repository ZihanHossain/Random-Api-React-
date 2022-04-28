import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapComponent = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyARrCGPsRxdsVgcEQDIcRHIYpi0LTquaks" }}
        defaultCenter={[23.7263, 90.4318]}
        defaultZoom={25}
      >
        <AnyReactComponent lat={23.7263} lng={90.4318} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
