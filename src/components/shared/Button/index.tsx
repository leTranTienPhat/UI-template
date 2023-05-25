type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined,
  color?: string,
  onClick?: () => void,
  children: React.ReactElement | string
}

function DefaultButton({ type = 'button', color = "primary", onClick, children }: Props) {
  const btnColor = `btn-${color}`

  return (
    <button type={type} className={`${btnColor} w-full rounded-md p-2 font-bold`}>
      {children}
    </button>
  )
}

export default DefaultButton