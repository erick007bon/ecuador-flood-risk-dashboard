interface Parroquia {
  riesgo: string;
  precip_promedio: number;
  pct_alto: number;
}

interface StatsCardsProps {
  data: Parroquia[];
}

export default function StatsCards({ data }: StatsCardsProps) {
  const totalParroquias = data.length;
  const precipPromedio = data.reduce((sum, p) => sum + p.precip_promedio, 0) / data.length;
  const altoRiesgo = data.filter(p => p.riesgo === 'Alto').length;
  const pctAlto = ((altoRiesgo / totalParroquias) * 100).toFixed(1);

  const stats = [
    {
      title: 'Parroquias',
      value: totalParroquias.toLocaleString(),
      icon: '🏘️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Precipitación Promedio',
      value: `${precipPromedio.toFixed(1)} mm`,
      icon: '🌧️',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      title: 'Alto Riesgo',
      value: `${pctAlto}%`,
      subtitle: `${altoRiesgo.toLocaleString()} casos`,
      icon: '⚠️',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Período',
      value: '2020-2024',
      subtitle: '5 años',
      icon: '📅',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-4xl">{stat.icon}</span>
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white font-bold text-xl`}>
              {index + 1}
            </div>
          </div>
          <h3 className="text-gray-600 text-sm font-semibold mb-2">{stat.title}</h3>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          {stat.subtitle && (
            <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
          )}
        </div>
      ))}
    </div>
  );
}
