'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TemporalChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/temporal.json')
      .then(res => res.json())
      .then(temporal => {
        // Agrupar por año
        const byYear: any = {};
        temporal.forEach((item: any) => {
          if (!byYear[item.año]) {
            byYear[item.año] = { año: item.año, Bajo: 0, Medio: 0, Alto: 0 };
          }
          byYear[item.año][item.nivel_riesgo] += item.cantidad;
        });
        setData(Object.values(byYear));
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="año" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Bajo" stroke="#22c55e" strokeWidth={2} />
        <Line type="monotone" dataKey="Medio" stroke="#eab308" strokeWidth={2} />
        <Line type="monotone" dataKey="Alto" stroke="#ef4444" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
