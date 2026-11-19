
'use client'

import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { toast } from 'sonner'
import { crearNota } from '@/actions/acciones-notas'

export const MAX_TITULO = 80

export function useFormularioNota() {
  const [enviando, setEnviando] = useState(false)
  const [caracteres, setCaracteres] = useState(0)

  const formularioRef = useRef<HTMLFormElement>(null)
  const tituloRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    tituloRef.current?.focus()
  }, [])

  function contarCaracteres(evento: ChangeEvent<HTMLInputElement>) {
    setCaracteres(evento.target.value.length)
  }

  async function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    const datosFormulario = new FormData(evento.currentTarget)

    setEnviando(true)

    try {
      const resultado = await crearNota(datosFormulario)

      if (resultado.exito) {
        toast.success(resultado.mensaje)

        formularioRef.current?.reset()
        setCaracteres(0)
        tituloRef.current?.focus()
      } else {
        toast.error(resultado.mensaje)
      }
    } catch {
      toast.error('Ha ocurrido un error al crear la nota.')
    } finally {
      setEnviando(false)
    }
  }

  return {
    enviando,
    caracteres,
    formularioRef,
    tituloRef,
    contarCaracteres,
    manejarEnvio,
  }
}
