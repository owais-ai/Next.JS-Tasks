export default function Grid() {
    return (
      <div>
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
          <div className="bg-orange-600 h-full row-span-3"></div>
          <div className="bg-pink-600 h-20 col-span-2"></div>
          <div className="bg-yellow-600 h-20"></div>
          <div className="bg-green-600 h-20"></div>
          <div className="bg-red-600 h-20"></div>
          <div className="bg-black h-full row-span-2 "></div>
          <div className="bg-purple-600 h-20"></div>
          <div className="bg-blue-600 h-20"></div>
      </div>
      </div>
    );
  }
  