'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';

interface Parroquia {
  codigo: string;
  nombre: string;
  provincia: string;
  lat: number;
  lon: number;
  riesgo: string;
  precip_promedio: number;
  pct_alto: number;
}

interface MapComponentProps {
  data: Parroquia[];
}

export default function MapComponent({ data }: MapComponentProps) {
  const center: [number, number] = [-1.5, -78.5];

  const getColor = (riesgo: string) => {
    switch (riesgo) {
      case 'Bajo': return '#22c55e';
      case 'Medio': return '#eab308';
      case 'Alto': return '#ef4444';
      default: return '#6b7280';
    }
  };

  // Optimizar renderizado con useMemo
  const markers = useMemo(() => {
    // Limitar a 200 marcadores para rendimiento
    const sample = data.length > 200 
      ? data.sort(() => 0.5 - Math.random()).slice(0, 200)
      : data;

    return sample.map((p) => (
      <CircleMarker
        key={p.codigo}
        center={[p.lat, p.lon]}
        radius={8}
        fillColor={getColor(p.riesgo)}
        color="#fff"
        weight={2}
        opacity={1}
        fillOpacity={0.8}
      >
        <Popup>
          <div className="p-2">
            <h3 className="font-bold text-lg">{p.nombre}</h3>
            <p className="text-sm text-gray-600">Provincia: {p.provincia}</p>
            <p className="text-sm mt-2">
              <span className={`font-bold ${
                p.riesgo === 'Alto' ? 'text-red-600' :
                p.riesgo === 'Medio' ? 'text-yellow-600' :
                'text-green-600'
              }`}>
                Riesgo: {p.riesgo}
              </span>
            </p>
            <p className="text-sm">Precipitación: {p.precip_promedio.toFixed(1)} mm</p>
            <p className="text-sm">% Alto Riesgo: {p.pct_alto.toFixed(1)}%</p>
          </div>
        </Popup>
      </CircleMarker>
    ));
  }, [data]);

  return (
    <div className="h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
      <MapContainer
        center={center}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>

      {/* Leyenda */}
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-[1000]">
        <h4 className="font-bold mb-2">Nivel de Riesgo</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm">Bajo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Medio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm">Alto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
