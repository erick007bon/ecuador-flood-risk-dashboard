'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface Parroquia {
  riesgo: string;
}

interface RiskChartProps {
  data: Parroquia[];
}

export default function RiskChart({ data }: RiskChartProps) {
  const riskCounts = {
    Bajo: data.filter(p => p.riesgo === 'Bajo').length,
    Medio: data.filter(p => p.riesgo === 'Medio').length,
    Alto: data.filter(p => p.riesgo === 'Alto').length
  };

  const chartData = [
    { name: 'Bajo', value: riskCounts.Bajo, color: '#22c55e' },
    { name: 'Medio', value: riskCounts.Medio, color: '#eab308' },
    { name: 'Alto', value: riskCounts.Alto, color: '#ef4444' }
  ].filter(item => item.value > 0);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
