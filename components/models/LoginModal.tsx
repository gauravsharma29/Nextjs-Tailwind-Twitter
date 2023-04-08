import React, { useCallback, useState } from "react";
import useLoginModel from "../../hooks/useLoginModel";
import useRegisterModel from "../../hooks/useRegisterModel";
import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModel = useLoginModel();
  const registerModal = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModel.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn("credentials", {
        email,
        password,
      });

      // Now using our zustand store here
      loginModel.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [loginModel, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} value={email} />
      <Input placeholder="Password" type="password" onChange={(e) => setPaswword(e.target.value)} disabled={isLoading} value={password} />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
          {" "}
          Create an account
        </span>
      </p>
    </div>
  );

  return <Modal disabled={isLoading} isOpen={loginModel.isOpen} title="Login" actionLabel="SignIn" onClose={loginModel.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />;
};

export default LoginModal;
