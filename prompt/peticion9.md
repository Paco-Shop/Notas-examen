Petición 9. Siguiendo las reglas del Prompt Maestro, créame
`components/ListaNotas.tsx`.
Props:
- `notas: Nota[]` (el tipo Nota importado de '@prisma/client')
- `tituloVacio: string`
- `subtituloVacio: string`
- Si la lista llega vacía (`notas.length === 0`), muestra el EstadoVacio de
 '@/components/ui/EstadoVacio' pasándole tituloVacio y subtituloVacio.
- Si no, muestra una cuadrícula responsive de TarjetaNota: 1 columna en móvil,
 2 en tablet (sm:) y 3 en escritorio (lg:), con gap de separación.
- Recuerda la prop `key` en cada elemento de la lista, usando nota.id.
- NO lleva 'use client'.
