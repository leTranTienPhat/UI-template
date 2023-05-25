import logo from "../../../assets/logo-white.svg"
import { IShowcase } from "../../../model/showcaseModel";
import Ranking from "../Ranking";

type Props = {
  data: IShowcase
}

function CustomSlide({ data }: Props) {
  const { name, company, desc, image, background } = data
  return (
    <div className="relative w-full h-screen text-white">
      <img src={background} className="absolute w-full h-full" />
      <div className="absolute border-4 border-white font-bold mx-10 my-20 text-[30px] p-4">
        {desc}
        <div className="absolute top-[-16px] left-[-16px] w-4 h-4  border-4 border-white"></div>
        <div className="absolute top-[-16px] right-[-16px] w-4 h-4  border-4 border-white"></div>
        <div className="absolute bottom-[-16px] left-[-16px] w-4 h-4  border-4 border-white"></div>
        <div className="absolute bottom-[-16px] right-[-16px] w-4 h-4  border-4 border-white"></div>

      </div>
      <div className="absolute bottom-8 left-16 z-20">
        <p className="font-bold text-3xl">{name}</p>
        <div className="flex gap-4 py-4">
          <img src={logo} className="w-8 " />
          <p className="font-bold text-xl">{company}</p>
        </div>
      </div>
      <div className="absolute w-full h-full z-10 ">
        <img src={image} className="" />
      </div>
      <div className="absolute bottom-36 right-16 z-30">
        <Ranking rating={5} />
      </div>

    </div>
  );
}

export default CustomSlide