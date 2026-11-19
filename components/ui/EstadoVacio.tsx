
import { NotebookPen } from 'lucide-react'

type EstadoVacioProps = {
  titulo: string
  subtitulo: string
}

export function EstadoVacio({
  titulo,
  subtitulo,
}: EstadoVacioProps) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-5 rounded-2xl border border-dashed border-borde bg-superficie-secundaria px-6 py-12 text-center">
      <NotebookPen
        className="h-16 w-16 text-texto-terciario"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-texto">
          {titulo}
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-texto-secundario">
          {subtitulo}
        </p>
      </div>
    </div>
  )
}
