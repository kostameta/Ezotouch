import { useEffect, useRef } from 'react'
import typograf from '@/utils/typograf'

export default function TypografText({ children, as: Component = 'span', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && typeof children === 'string') {
      ref.current.textContent = typograf(children)
    }
  }, [children])

  if (typeof children === 'string') {
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    )
  }

  return <Component {...props}>{children}</Component>
}
