Petición 5. Siguiendo las reglas del Prompt Maestro, créame DOS archivos, en
este orden: primero `hooks/useFormularioNota.ts` y después
`components/inicio/FormularioNota.tsx`. Dame cada uno con su ruta y su código
completo.
ARCHIVO 1: `hooks/useFormularioNota.ts` (capa 3, regla 12)
Lleva 'use client'. Usa SOLO useState, useRef y useEffect. Exporta la constante
`MAX_TITULO = 80` y la función `useFormularioNota()`, que devuelve el objeto
`{ enviando, caracteres, formularioRef, tituloRef, contarCaracteres,
manejarEnvio }`. Es el ÚNICO sitio que llama a `crearNota` de
'@/actions/acciones-notas' y el único que usa toast de sonner.
- manejarEnvio(evento): evento.preventDefault(), construye el FormData con
 `new FormData(evento.currentTarget)` y llama con await a
 `crearNota(datosFormulario)`.
- useState #1: `enviando` (boolean). Ponlo a true antes del await y a false
 después.
- useState #2: `caracteres` (number). La función `contarCaracteres` lo
 actualiza con la longitud del título escrito (se engancha al onChange).
- useRef: una referencia al elemento <form>. Úsala para limpiar el formulario
 con `formularioRef.current?.reset()` cuando la nota se cree correctamente.
 Explícame por qué NO puedo usar `evento.currentTarget.reset()` después del await.
- useEffect: al montar, pon el foco en el input del título. Necesitarás un
 segundo useRef (`tituloRef`) apuntando al input.
- Tras el await: si el resultado tiene exito: true, muestra toast.success con su
 mensaje, limpia el formulario y pon el contador a 0. Si exito: false, muestra
toast.error con su mensaje.
ARCHIVO 2: `components/inicio/FormularioNota.tsx` (capa 4, regla 12)
Lleva 'use client'. NO usa useState, useRef, useEffect ni toast, y NO importa
nada de '@/actions': solo llama a `useFormularioNota()` de
'@/hooks/useFormularioNota' y pinta lo que le devuelve.
- Un <form ref={formularioRef} onSubmit={manejarEnvio}>.
- Un <input name="titulo" ref={tituloRef}> con maxLength={MAX_TITULO},
 placeholder "Título de la nota" y onChange={contarCaracteres}. Debajo,
 "caracteres/MAX_TITULO", que se ponga en rojo si llega al máximo.
- Un <textarea name="contenido"> de 3 filas con placeholder "Contenido (opcional)".
- El botón de enviar es el componente Boton de '@/components/ui/Boton' con el icono
 Plus de lucide-react, el texto "Crear nota" y `cargando={enviando}`.
