
'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { alternarFavorita } from '@/actions/acciones-notas'

export function useAlternarFavorita(id: string) {
  const [cargando, setCargando] = useState(false)

  async function manejarClic() {
    setCargando(true)

    try {
      const resultado = await alternarFavorita(id)

      if (resultado.exito) {
        toast.success(resultado.mensaje)
      } else {
        toast.error(resultado.mensaje)
      }
    } catch {
      toast.error('No se ha podido cambiar el estado de favorita.')
    } finally {
      setCargando(false)
    }
  }

  return {
    cargando,
    manejarClic,
  }
}
