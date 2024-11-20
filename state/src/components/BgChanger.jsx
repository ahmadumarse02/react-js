import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none bg-red-700 px-4 py-1 rounded-full text-white"
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("white");
              }}
              className="outline-none bg-white px-4 py-1 rounded-full text-black"
            >
              white
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none bg-green-700 px-4 py-1 rounded-full text-white"
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none bg-purple-700 px-4 py-1 rounded-full text-white"
            >
              purple
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none bg-orange-700 px-4 py-1 rounded-full text-white"
            >
              orange
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none bg-yellow-700 px-4 py-1 rounded-full text-white"
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("zinc");
              }}
              className="outline-none bg-zinc-700 px-4 py-1 rounded-full text-white"
            >
              zinc
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
