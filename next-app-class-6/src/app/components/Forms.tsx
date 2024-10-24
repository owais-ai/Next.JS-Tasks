export default function Forms() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center uppercase my-5">
        Enter Your Details
      </h1>
      <div>
        <form className="flex flex-col justify-center items-center gap-5">
          <input
            type="email"
            className="border w-2/6 p-2 rounded-xl border-red-600"
            placeholder="Enter Your Email Address"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="border w-2/6 p-2 rounded-xl border-red-600"
          />
          <button className="bg-blue-700 rounded-lg py-3 px-7 text-white">Place your order</button>
        </form>
      </div>
    </div>
  );
}
