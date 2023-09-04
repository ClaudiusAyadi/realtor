import close from "../assets/close.svg";

export default function Login() {
  return (
    <section className="overlay">
      <div className="max-w-md mx-auto bg-white bg-clip-padding rounded-2xl shadow-md overflow-hidden outline-none px-6 py-4 -mt-[100%]">
        <div className="flex gap-6 justify-between items-center py-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Log in or create an account
          </h2>
          <button>
            <img src={close} alt="Close icon" className="min-w-[24px]" />
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
              placeholder="Enter your email address"
              required
              className="border border-gray-500 w-full rounded-lg transition-all min-h-[40px] px-4"
            />
          </label>
          <button className="bg-base text-white font-medium rounded-[40px] h-12 w-full px-6 mt-6 ">
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
