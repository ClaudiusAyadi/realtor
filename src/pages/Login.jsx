import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";

export default function Login({ isVisible, onClose }) {
  const [formData, setFormData] = useState({ email: "" });
  const { email } = formData;

  function handleInput(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  if (!isVisible) return null;

  function handleClose(e) {
    if (e.target.id === "overlay") onClose();
  }

  return (
    <section className="overlay" id="overlay" onClick={handleClose}>
      <div className="max-w-md mx-auto bg-white bg-clip-padding rounded-2xl shadow-md overflow-hidden outline-none px-6 py-8 mt-12 z-50">
        <div className="flex gap-6 justify-between items-center mb-8 ">
          <h2 className="text-xl md:text-2xl font-bold">
            Log in or create an account
          </h2>
          <button>
            <VscChromeClose
              className="min-w-[24px] min-h-[24px] cursor-pointer"
              onClick={() => onClose()}
            />
          </button>
        </div>

        <form className="flex flex-col">
          <label htmlFor="email">
            <div className="flex justify-between gap-4 text-sm mb-1">
              <span>Email</span>
              <span className="text-gray-500">required</span>
            </div>
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Enter your email address"
              required
              className="border border-gray-500 w-full rounded-lg transition-all min-h-[40px] px-4"
              onChange={handleInput}
            />
          </label>
          <button className="bg-base text-white font-medium rounded-[40px] min-h-[48px] w-full px-6 mt-6 mb-2 hover:opacity-80 transition-all ease-in-out">
            Continue
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-500 font-medium rounded-[40px] min-h-[48px] w-full px-6 hover:bg-base hover:text-white transition-all ease-out">
            <FcGoogle className="min-w-[32px] min-h-[32px]" />
            <span>Continue with Google</span>
          </button>
        </form>
      </div>
    </section>
  );
}
