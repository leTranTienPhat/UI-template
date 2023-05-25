import star from "../../../assets/star.svg"

type Props = {
  rating: number
}

function Ranking({ rating }: Props) {
  return (
    <div className="flex gap-4">
      {[...Array(rating)].map((item, index) => {
        return (
          <img key={index} id={item} src={star} alt="star" className="w-6" />
        )
      })}
    </div>
  )
}

export default Ranking