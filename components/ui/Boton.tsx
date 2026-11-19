
import { Loader2, type LucideIcon } from 'lucide-react'
import type React from 'react'

type VarianteBoton = 'primario' | 'peligro' | 'fantasma'

type BotonProps = React.ComponentProps<'button'> & {
  variante?: VarianteBoton
  cargando?: boolean
  icono?: LucideIcon
}

export function Boton({
  variante = 'primario',
  cargando = false,
  icono: Icono,
  disabled,
  className = '',
  children,
  ...props
}: BotonProps) {
  const estilosBase =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primario focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const estilosVariantes: Record<VarianteBoton, string> = {
    primario:
      'bg-primario text-texto-invertido hover:bg-primario/90',
    peligro:
      'bg-error text-texto-invertido hover:bg-error/90',
    fantasma:
      'bg-transparent text-texto hover:bg-superficie-secundaria',
  }

  return (
    <button
      {...props}
      disabled={disabled || cargando}
      className={`${estilosBase} ${estilosVariantes[variante]} ${className}`}
    >
      {cargando ? (
        <Loader2
          className="h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      ) : (
        Icono && (
          <Icono
            className="h-4 w-4"
            aria-hidden="true"
          />
        )
      )}

      {children}
    </button>
  )
}
