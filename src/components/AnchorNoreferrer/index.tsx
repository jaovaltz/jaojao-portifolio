type AnchorNoRefferType = {
  href: string
  children: React.ReactNode
  style?: any
}

export function AnchorNoReferrer({
  href,
  children,
  style
}: AnchorNoRefferType) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={style}>
      {children}
    </a>
  )
}
