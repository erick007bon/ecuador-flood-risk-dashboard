# 🌊 Flood Risk Intelligence Platform - Ecuador

**Sistema Avanzado de Inteligencia Artificial para el Modelado Estocástico y Clasificación de Riesgo Hidrometeorológico.**

[![Deploy Status](https://img.shields.io/badge/Deploy-Production-success?style=for-the-badge&logo=vercel)](https://webapp-nextjs-ochre.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20TypeScript%20%7C%20Leaflet-blue?style=for-the-badge)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🌐 Acceso a la Plataforma

**URL Oficial:** [**https://webapp-nextjs-ochre.vercel.app**](https://webapp-nextjs-ochre.vercel.app)

> *📱 Diseño Responsive: Plataforma optimizada para visualización en dispositivos móviles y estaciones de trabajo.*

---

## 🔬 Sinopsis del Proyecto

Este proyecto implementa una arquitectura de **Machine Learning de alto rendimiento** para abordar la problemática de las inundaciones en el Ecuador. Utilizando datos satelitales decenales (CHIRPS) y geomorfología de alta precisión, hemos entrenado un algoritmo **Random Forest** capaz de inferir el nivel de riesgo hidrometeorológico con una precisión del **99.68%** sobre un espacio muestral de **187,560 puntos de datos**.

La plataforma integra visualización geoespacial dinámica con inyección de datos en tiempo real, permitiendo a investigadores y tomadores de decisiones evaluar escenarios críticos a nivel parroquial con granularidad fina.

---

## 🧠 Arquitectura & Tecnologías

### Nivel de Datos & Modelado
- **Algoritmo:** Random Forest Classifier (Optimizado para Recall)
- **Métricas de Desempeño:** Accuracy 99.68% | F1-Score ~0.99
- **Espacio de Características (Features):**
  - 🛰️ Precipitación Satelital (CHIRPS/NASA)
  - 🏔️ Altimetría Digital (DEM/NASA SRTM)
  - 🏘️ Contexto Geomoorfológico (Urbano/Rural)
  - 📍 Coordenadas Geoespaciales
- **Volumen de Datos:** 187,560 tensores temporales distribuidos en 1,042 parroquias.

### Nivel de Aplicación (Full Stack)
- **Framework:** Next.js 16 (App Router Architecture)
- **Lenguaje:** TypeScript (Strict Typing)
- **Estilizado:** Tailwind CSS (Utility-First Architecture)
- **Visualización Geoespacial:** Leaflet.js con renderizado vectorial.
- **Visualización Estadística:** Recharts (D3.js based).
- **Despliegue:** Vercel Edge Network.

---

## 🚀 Guía de Instalación y Despliegue

Siga estos pasos para replicar el entorno de desarrollo localmente.

### Prerrequisitos
- Node.js 18+
- Git
- NPM o Yarn

### 1. Clonar el Repositorio
```bash
git clone https://github.com/erick007bon/ecuador-flood-risk-dashboard.git
cd ecuador-flood-risk-dashboard
```

### 2. Instalar Dependencias
```bash
npm install
# Esto instalará Next.js, React, Leaflet, Recharts y Tailwind CSS
```

### 3. Ejecutar Servidor de Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

---

## 📁 Estructura del Proyecto

La arquitectura del código sigue los estándares modernos de **Next.js App Router**:

```bash
webapp-nextjs/
├── app/
│   ├── globals.css       # Estilos globales y configuración de Tailwind
│   ├── layout.tsx        # Layout principal (Root Layout)
│   └── page.tsx          # Lógica de la página principal (Dashboard)
├── components/
│   ├── MapComponent.tsx  # Motor de visualización geoespacial (Leaflet)
│   ├── StatsCards.tsx    # Componentes de métricas KPI
│   ├── RiskChart.tsx     # Visualización de distribución probabilística
│   ├── TemporalChart.tsx # Análisis de series temporales
│   ├── FilterPanel.tsx   # Motor de filtrado multidimensional
│   └── PredictionPanel.tsx # Interfaz de inferencia ML en tiempo real
└── public/
    └── data/
        ├── parroquias.json  # Dataset geoespacial (1,042 registros)
        ├── provincias.json  # Agregaciones provinciales
        └── metadata.json    # Metadatos del sistema
```

---

## 📊 Capacidades del Sistema

1.  **Inferencia Predictiva en Tiempo Real:** Motor de cálculo probabilístico que estima el riesgo basado en inputs microclimáticos y topográficos.
2.  **Visualización Geo-Espacial Interactiva:** Mapeo vectorial de las 24 provincias y 1,042 parroquias con clusterización dinámica de riesgo.
3.  **Análisis de Series Temporales:** Descomposición histórica del comportamiento de precipitaciones y evolución del riesgo (2020-2024).
4.  **Filtrado Multidimensional:** Segmentación de datos por estratos geográficos y niveles de severidad para análisis granular.

---

## 👨‍💻 Autoría Académica

**Erick Reinaldo Flores Zambrano**  
*Investigador & Desarrollador Principal*  
Universidad de Guayaquil  
*Facultad de Ciencias Matemáticas y Físicas*

---
*© 2026 Flood Risk Intelligence Project. Todos los derechos reservados.*
