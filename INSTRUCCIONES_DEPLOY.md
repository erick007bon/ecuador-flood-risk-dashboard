# 🚀 INSTRUCCIONES PARA DEPLOY EN VERCEL

## 📋 PASO 1: CREAR REPOSITORIO EN GITHUB

1. Ve a: https://github.com/new
2. Nombre del repositorio: `ecuador-flood-risk-dashboard`
3. Descripción: `Dashboard interactivo de riesgo de inundación en Ecuador con ML`
4. **NO** marques "Initialize with README" (ya lo tenemos)
5. Click en "Create repository"

## 📤 PASO 2: SUBIR CÓDIGO A GITHUB

Ejecuta estos comandos en PowerShell:

```powershell
cd "C:\Users\Erick Zambrano\Desktop\linkedin\PROYECTOS\PROYECTO DE MACHINE LEARNIG OFICIAL UG\webapp-nextjs"

git branch -M main

git remote add origin https://github.com/erick007bon/ecuador-flood-risk-dashboard.git

git push -u origin main
```

## 🚀 PASO 3: DEPLOY EN VERCEL

### Opción A: Desde la Web (MÁS FÁCIL)

1. Ve a: https://vercel.com
2. Click en "Add New" → "Project"
3. Importa el repositorio `ecuador-flood-risk-dashboard`
4. Framework Preset: **Next.js** (se detecta automáticamente)
5. Click en "Deploy"
6. ¡Listo! En 2-3 minutos tendrás tu URL pública

### Opción B: Desde la Terminal

```powershell
cd "C:\Users\Erick Zambrano\Desktop\linkedin\PROYECTOS\PROYECTO DE MACHINE LEARNIG OFICIAL UG\webapp-nextjs"

npx vercel --prod --yes
```

## ✅ RESULTADO

Tendrás una URL como:
```
https://ecuador-flood-risk-dashboard.vercel.app
```

O:
```
https://ecuador-flood-risk-dashboard-tu-usuario.vercel.app
```

## 🎯 PRÓXIMOS PASOS

1. Compartir URL en LinkedIn
2. Agregar URL al README.md
3. Actualizar GEMINI.md con todo lo logrado

---

**Tiempo estimado:** 5-10 minutos

**Autor:** Erick Reinaldo Flores Zambrano  
**Fecha:** 31 de Enero de 2026 - 12:25 AM
