Petición 1. Siguiendo las reglas del Prompt Maestro, créame el archivo
`lib/notas.ts` con las funciones de LECTURA de notas.
Mi modelo de Prisma es:
model Nota {
 id String @id @default(cuid())
 titulo String
 contenido String?
 favorita Boolean @default(false)
 creadaEn DateTime @default(now())
}
Necesito tres funciones:
1. `obtenerNotas()` — todas las notas, ordenadas primero las favoritas y, dentro de
 cada grupo, las más recientes antes.
2. `obtenerNotasFavoritas()` — solo las que tienen favorita: true, las más recientes
 primero.
3. `obtenerNotaPorId(id: string)` — una sola nota, o null si no existe (usa
findUnique).
Son funciones async normales: este archivo NO lleva ninguna directiva (ni
'use server' ni 'use client' ni 'use cache').