import React, { useCallback, useState } from "react";
import useLoginModel from "../../hooks/useLoginModel";
import useRegisterModel from "../../hooks/useRegisterModel";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
  const loginModel = useLoginModel();
  const registerModal = useRegisterModel();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModel.onOpen();
  }, [isLoading, registerModal, loginModel]);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);
      // TODO: ADD Login and Register

      // Now using our zustand store here
      registerModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} value={email} />
      <Input placeholder="Name" onChange={(e) => setName(e.target.value)} disabled={isLoading} value={name} />
      <Input placeholder="UserName" onChange={(e) => setUsername(e.target.value)} disabled={isLoading} value={username} />
      <Input placeholder="Password" onChange={(e) => setPaswword(e.target.value)} disabled={isLoading} value={password} />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
          {" "}
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
