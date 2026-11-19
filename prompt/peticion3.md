Petición 3. Siguiendo las reglas del Prompt Maestro, créame
`components/ui/Boton.tsx`: un botón reutilizable que usaremos en toda la app.
Props:
- `variante`: 'primario' | 'peligro' | 'fantasma' (por defecto 'primario')
- `cargando`: boolean — cuando es true, muestra el icono Loader2 de lucide-react
 girando (con la clase animate-spin) y deshabilita el botón
- `icono`: un componente de icono de lucide-react, opcional
- y además todas las props nativas de un <button> de HTML (type, disabled,
 onClick, className…), extendiendo React.ComponentProps<'button'>
NO lleva 'use client': este botón solo pinta lo que recibe, no tiene estado
propio ni manejadores de eventos propios. Explícame en una línea por qué,
aunque se vaya a usar dentro de componentes 'use client', este archivo no
necesita la directiva.
