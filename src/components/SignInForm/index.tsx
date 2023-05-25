import DefaultButton from "../shared/Button"
import Input from "../shared/Input"
import googleIcon from "../../assets/google-icon.svg"

function SignInForm() {
  return (
    <div className="w-full px-[10%]">
      <div className="py-4">
        <h3 className="text-2xl font-bold">Sign in</h3>
        <p>New to Untitled? <span className="hyperlink-text">Sign up for free</span></p>
      </div>
      <form className="flex flex-col gap-4">
        <Input id="email" placeholder="Email" />
        <Input id="password" placeholder="Password" type="password" />
        <p className="hyperlink-text">Forgot password?</p>
        <DefaultButton>Sign in</DefaultButton>
        <DefaultButton color="light">
          <div className="flex items-center justify-center gap-4">
            <img src={googleIcon} alt="google icon" className="w-6" />
            Sign in with Google
          </div>
        </DefaultButton>
      </form>
    </div>
  )
}

export default SignInForm