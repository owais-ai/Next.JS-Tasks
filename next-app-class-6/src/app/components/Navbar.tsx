import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className="bg-blue-950 pb-2 text-white flex justify-between text-center pt-3">
        <div className="ml-36 flex">
          <Image src="/phone.png" alt="phone-icon" width={22} height={1} />
          Download App via SMS
        </div>
        <div className="mr-36">Sign In | Sign Up</div>
      </div>
      <div className="bg-blue-950">
        <div className="h-px bg-gray-500 justify-center mx-36"></div>
      </div>

      <div className="h-28 bg-blue-950 text-white flex justify-center items-center gap-32">
        <Image src="/logo.png" alt="logo" width={200} height={50} />
        <ul className="flex gap-6">
          <li>New Cars</li>
          <li>Used Cars</li>
          <li>Bikes</li>
          <li>Auto Store</li>
          <li>videos</li>
          <li>Blogs</li>
          <li>Forums</li>
          <li>More</li>
          <button className="h-8 w-32 rounded text-white bg-red-700">
            Post an Add
          </button>
        </ul>
      </div>
    </nav>
  );
}
