type Props = {
  id: string,
  label?: string | null,
  type?: string,
  placeholder?: string
}

function Input({ id, label = null, type = "text", placeholder = "Placeholder Text" }: Props) {
  return (
    <div className="border-b-[1px] border-faded-gray">
      {label && <label>{label}</label>}
      <input type={type} id={id} placeholder={placeholder} className="w-full h-10" />
    </div>
  )
}

export default Input