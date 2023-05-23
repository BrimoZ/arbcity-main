import { Dispatch, SetStateAction } from "react";
import { Tab } from "./Tabs";

interface TabsHeadersProps {
  tabs: Tab[];
  activeTab: string;
  onSetActiveTab: Dispatch<SetStateAction<string>>;
  rightSide?: React.ReactNode;
}

export default function TabsHeaders({
  tabs,
  activeTab,
  onSetActiveTab,
  rightSide,
}: TabsHeadersProps) {
  return (
    <div className="flex flex-row justify-between border-b border-white/20">
      <ul className="flex flex-row text-sm font-bold font-mulish overflow-x-auto md:overflow-x-visible scrollbar-hide">
        {tabs.map((item) => (
          <li
            id={item.label}
            key={item.label}
            onPointerDown={() => onSetActiveTab(item.label)}
            className={`cursor-pointer py-4 px-8 relative hover:bg-black-smooth tracking-widest ${
              activeTab === item.label
                ? "border-b border-light-pink text-light-pink"
                : "text-white"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="items-center px-4 hidden lg:flex">{rightSide}</div>
    </div>
  );
}
