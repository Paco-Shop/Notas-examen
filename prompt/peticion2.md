Petición 2. Siguiendo las reglas del Prompt Maestro, créame el archivo
`actions/acciones-notas.ts` con las Server Actions para ESCRIBIR en la base de datos.Necesito tres funciones:
1. `crearNota(datosFormulario: FormData)` — lee `titulo` y `contenido` del FormData.
 Valida: el título no puede estar vacío ni pasar de 80 caracteres. Si
 `contenido` llega vacío, guarda null.
2. `alternarFavorita(id: string)` — invierte el valor del campo favorita.
 (lee primero la nota para saber su valor actual)
3. `borrarNota(id: string)` — borra la nota.
Reglas adicionales:
- El archivo empieza con 'use server'.
- Exporta un tipo `ResultadoAccion = { exito: boolean; mensaje: string }` y que las
 tres funciones devuelvan ese tipo, para poder mostrar un toast desde el cliente.
- Envuelve cada operación de Prisma en try/catch y devuelve un mensaje de error
 en español si algo falla.
- Tras cada operación que modifique datos, llama a `revalidatePath('/')` y
 `revalidatePath('/favoritas')`.
- Explícame por qué hay que llamar a revalidatePath.
