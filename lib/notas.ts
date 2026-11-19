
import { prisma } from '@/lib/prisma'

export async function obtenerNotas() {
  return await prisma.nota.findMany({
    orderBy: [
      { favorita: 'desc' },
      { creadaEn: 'desc' },
    ],
  })
}

export async function obtenerNotasFavoritas() {
  return await prisma.nota.findMany({
    where: {
      favorita: true,
    },
    orderBy: {
      creadaEn: 'desc',
    },
  })
}

export async function obtenerNotaPorId(id: string) {
  return await prisma.nota.findUnique({
    where: {
      id: id,
    },
  })
}
