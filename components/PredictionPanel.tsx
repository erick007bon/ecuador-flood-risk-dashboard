'use client';

import { useState } from 'react';

export default function PredictionPanel() {
  const [formData, setFormData] = useState({
    precipitacion: 50,
    latitud: -1.0,
    longitud: -78.5,
    altitud: 500,
    tipoZona: 'Rural'
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [probabilities, setProbabilities] = useState<any>(null);

  const handlePredict = () => {
    // Lógica simple de predicción basada en reglas
    const { precipitacion, altitud } = formData;
    
    let riesgo = 'Bajo';
    let probs = { Bajo: 70, Medio: 20, Alto: 10 };

    if (precipitacion > 150 && altitud < 1000) {
      riesgo = 'Alto';
      probs = { Bajo: 10, Medio: 20, Alto: 70 };
    } else if (precipitacion > 100 || altitud < 500) {
      riesgo = 'Medio';
      probs = { Bajo: 30, Medio: 50, Alto: 20 };
    }

    setPrediction(riesgo);
    setProbabilities(probs);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🤖 Predicción de Riesgo en Tiempo Real
      </h2>
      <p className="text-gray-600 mb-6">
        💡 Ingresa los datos de una ubicación para predecir su nivel de riesgo de inundación.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Formulario */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Precipitación (mm)
            </label>
            <input
              type="number"
              value={formData.precipitacion}
              onChange={(e) => setFormData({ ...formData, precipitacion: Number(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              min="0"
              max="1000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Latitud
              </label>
              <input
                type="number"
                value={formData.latitud}
                onChange={(e) => setFormData({ ...formData, latitud: Number(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Longitud
              </label>
              <input
                type="number"
                value={formData.longitud}
                onChange={(e) => setFormData({ ...formData, longitud: Number(e.target.value) })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Altitud (msnm)
            </label>
            <input
              type="number"
              value={formData.altitud}
              onChange={(e) => setFormData({ ...formData, altitud: Number(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              min="0"
              max="6000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Zona
            </label>
            <select
              value={formData.tipoZona}
              onChange={(e) => setFormData({ ...formData, tipoZona: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            >
              <option value="Rural">Rural</option>
              <option value="Urbana">Urbana</option>
            </select>
          </div>

          <button
            onClick={handlePredict}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
          >
            🔮 Predecir Riesgo
          </button>
        </div>

        {/* Resultado */}
        <div>
          {prediction ? (
            <div className="space-y-4">
              <div className={`p-6 rounded-lg text-center ${
                prediction === 'Alto' ? 'bg-red-100 border-4 border-red-500' :
                prediction === 'Medio' ? 'bg-yellow-100 border-4 border-yellow-500' :
                'bg-green-100 border-4 border-green-500'
              }`}>
                <h3 className="text-2xl font-bold mb-2">
                  {prediction === 'Alto' ? '🔴' : prediction === 'Medio' ? '🟡' : '🟢'}
                  {' '}Nivel de Riesgo: {prediction}
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold mb-4">📊 Probabilidades por Clase</h4>
                <div className="space-y-3">
                  {Object.entries(probabilities).map(([riesgo, prob]: [string, any]) => (
                    <div key={riesgo}>
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold">{riesgo}</span>
                        <span className="text-gray-600">{prob}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            riesgo === 'Alto' ? 'bg-red-500' :
                            riesgo === 'Medio' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${prob}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-white rounded-lg shadow p-6">
              <p className="text-gray-400 text-center">
                Completa el formulario y presiona "Predecir Riesgo" para ver los resultados
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
