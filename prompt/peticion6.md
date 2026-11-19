Petición 6. Siguiendo las reglas del Prompt Maestro, créame DOS archivos, en
este orden: primero `hooks/useBorrarNota.ts` y después
`components/BotonBorrar.tsx`. Dame cada uno con su ruta y su código completo.
ARCHIVO 1: `hooks/useBorrarNota.ts` (capa 3, regla 12)
Lleva 'use client'. Exporta `useBorrarNota(id: string)`, que devuelve
`{ armado, borrando, manejarClic }`. Es el ÚNICO sitio que llama a `borrarNota`
de '@/actions/acciones-notas' y el único que usa toast de sonner.
Comportamiento con confirmación de dos clics:
- useState #1: `armado` (boolean). El primer clic (en manejarClic) lo pone a
 true.
- El segundo clic (cuando armado es true) llama con await a `borrarNota(id)`.
- useState #2: `borrando` (boolean), true mientras dura la llamada.
- useEffect: si `armado` es true, pon un setTimeout de 3 segundos que lo
 devuelva a false (para que no se quede armado para siempre). Guarda el id del
 temporizador en un useRef y límpialo con clearTimeout en la función de
 limpieza del useEffect. Explícame por qué esa limpieza es necesaria.
- Tras el await: toast.success o toast.error según el resultado.
ARCHIVO 2: `components/BotonBorrar.tsx` (capa 4, regla 12)
Lleva 'use client'. Recibe una prop `id: string`. NO usa useState, useRef,
useEffect ni toast, y NO importa nada de '@/actions': solo llama a
`useBorrarNota(id)` de '@/hooks/useBorrarNota' y pinta.
Usa el componente Boton de '@/components/ui/Boton' con variante 'peligro', el icono
Trash2 de lucide-react, `cargando={borrando}`, `onClick={manejarClic}` y el
texto "Borrar", que cambia a "¿Seguro?" cuando `armado` es true.
