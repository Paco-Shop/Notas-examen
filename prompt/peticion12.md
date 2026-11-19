Petición 12. Siguiendo las reglas del Prompt Maestro, créame
`app/notas/[id]/page.tsx`: la página de detalle de una nota.
- Es un Server Component async. Exporta `export const dynamic = 'force-dynamic'`.- ATENCIÓN (regla 6): declara la función exactamente así
 `export default async function PaginaNota(props: PageProps<'/notas/[id]'>)`
 y obtén el id con `const { id } = await props.params`.
- Busca la nota con `obtenerNotaPorId(id)` de '@/lib/notas'.
- Si devuelve null, llama a `notFound()` importado de 'next/navigation'.
- Si existe, muestra: arriba, el componente EnlaceVolver de
 '@/components/nav/EnlaceVolver' con href="/" y el texto "Volver" (ya existe
 de la petición 11: impórtalo y úsalo, NO escribas otro <Link> con su
 ArrowLeft a mano); el título como <h1> grande; la fecha de
 creación formateada en español; el contenido completo respetando los saltos
 de línea (clase whitespace-pre-wrap) o un texto en gris "Esta nota no tiene
 contenido" si está vacío; y abajo el BotonFavorita y el BotonBorrar.
- Además, exporta una función `generateMetadata` que ponga como título de la
 pestaña el título de la nota. Recuerda que también recibe params como promesa.
Explícame qué hace exactamente `notFound()`.
