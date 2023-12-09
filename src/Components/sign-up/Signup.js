import { useState } from "react";
import UserSignUp from "./UserSignUp/UserSignUp";
import WorkerSignUp from "./WorkerSignUp/WorkerSignUp";
import ClientSignUp from "./ClientSignUp/ClientSignUp";
export default function SignUp() {
  const [step, setStep] = useState("user");

  return (
    <div>
      {
        step === "user" ? <UserSignUp /> :
          step === "worker" ? <WorkerSignUp /> :
            <ClientSignUp />
      }
    </div>
  );
}
