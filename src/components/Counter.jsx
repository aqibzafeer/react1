// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => {
//     if (count > 0) setCount(count - 1);
//   };
//   const handleReset = () => setCount(0);

//   return (
//     <div className="bg-red-50 sm:w-1/2 w-full rounded-lg p-8 m-5 text-center flex flex-col min-h-[100px] shadow-md">
//       <h1 className="text-4xl font-extrabold text-gray-800 hover:text-red-900 py-5">
//         Counter
//       </h1>

//       <h2 className="text-5xl font-bold text-gray-700 py-5 animate-bounce">
//         {count}
//       </h2>

//       <div className="flex flex-col gap-5 mt-5">
//         <button
//           className="bg-[#a00] text-white hover:bg-red-600 disabled:bg-gray-400 px-5 py-3 rounded-lg transition-all"
//           onClick={handleIncrement}
//         >
//           Increment
//         </button>

//         <button
//           className="bg-[#a00] text-white hover:bg-red-600 disabled:bg-gray-400 px-5 py-3 rounded-lg transition-all"
//           onClick={handleDecrement}
//           disabled={count === 0}
//         >
//           Decrement
//         </button>

//         <button
//           className="bg-[#a00] text-white hover:bg-red-600 px-5 py-3 rounded-lg transition-all"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => setCount(0);

  let headingText = "Let's Start Counting!";
  let headingColor = "text-gray-700";

  if (count >= 1 && count < 2) {
    headingText = "Heading 1!";
    headingColor = "text-blue-600";
  } else if (count >= 2 && count < 3) {
    headingText = " Heading 2";
    headingColor = "text-green-600";
  } else if (count >= 3 && count < 4) {
    headingText = " Heading  3!";
    headingColor = "text-purple-600";
  } else if (count >= 4 && count < 5) {
    headingText = "Heading 4";
    headingColor = "text-yellow-600";
  } else if (count >= 5 && count < 6) {
    headingText = "Heading 5";
    headingColor = "text-pink-600";
  } else if (count >= 6 && count < 7) {
    headingText = "Heading  6";
    headingColor = "text-indigo-600";
  } else if (count >= 7 && count < 8) {
    headingText = "Heading 7";
    headingColor = "text-teal-600";
  } else if (count >= 8 && count < 9) {
    headingText = "Heading 8";
    headingColor = "text-orange-600";
  } else if (count >= 9 && count < 16) {
    headingText = "Heading 9 - Heading 15";
    headingColor = "text-red-600";
  } else if (count === 10) {
    headingText = "Heading 10";
    headingColor = "text-green-700";
  }

  const buttonClasses =
    "bg-[#a00] text-white hover:bg-red-950 px-5 py-3 rounded-lg transition-all disabled:bg-red-900";

  return (
    <div className="bg-red-50 sm:w-1/2 m-5 w-full rounded-lg p-10  text-center flex flex-col min-h-[100px] shadow-md">
      <h1 className={`text-2xl font-bold text-red-900 ${headingColor} mb-3`}>
        {headingText}
      </h1>

      <h2 className="text-5xl font-bold text-gray-700 py-5 animate-bounce">
        {count}
      </h2>

      <div className="flex flex-col gap-5 mt-5">
        <button
          className={buttonClasses}
          onClick={handleIncrement}
          disabled={count === 15}
        >
          Increment
        </button>

        <button
          className={buttonClasses}
          onClick={handleDecrement}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button className={buttonClasses} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
