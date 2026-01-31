'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import StatsCards from '@/components/StatsCards';
import RiskChart from '@/components/RiskChart';
import TemporalChart from '@/components/TemporalChart';
import FilterPanel from '@/components/FilterPanel';
import PredictionPanel from '@/components/PredictionPanel';

// Importar mapa dinámicamente (solo en cliente)
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Cargando mapa...</div>
});

interface Parroquia {
  codigo: string;
  nombre: string;
  provincia: string;
  lat: number;
  lon: number;
  tipo_zona: number;
  altitud: number;
  precip_promedio: number;
  riesgo: string;
  pct_alto: number;
  pct_medio: number;
  pct_bajo: number;
}

export default function Home() {
  const [parroquias, setParroquias] = useState<Parroquia[]>([]);
  const [filteredData, setFilteredData] = useState<Parroquia[]>([]);
  const [selectedProvincia, setSelectedProvincia] = useState<string>('Todas');
  const [selectedRiesgo, setSelectedRiesgo] = useState<string[]>(['Bajo', 'Medio', 'Alto']);
  const [loading, setLoading] = useState(true);

  // Cargar datos
  useEffect(() => {
    fetch('/data/parroquias.json')
      .then(res => res.json())
      .then(data => {
        setParroquias(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando datos:', err);
        setLoading(false);
      });
  }, []);

  // Filtrar datos
  useEffect(() => {
    let filtered = parroquias;

    if (selectedProvincia !== 'Todas') {
      filtered = filtered.filter(p => p.provincia === selectedProvincia);
    }

    if (selectedRiesgo.length > 0) {
      filtered = filtered.filter(p => selectedRiesgo.includes(p.riesgo));
    }

    setFilteredData(filtered);
  }, [selectedProvincia, selectedRiesgo, parroquias]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-blue-600">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            🌊 Dashboard de Riesgo de Inundación - Ecuador
          </h1>
          <p className="text-gray-600 mt-2">
            Análisis de {parroquias.length.toLocaleString()} parroquias | Período 2020-2024 | Machine Learning
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <StatsCards data={filteredData} />

        {/* Filtros */}
        <FilterPanel
          parroquias={parroquias}
          selectedProvincia={selectedProvincia}
          setSelectedProvincia={setSelectedProvincia}
          selectedRiesgo={selectedRiesgo}
          setSelectedRiesgo={setSelectedRiesgo}
        />

        {/* Tabs */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 font-semibold">
                  🗺️ Mapa Interactivo
                </button>
              </nav>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Mapa */}
                <div className="lg:col-span-2">
                  <MapComponent data={filteredData} />
                </div>

                {/* Gráfico de Riesgo */}
                <div>
                  <h3 className="text-xl font-bold mb-4">📊 Distribución de Riesgo</h3>
                  <RiskChart data={filteredData} />
                  
                  <div className="mt-6 space-y-3">
                    {['Bajo', 'Medio', 'Alto'].map(riesgo => {
                      const count = filteredData.filter(p => p.riesgo === riesgo).length;
                      const pct = ((count / filteredData.length) * 100).toFixed(1);
                      const icon = riesgo === 'Bajo' ? '🟢' : riesgo === 'Medio' ? '🟡' : '🔴';
                      
                      return (
                        <div key={riesgo} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold">{icon} {riesgo}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">{count.toLocaleString()}</span>
                            <span className="text-sm text-gray-500">({pct}%)</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Gráficos adicionales */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-4">📈 Top 10 Parroquias - Alto Riesgo</h3>
                  <TopParroquiasChart data={filteredData} />
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-4">📅 Evolución Temporal</h3>
                  <TemporalChart />
                </div>
              </div>

              {/* Predicción */}
              <div className="mt-8">
                <PredictionPanel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg">Dashboard de Riesgo de Inundación - Ecuador</p>
          <p className="text-gray-400 mt-2">
            Desarrollado por <span className="text-blue-400">Erick Reinaldo Flores Zambrano</span> | Universidad de Guayaquil
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Tecnologías: Next.js, TypeScript, Tailwind CSS, Leaflet, Recharts
          </p>
          <p className="text-gray-500 text-sm">
            Datos: CHIRPS/NASA (Precipitación) | INEC (Parroquias) | 2020-2024
          </p>
        </div>
      </footer>
    </main>
  );
}

// Componente auxiliar para Top Parroquias
function TopParroquiasChart({ data }: { data: Parroquia[] }) {
  const topParroquias = data
    .filter(p => p.riesgo === 'Alto')
    .sort((a, b) => b.pct_alto - a.pct_alto)
    .slice(0, 10);

  return (
    <div className="space-y-2">
      {topParroquias.map((p, i) => (
        <div key={p.codigo} className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-500 w-6">{i + 1}</span>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-semibold truncate">{p.nombre}</span>
              <span className="text-sm text-gray-600">{p.pct_alto.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${p.pct_alto}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
