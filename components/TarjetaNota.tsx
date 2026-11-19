
import Link from 'next/link'
import type { Nota } from '@prisma/client'
import { BotonFavorita } from '@/components/BotonFavorita'
import { BotonBorrar } from '@/components/BotonBorrar'

type TarjetaNotaProps = {
  nota: Nota
}

export function TarjetaNota({ nota }: TarjetaNotaProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-2xl border border-borde bg-superficie p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <Link
          href={`/notas/${nota.id}`}
          className="min-w-0 flex-1 text-xl font-bold tracking-tight text-texto transition-colors duration-200 hover:text-primario"
        >
          {nota.titulo}
        </Link>

        <BotonFavorita
          id={nota.id}
          favorita={nota.favorita}
        />
      </div>

      {nota.contenido && (
        <p className="line-clamp-2 whitespace-pre-wrap text-sm leading-7 text-texto-secundario">
          {nota.contenido}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-borde pt-4">
        <time
          dateTime={nota.creadaEn.toISOString()}
          className="text-xs text-texto-terciario"
        >
          {nota.creadaEn.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>

        <BotonBorrar id={nota.id} />
      </div>
    </article>
  )
}
