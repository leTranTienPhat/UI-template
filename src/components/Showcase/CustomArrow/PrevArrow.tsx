import arrow from "../../../assets/arrow.svg"

type Props = {
  onClick?: () => void
}

function PrevArrow({ onClick }: Props) {
  return (
    <div
      className='absolute bottom-16 right-32 z-10'
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img src={arrow} alt="prev arrow" className="w-6 rotate-180 hover:cursor-pointer" />
    </div>
  )
}
export default PrevArrow