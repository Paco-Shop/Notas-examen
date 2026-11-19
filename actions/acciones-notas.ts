
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export type ResultadoAccion = {
  exito: boolean
  mensaje: string
}

export async function crearNota(
  datosFormulario: FormData
): Promise<ResultadoAccion> {
  const titulo = datosFormulario.get('titulo')
  const contenido = datosFormulario.get('contenido')

  if (typeof titulo !== 'string' || titulo.trim() === '') {
    return {
      exito: false,
      mensaje: 'El título no puede estar vacío.',
    }
  }

  if (titulo.trim().length > 80) {
    return {
      exito: false,
      mensaje: 'El título no puede superar los 80 caracteres.',
    }
  }

  if (contenido !== null && typeof contenido !== 'string') {
    return {
      exito: false,
      mensaje: 'El contenido no es válido.',
    }
  }

  try {
    await prisma.nota.create({
      data: {
        titulo: titulo.trim(),
        contenido:
          typeof contenido === 'string' && contenido.trim() !== ''
            ? contenido.trim()
            : null,
      },
    })

    revalidatePath('/')
    revalidatePath('/favoritas')

    return {
      exito: true,
      mensaje: 'Nota creada correctamente.',
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se ha podido crear la nota.',
    }
  }
}

export async function alternarFavorita(
  id: string
): Promise<ResultadoAccion> {
  try {
    const nota = await prisma.nota.findUnique({
      where: {
        id: id,
      },
    })

    if (!nota) {
      return {
        exito: false,
        mensaje: 'No se ha encontrado la nota.',
      }
    }

    await prisma.nota.update({
      where: {
        id: id,
      },
      data: {
        favorita: !nota.favorita,
      },
    })

    revalidatePath('/')
    revalidatePath('/favoritas')

    return {
      exito: true,
      mensaje: nota.favorita
        ? 'Nota eliminada de favoritas.'
        : 'Nota añadida a favoritas.',
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se ha podido cambiar el estado de la nota.',
    }
  }
}

export async function borrarNota(
  id: string
): Promise<ResultadoAccion> {
  try {
    const nota = await prisma.nota.findUnique({
      where: {
        id: id,
      },
    })

    if (!nota) {
      return {
        exito: false,
        mensaje: 'No se ha encontrado la nota.',
      }
    }

    await prisma.nota.delete({
      where: {
        id: id,
      },
    })

    revalidatePath('/')
    revalidatePath('/favoritas')

    return {
      exito: true,
      mensaje: 'Nota eliminada correctamente.',
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se ha podido eliminar la nota.',
    }
  }
}
