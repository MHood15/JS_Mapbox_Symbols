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

const MapboxGLMap2 = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFsZXNhbXBsZSIsImEiOiJja2dnc2VlMHQwbjFjMnJvOGIwdnhwY3U0In0.KJBAVBAXWZL6IgmhytTHIw";

    const initializeMap = ({ setMap, mapContainer }) => {

        var places = {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'properties': {
                'description': "Ford's Theater",
                'icon': star
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.038659, 38.931567]
            }
            },

            {
            'type': 'Feature',
            'properties': {
                'description': 'The Gaslight',
                'icon': 'theatre'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.003168, 38.894651]
            }
            },

            {
            'type': 'Feature',
            'properties': {
                'description': "Horrible Harry's",
                'icon': 'bar'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.090372, 38.881189]
            }
            },

            {
            'type': 'Feature',
            'properties': {
                'description': 'Bike Party',
                'icon': 'bicycle'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.052477, 38.943951]
            }
            },

            {
            'type': 'Feature',
            'properties': {
            'description': 'Rockabilly Rockstars',
            'icon': 'music'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.031706, 38.914581]
            }
            },

            ]
            };

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/dalesample/ckggsg9zm00bi19p7w7amcag0", // stylesheet location
        center: [-66, 44],
        zoom: 5,
      });

      map.on('load', function () {
        // Add a GeoJSON source containing place coordinates and information.
        map.addSource('places', {
        'type': 'geojson',
        'data': places
        });
         
        map.addLayer({
        'id': 'poi-labels',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'text-field': ['get', 'description'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
            'icon-image': ['concat', ['get', 'icon'], '100'],          
        }
        });
         
        });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap2;
