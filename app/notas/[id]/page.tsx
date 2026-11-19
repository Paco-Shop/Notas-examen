
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { obtenerNotaPorId } from '@/lib/notas'
import { EnlaceVolver } from '@/components/nav/EnlaceVolver'
import { BotonFavorita } from '@/components/BotonFavorita'
import { BotonBorrar } from '@/components/BotonBorrar'

export const dynamic = 'force-dynamic'

type PaginaNotaProps = PageProps<'/notas/[id]'>

export async function generateMetadata(
  props: PaginaNotaProps
): Promise<Metadata> {
  const { id } = await props.params

  const nota = await obtenerNotaPorId(id)

  if (!nota) {
    return {
      title: 'Nota no encontrada',
    }
  }

  return {
    title: nota.titulo,
  }
}

export default async function PaginaNota(
  props: PageProps<'/notas/[id]'>
) {
  const { id } = await props.params

  const nota = await obtenerNotaPorId(id)

  if (!nota) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-fondo px-4 py-10 sm:px-6 sm:py-14">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        {/* Enlace para volver */}
        <EnlaceVolver href="/" texto="Volver" />

        {/* Título y fecha */}
        <header className="flex flex-col gap-3">
          <h1 className="break-words text-3xl font-bold tracking-tight text-texto sm:text-4xl">
            {nota.titulo}
          </h1>

          <time
            dateTime={nota.creadaEn.toISOString()}
            className="text-sm text-texto-terciario"
          >
            {nota.creadaEn.toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </header>

        {/* Contenido de la nota */}
        <div className="min-h-[200px] rounded-2xl border border-borde bg-superficie p-6 shadow-sm sm:p-8">
          {nota.contenido ? (
            <p className="whitespace-pre-wrap break-words text-base leading-relaxed text-texto">
              {nota.contenido}
            </p>
          ) : (
            <p className="text-sm italic text-texto-terciario">
              Esta nota no tiene contenido
            </p>
          )}
        </div>

        {/* Acciones de la nota */}
        <footer className="flex items-center justify-between gap-4 border-t border-borde pt-5">
          <BotonFavorita
            id={nota.id}
            favorita={nota.favorita}
          />

          <BotonBorrar id={nota.id} />
        </footer>
      </article>
    </main>
  )
}
