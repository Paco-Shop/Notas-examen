
import { obtenerNotas } from '@/lib/notas'
import { FormularioNota } from '@/components/inicio/FormularioNota'
import { ListaNotas } from '@/components/ListaNotas'

export const dynamic = 'force-dynamic'

export default async function PaginaInicio() {
  const notas = await obtenerNotas()

  const cantidadNotas = notas.length

  let textoCantidad: string

  if (cantidadNotas === 0) {
    textoCantidad = 'Ninguna nota todavía'
  } else if (cantidadNotas === 1) {
    textoCantidad = '1 nota'
  } else {
    textoCantidad = `${cantidadNotas} notas`
  }

  return (
    <main className="min-h-screen bg-fondo px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        {/* Cabecera */}
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-texto sm:text-4xl">
            Mis notas
          </h1>

          <p className="text-sm text-texto-secundario">
            {textoCantidad}
          </p>
        </header>

        {/* Formulario para crear notas */}
        <FormularioNota />

        {/* Lista de notas */}
        <ListaNotas
          notas={notas}
          tituloVacio="Todavía no tienes notas"
          subtituloVacio="¡Crea tu primera nota y empieza a organizar tus ideas!"
        />
      </div>
    </main>
  )
}
