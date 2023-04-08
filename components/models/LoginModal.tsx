import React, { useCallback, useState } from "react";
import useLoginModel from "../../hooks/useLoginModel";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModel = useLoginModel();

  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);
      // TODO: ADD LOGIN

      // Now using our zustand store here
      loginModel.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [loginModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
      <Input placeholder="Password" onChange={(e) => setPaswword(e.target.value)} disabled={isLoading} />
    </div>
  );

  return <Modal disabled={isLoading} isOpen={loginModel.isOpen} title="Login" actionLabel="SignIn" onClose={loginModel.onClose} onSubmit={onSubmit} body={bodyContent} />;
};

export default LoginModal;
