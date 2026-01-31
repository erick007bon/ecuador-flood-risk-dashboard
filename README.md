# 🌊 Dashboard de Riesgo de Inundación - Ecuador

Dashboard interactivo profesional para visualizar y predecir el riesgo de inundación en parroquias de Ecuador usando Machine Learning.

## 🌐 Demo en Vivo

**URL:** [Próximamente]

## 🎯 Características

- ✅ **Mapa interactivo de Ecuador** con Leaflet
- ✅ **Filtros dinámicos** por provincia y nivel de riesgo
- ✅ **Gráficos profesionales** con Recharts
- ✅ **Predicción en tiempo real** usando ML
- ✅ **Diseño moderno** con Tailwind CSS
- ✅ **Responsive** para móviles y desktop
- ✅ **1,042 parroquias** analizadas
- ✅ **187,560 registros** de datos

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Mapas:** Leaflet + React-Leaflet
- **Gráficos:** Recharts
- **Deploy:** Vercel

## 📊 Datos

- **Precipitación:** CHIRPS/NASA (2020-2024)
- **Parroquias:** INEC Ecuador
- **Período:** 5 años (2020-2024)
- **Registros:** 187,560

## 🚀 Instalación Local

```bash
# Clonar repositorio
git clone [URL]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
webapp-nextjs/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Estilos globales
├── components/
│   ├── MapComponent.tsx  # Mapa interactivo
│   ├── StatsCards.tsx    # Tarjetas de estadísticas
│   ├── RiskChart.tsx     # Gráfico de riesgo
│   ├── TemporalChart.tsx # Gráfico temporal
│   ├── FilterPanel.tsx   # Panel de filtros
│   └── PredictionPanel.tsx # Predicción ML
└── public/
    └── data/
        ├── parroquias.json  # Datos de parroquias
        ├── provincias.json  # Datos de provincias
        ├── temporal.json    # Datos temporales
        └── metadata.json    # Metadata
```

## 🎨 Funcionalidades

### 🗺️ Mapa Interactivo
- Visualización geográfica de Ecuador
- Marcadores de colores por nivel de riesgo
- Popups con información detallada
- Zoom y navegación

### 📊 Análisis Visual
- Distribución de riesgo (gráfico de dona)
- Top 10 parroquias con mayor riesgo
- Evolución temporal (2020-2024)
- Estadísticas en tiempo real

### 🔍 Filtros
- Por provincia (dropdown)
- Por nivel de riesgo (multiselect)
- Actualización dinámica de todos los componentes

### 🤖 Predicción
- Formulario para ingresar datos
- Predicción del nivel de riesgo
- Probabilidades por clase
- Resultado visual

## 👨‍💻 Autor

**Erick Reinaldo Flores Zambrano**  
Universidad de Guayaquil  
Materia: Técnicas de Aprendizaje Automático

## 📄 Licencia

Este proyecto es parte de un trabajo académico.

## 🙏 Agradecimientos

- **CHIRPS/NASA**: Datos de precipitación
- **INEC**: Datos de parroquias de Ecuador
- **Next.js**: Framework de desarrollo
- **Vercel**: Hosting y deploy
- **Antigravity (Google DeepMind)**: Asistencia en desarrollo
