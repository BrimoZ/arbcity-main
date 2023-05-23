import Winner from "./Winner";
import Ez from "@/public/ez.svg";

const getRandomScore = () => {
  return Math.floor(Math.random() * 1400) + 100;
};

export default function LatestWinners() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-[#EC6A98] text-2xl whitespace-nowrap mb-2">
          Latest Winners
        </h4>
        <button className="bg-pink hover:bg-light-pink text-white px-4 rounded-2xl shadow-lg transition">
          History
        </button>
      </div>

      <div className="overflow-hidden mt-2">
        <div className="overflow-x-auto flex justify-between items-center gap-2 scrollbar-hide">
          {Array.from({ length: 8 }, () => (
            <Winner
              key={Math.random()}
              address="0x1...3946"
              score={getRandomScore()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
