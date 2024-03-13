import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [textColors, setTextColors] = useState({
    red: "white",
    green: "white",
    blue: "white",
    gray: "white",
    lavender: "white",
    pink: "white",
  });

  const handleColorChange = (newColor) => {
    // Reset all text colors to white
    const resetTextColors = {};
    for (const key in textColors) {
      resetTextColors[key] = "white";
    }

    setColor(newColor);
    setTextColors({
      ...resetTextColors,
      [newColor]: "black",
    });
  };

  return (
    <div
      className="w-full h-screen "
      style={{ backgroundColor: color , color: "white"}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => handleColorChange("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red", color: textColors["red"] }}
          >
            Red
          </button>
          <button
            onClick={() => handleColorChange("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green", color: textColors["green"] }}
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "pink", color: textColors["pink"] }}
          >
            Pink
          </button>
          <button
            onClick={() => handleColorChange("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow", color: textColors["yellow"] }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleColorChange("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue", color: textColors["blue"] }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
