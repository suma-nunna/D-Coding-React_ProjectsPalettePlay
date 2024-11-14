import { useState } from "react";

function App() {
  const [color, setColor] = useState("White");
  const [textColor, setTextColor] = useState("Black");

  const colorArr = ["Red", "Pink", "Blue", "Teal", "Orange", "Olive", "gray"];

  return (
    <>
      <div
        className="w-screen h-screen text-black"
        style={{
          background: color,
          color: textColor,
        }}
      >
        <nav className="flex items-center justify-between px-8">
          <div>
            <img src="../src/assets/N-Logo.svg" alt="" className="h-8" />
          </div>
          <div className="flex">
            <a href="" className="px-4">
              About
            </a>
            <a href="" className="px-4">
              List
            </a>
          </div>
          <div className="flex"></div>
        </nav>
        <div className="w-4/5 fixed bg-white m-2 bottom-4 left-1/2 transform -translate-x-1/2 rounded-full text-center">
          {colorArr.map((clr) => {
            return (
              <button
                className="font-bold py-2 px-4 my-2 mx-1 rounded-full shadow"
                style={{
                  background: clr,
                }}
                onClick={() => setColor(clr)}
              >
                {clr}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
