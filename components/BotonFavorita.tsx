
'use client'

import { Star } from 'lucide-react'
import { useAlternarFavorita } from '@/hooks/useAlternarFavorita'

type BotonFavoritaProps = {
  id: string
  favorita: boolean
}

export function BotonFavorita({
  id,
  favorita,
}: BotonFavoritaProps) {
  const { cargando, manejarClic } = useAlternarFavorita(id)

  return (
    <button
      type="button"
      onClick={manejarClic}
      disabled={cargando}
      aria-label={
        favorita
          ? 'Quitar de favoritas'
          : 'Marcar como favorita'
      }
      title={
        favorita
          ? 'Quitar de favoritas'
          : 'Marcar como favorita'
      }
      className="rounded-lg p-2 transition-colors hover:bg-superficie-secundaria disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Star
        className={`h-5 w-5 ${
          favorita
            ? 'fill-acento text-acento'
            : 'text-texto-terciario'
        }`}
        aria-hidden="true"
      />
    </button>
  )
}
