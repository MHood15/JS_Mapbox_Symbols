import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import star from "./Star.png"
import './App.css';

const styles = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFsZXNhbXBsZSIsImEiOiJja2dnc2VlMHQwbjFjMnJvOGIwdnhwY3U0In0.KJBAVBAXWZL6IgmhytTHIw";

    const initializeMap = ({ setMap, mapContainer }) => {

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/dalesample/ckggsg9zm00bi19p7w7amcag0", // stylesheet location
        center: [-66, 44],
        zoom: 5,
      });

      map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right', unit: 'imperial'}));
      map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right', unit: 'nautical'}));
      map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right'}));


      new mapboxgl.Marker().setLngLat([-68.5, 45.5]).setRotation(90).addTo(map);

      
      var star = document.createElement('div');
      star.className = 'star';
      new mapboxgl.Marker(star).setLngLat([-70, 42]).setRotation(30).addTo(map);


      var triangle = document.createElement('div');
      triangle.className = 'triangle';
      new mapboxgl.Marker(triangle).setLngLat([-75, 40]).setRotation(120).addTo(map);

    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;

/*
map.addSource("maine", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-67.13734351262877, 45.137451890638886],
                  [-66.96466, 44.8097],
                  [-68.03252, 44.3252],
                  [-69.06, 43.98],
                  [-70.11617, 43.68405],
                  [-70.64573401557249, 43.090083319667144],
                  [-70.75102474636725, 43.08003225358635],
                  [-70.79761105007827, 43.21973948828747],
                  [-70.98176001655037, 43.36789581966826],
                  [-70.94416541205806, 43.46633942318431],
                  [-71.08482, 45.3052400000002],
                  [-70.6600225491012, 45.46022288673396],
                  [-70.30495378282376, 45.914794623389355],
                  [-70.00014034695016, 46.69317088478567],
                  [-69.23708614772835, 47.44777598732787],
                  [-68.90478084987546, 47.184794623394396],
                  [-68.23430497910454, 47.35462921812177],
                  [-67.79035274928509, 47.066248887716995],
                  [-67.79141211614706, 45.702585354182816],
                  [-67.13734351262877, 45.137451890638886],
                ],
              ],
            },
          },
        });

        map.addLayer({
          id: "maine",
          type: "fill",
          source: "maine",
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
          },
        });
*/