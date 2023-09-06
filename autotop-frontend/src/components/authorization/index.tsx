import { useState } from "react";
import { SignInHeaders } from "./sign-in-header";
import { SignUpForm } from "./sign-up-form";
import { SignInForm } from "./sign-in-form";

function AuthorizationForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <SignInHeaders setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}

export default AuthorizationForm;
