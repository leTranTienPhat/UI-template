import Showcase from "../../components/Showcase"
import SignIn from "../../components/SignIn"

function Homepage() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="md:col-span-5 col-span-12 h-full">
        <SignIn />
      </div>
      <div className="hidden md:block col-span-7 h-full">
        <Showcase />
      </div>
    </div>
  )
}

export default Homepage