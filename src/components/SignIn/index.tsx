import Layout from "../Layout"
import SignInForm from "../SignInForm"

function SignIn() {
  return (
    <div className="flex flex-col justify-between h-full">
      <Layout>
        <div className="grow flex flex-col justify-center items-center">
          <SignInForm />
        </div>
      </Layout>
    </div>
  )
}

export default SignIn