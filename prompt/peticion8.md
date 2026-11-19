Petición 8. Siguiendo las reglas del Prompt Maestro, créame
`components/TarjetaNota.tsx`.
Recibe una prop `nota` del tipo `Nota` importado de '@prisma/client'.
Debe mostrar, dentro de una tarjeta con borde redondeado y sombra suave:
- El título, como un <Link> de 'next/link' que lleva a `/notas/${nota.id}`.
- El contenido, si existe, recortado a 2 líneas (line-clamp-2).
- La fecha de creación formateada en español:
 nota.creadaEn.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year:
'numeric' })
- El componente BotonFavorita de '@/components/BotonFavorita' arriba a la derecha.
- El componente BotonBorrar de '@/components/BotonBorrar' abajo.
IMPORTANTE: este componente NO lleva 'use client'. Es un Server Component que simplemente coloca dentro los dos botones, que sí son de cliente.
Explícame por qué eso funciona y no da error.
