import { Dispatch, SetStateAction, forwardRef, useRef } from "react";
import TabsHeaders from "./TabsHeaders";

export interface Tab {
  label: string;
  component: React.ComponentType;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onSetActiveTab: Dispatch<SetStateAction<string>>;
  rightSide?: React.ReactNode;
  [propName: string]: any;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs = [], activeTab = "", rightSide, onSetActiveTab, ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const renderTabComponent = () => {
      const tab = tabs.find((item) => item.label === activeTab);

      if (tab) {
        const Component = tab.component;
        return <Component />;
      }

      return null;
    };

    return (
      <div {...rest} ref={ref}>
        {/* Tab Headers */}
        <TabsHeaders
          tabs={tabs}
          activeTab={activeTab}
          onSetActiveTab={onSetActiveTab}
          rightSide={rightSide}
        />
        {/* Tab Component */}
        <div className="w-full h-full" ref={containerRef}>
          {renderTabComponent()}
        </div>
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
export default Tabs;
