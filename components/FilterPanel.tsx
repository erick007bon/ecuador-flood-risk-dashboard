interface Parroquia {
  provincia: string;
}

interface FilterPanelProps {
  parroquias: Parroquia[];
  selectedProvincia: string;
  setSelectedProvincia: (value: string) => void;
  selectedRiesgo: string[];
  setSelectedRiesgo: (value: string[]) => void;
}

export default function FilterPanel({
  parroquias,
  selectedProvincia,
  setSelectedProvincia,
  selectedRiesgo,
  setSelectedRiesgo
}: FilterPanelProps) {
  const provincias = ['Todas', ...Array.from(new Set(parroquias.map(p => p.provincia))).sort()];

  const toggleRiesgo = (riesgo: string) => {
    if (selectedRiesgo.includes(riesgo)) {
      setSelectedRiesgo(selectedRiesgo.filter(r => r !== riesgo));
    } else {
      setSelectedRiesgo([...selectedRiesgo, riesgo]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🔍 Filtros
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Filtro de Provincia */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📍 Provincia
          </label>
          <select
            value={selectedProvincia}
            onChange={(e) => setSelectedProvincia(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            {provincias.map(prov => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        {/* Filtro de Riesgo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ⚠️ Nivel de Riesgo
          </label>
          <div className="flex gap-3">
            {['Bajo', 'Medio', 'Alto'].map(riesgo => {
              const isSelected = selectedRiesgo.includes(riesgo);
              const colors = {
                Bajo: 'border-green-500 bg-green-50 text-green-700',
                Medio: 'border-yellow-500 bg-yellow-50 text-yellow-700',
                Alto: 'border-red-500 bg-red-50 text-red-700'
              };
              
              return (
                <button
                  key={riesgo}
                  onClick={() => toggleRiesgo(riesgo)}
                  className={`flex-1 px-4 py-3 border-2 rounded-lg font-semibold transition-all ${
                    isSelected
                      ? colors[riesgo as keyof typeof colors]
                      : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {riesgo}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
