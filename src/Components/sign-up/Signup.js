import { useState } from "react";
import UserSignUp from "./UserSignUp/UserSignUp";
import WorkerSignUp from "./WorkerSignUp/WorkerSignUp";
import ClientSignUp from "./ClientSignUp/ClientSignUp";
export default function SignUp() {
  const [step, setStep] = useState("user");
  const [userFormData, setUserFormData] = useState({
    phoneNumber: "",
    password: "",
    repeatPassword: "",
    username: "",
    email: "",
    location: "",
    role: "",
  });

  return (
    <div>
      {step === "user" ? (
        <UserSignUp userFormData={userFormData} setUserFormData={setUserFormData} />
      ) : step === "worker" ? (
        <WorkerSignUp />
      ) : (
        <ClientSignUp />
      )}
    </div>
  );
}
