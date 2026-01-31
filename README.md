# 🌊 Flood Risk Intelligence Platform - Ecuador

**Sistema Avanzado de Inteligencia Artificial para el Modelado Estocástico y Clasificación de Riesgo Hidrometeorológico.**

[![Deploy Status](https://img.shields.io/badge/Deploy-Production-success?style=for-the-badge&logo=vercel)](https://webapp-nextjs-ochre.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20TypeScript%20%7C%20Leaflet-blue?style=for-the-badge)](https://nextjs.org)

## 🌐 Acceso a la Plataforma

**URL Oficial:** [**https://webapp-nextjs-ochre.vercel.app**](https://webapp-nextjs-ochre.vercel.app)

> *📱 Diseño Responsive: Plataforma optimizada para visualización en dispositivos móviles y estaciones de trabajo.*

## 🔬 Sinopsis del Proyecto

Este proyecto implementa una arquitectura de **Machine Learning de alto rendimiento** para abordar la problemática de las inundaciones en el Ecuador. Utilizando datos satelitales decenales (CHIRPS) y geomorfología de alta precisión, hemos entrenado un algoritmo **Random Forest** capaz de inferir el nivel de riesgo hidrometeorológico con una precisión del **99.68%** sobre un espacio muestral de **187,560 puntos de datos**.

La plataforma integra visualización geoespacial dinámica con inyección de datos en tiempo real, permitiendo a investigadores y tomadores de decisiones evaluar escenarios críticos a nivel parroquial con granularidad fina.

## 🧠 Arquitectura & Tecnologías

### Nivel de Datos & Modelado
- **Algoritmo:** Random Forest Classifier (Optimizado para Recall)
- **Métricas de Desempeño:** Accuracy 99.68% | F1-Score ~0.99
- **Espacio de Características (Features):**
  - Precipitación Satelital (CHIRPS/NASA)
  - Altimetría Digital (DEM/NASA SRTM)
  - Contexto Geomoorfológico (Urbano/Rural)
  - Coordenadas Geoespaciales
- **Volumen de Datos:** 187,560 tensores temporales distribuidos en 1,042 parroquias.

### Nivel de Aplicación (Full Stack)
- **Framework:** Next.js 16 (App Router Architecture)
- **Lenguaje:** TypeScript (Strict Typing)
- **Estilizado:** Tailwind CSS (Utility-First Architecture)
- **Visualización Geoespacial:** Leaflet.js con renderizado vectorial.
- **Visualización Estadística:** Recharts (D3.js based).
- **Despliegue:** Vercel Edge Network.

## 📊 Capacidades del Sistema

1.  **Inferencia Predictiva en Tiempo Real:** Motor de cálculo probabilístico que estima el riesgo basado en inputs microclimáticos y topográficos.
2.  **Visualización Geo-Espacial Interactiva:** Mapeo vectorial de las 24 provincias y 1,042 parroquias con clusterización dinámica de riesgo.
3.  **Análisis de Series Temporales:** Descomposición histórica del comportamiento de precipitaciones y evolución del riesgo (2020-2024).
4.  **Filtrado Multidimensional:** Segmentación de datos por estratos geográficos y niveles de severidad para análisis granular.

## 👨‍💻 Autoría Académica

**Erick Reinaldo Flores Zambrano**  
*Investigador & Desarrollador Principal*  
Universidad de Guayaquil  
*Facultad de Ciencias Matemáticas y Físicas*

---
*© 2026 Flood Risk Intelligence Project. Todos los derechos reservados.*
