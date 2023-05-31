import arrow from "../../../assets/arrow.svg"

type Props = {
  onClick?: () => void
}

function NextArrow({ onClick }: Props) {
  return (
    <div
      className='absolute bottom-16 right-16 z-10'
      style={{ display: "block" }}
      onClick={onClick}
    >
      <img src={arrow} alt="next arrow" className="w-6 h-6 hover:cursor-pointer" />
    </div>
  )
}
export default NextArrow