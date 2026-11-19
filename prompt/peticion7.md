Petición 7. Siguiendo las reglas del Prompt Maestro, créame DOS archivos, en
este orden: primero `hooks/useAlternarFavorita.ts` y después
`components/BotonFavorita.tsx`. Dame cada uno con su ruta y su código completo.
ARCHIVO 1: `hooks/useAlternarFavorita.ts` (capa 3, regla 12)
Lleva 'use client'. Exporta `useAlternarFavorita(id: string)`, que devuelve
`{ cargando, manejarClic }`. Es el ÚNICO sitio que llama a `alternarFavorita`
de '@/actions/acciones-notas' y el único que usa toast de sonner.
- useState: `cargando` (boolean), true mientras la acción está en curso.
- manejarClic: llama con await a `alternarFavorita(id)` y muestra un toast con
 el mensaje del resultado.
ARCHIVO 2: `components/BotonFavorita.tsx` (capa 4, regla 12)
Lleva 'use client'. Props: `id: string` y `favorita: boolean`. NO usa useState
ni toast, y NO importa nada de '@/actions': solo llama a
`useAlternarFavorita(id)` de '@/hooks/useAlternarFavorita' y pinta.
- Muestra el icono Star de lucide-react. Si favorita es true, el icono va
 rellenado en amarillo (fill-acento text-acento); si es false, solo
 el contorno en gris.
- El botón llama a `manejarClic` al hacer clic y se deshabilita con `cargando`.
- Que tenga un atributo aria-label descriptivo ("Marcar como favorita" /
 "Quitar de favoritas") para que sea accesible.

