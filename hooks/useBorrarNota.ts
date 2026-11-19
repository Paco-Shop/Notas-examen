
'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { borrarNota } from '@/actions/acciones-notas'

export function useBorrarNota(id: string) {
  const [armado, setArmado] = useState(false)
  const [borrando, setBorrando] = useState(false)

  const temporizadorRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!armado) {
      return
    }

    temporizadorRef.current = setTimeout(() => {
      setArmado(false)
    }, 3000)

    return () => {
      if (temporizadorRef.current !== null) {
        clearTimeout(temporizadorRef.current)
        temporizadorRef.current = null
      }
    }
  }, [armado])

  async function manejarClic() {
    if (!armado) {
      setArmado(true)
      return
    }

    setBorrando(true)

    try {
      const resultado = await borrarNota(id)

      if (resultado.exito) {
        toast.success(resultado.mensaje)
      } else {
        toast.error(resultado.mensaje)
      }
    } catch {
      toast.error('Ha ocurrido un error al borrar la nota.')
    } finally {
      setBorrando(false)
      setArmado(false)
    }
  }

  return {
    armado,
    borrando,
    manejarClic,
  }
}
