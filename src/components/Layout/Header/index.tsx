import logo from "../../../assets/logo.svg"

function Header() {
  return (
    <div className="flex justify-between w-full p-8 items-center">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-8" />
        <span className="font-bold text-lg ">Untitled UI</span>
      </div>
      <div>
        <p className="hyperlink-text">Learn more</p>
      </div>
    </div>
  )
}

export default Header