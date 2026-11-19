
'use client'

import { Plus } from 'lucide-react'
import { Boton } from '@/components/ui/Boton'
import {
  MAX_TITULO,
  useFormularioNota,
} from '@/hooks/useFormularioNota'

export function FormularioNota() {
  const {
    enviando,
    caracteres,
    formularioRef,
    tituloRef,
    contarCaracteres,
    manejarEnvio,
  } = useFormularioNota()

  return (
    <form
      ref={formularioRef}
      onSubmit={manejarEnvio}
      className="flex flex-col gap-5 rounded-2xl border border-borde bg-superficie p-5 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="titulo"
          className="text-sm font-medium text-texto"
        >
          Título
        </label>

        <input
          id="titulo"
          name="titulo"
          ref={tituloRef}
          type="text"
          maxLength={MAX_TITULO}
          placeholder="Título de la nota"
          onChange={contarCaracteres}
          required
          className="w-full rounded-xl border border-borde-secundario bg-superficie px-4 py-3 text-texto placeholder:text-texto-terciario focus:border-primario focus:outline-none focus:ring-2 focus:ring-primario/20"
        />

        <p
          className={`text-right text-xs ${
            caracteres >= MAX_TITULO
              ? 'text-error'
              : 'text-texto-terciario'
          }`}
        >
          {caracteres}/{MAX_TITULO}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contenido"
          className="text-sm font-medium text-texto"
        >
          Contenido
        </label>

        <textarea
          id="contenido"
          name="contenido"
          rows={3}
          placeholder="Contenido (opcional)"
          className="w-full resize-y rounded-xl border border-borde-secundario bg-superficie px-4 py-3 text-texto placeholder:text-texto-terciario focus:border-primario focus:outline-none focus:ring-2 focus:ring-primario/20"
        />
      </div>

      <div className="flex justify-end">
        <Boton
          type="submit"
          icono={Plus}
          cargando={enviando}
        >
          Crear nota
        </Boton>
      </div>
    </form>
  )
}
