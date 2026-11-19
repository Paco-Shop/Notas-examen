
import type { Metadata } from 'next'
import { obtenerNotasFavoritas } from '@/lib/notas'
import { ListaNotas } from '@/components/ListaNotas'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Favoritas',
}

export default async function PaginaFavoritas() {
  const notas = await obtenerNotasFavoritas()

  const cantidadNotas = notas.length

  let textoCantidad: string

  if (cantidadNotas === 0) {
    textoCantidad = 'Ninguna nota todavía'
  } else if (cantidadNotas === 1) {
    textoCantidad = '1 nota favorita'
  } else {
    textoCantidad = `${cantidadNotas} notas favoritas`
  }

  return (
    <main className="min-h-screen bg-fondo px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        {/* Cabecera */}
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-texto sm:text-4xl">
            Favoritas
          </h1>

          <p className="text-sm text-texto-secundario">
            {textoCantidad}
          </p>
        </header>

        {/* Lista de notas favoritas */}
        <ListaNotas
          notas={notas}
          tituloVacio="Sin favoritas"
          subtituloVacio="Marca una nota con la estrella para verla aquí"
        />
      </div>
    </main>
  )
}
