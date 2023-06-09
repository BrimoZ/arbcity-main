import { AiOutlineArrowDown } from "react-icons/ai";

export default function StakingPoolsFilter({
  totalPools,
}: {
  totalPools: number;
}) {
  return (
    <div className="flex flex-row items-center justify-between mt-4">
      <div className="flex flex-row items-center gap-2">
        <h4 className="text-blue text-lg sm:text-xl tracking-wider text-shadow">
          Active Pools ({totalPools})
        </h4>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <h4 className="text-pink text-lg sm:text-xl tracking-wider">
          Joined Pools
        </h4>
      </div>
      <div className="flex flex-col">
        <h4 className="text-blue text-lg sm:text-xl tracking-wider text-shadow">
          Sort by
        </h4>
        <span className="flex items-center text-light-pink">
          TVL <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
}
