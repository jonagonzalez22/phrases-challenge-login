# 💬 PhraseBoard Challenge - React + Vite

Aplicación web desarrollada como parte de un challenge técnico. Permite agregar,
visualizar, filtrar y eliminar frases, las cuales se almacenan localmente. Está
construida con React y utiliza Context API para el manejo global del estado.

## Estructura del proyecto

- `src/context/` — Context API para manejar el estado global de las frases
- `src/modules/` — Módulos funcionales agrupados por responsabilidad

  - `home/` — Módulo principal (SearchBar, Cards, ModalAddPhrase)

- `src/Pages/` — Contenedor principal de páginas (Home)
- `src/App.tsx` — Componente raíz de la aplicación
- `src/main.tsx` — Punto de entrada de React
- `src/index.css` — Estilos globales

## 🚀 Tech Stack

- ⚛️ **React 18** (con Vite)
- 🧠 **Context API** para gestión de estado
- 💅 **CSS**
- 💾 **localStorage** para persistencia
- 🧪 **Jest**, **React Testing Library** y **Cypress**
- 🧠 **TypeScript**
-

## 🚧 Posibles mejoras

- Validaciones de input (máximo de caracteres, evitar duplicados).
- Confirmación al eliminar frases.
- Animaciones con Framer Motion.
- Cambiar los keys de los items del componente Cards usando uuid y no el index.
- Limpiar input al eliminar componente cuando se realice el filtrado.
- Uso mejorado de HOC.

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jonagonzalez22/phrases-challenge.git

# Acceder al directorio
cd phraseboard-challenge

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar los tests
npm run test

# Correr Cypress en modo interactivo
npm run cypress:open

# O ejecutar tests en modo headless
npm run cypress:run
```
