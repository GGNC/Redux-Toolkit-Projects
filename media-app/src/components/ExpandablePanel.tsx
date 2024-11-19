import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface ExpandablePanelProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

function ExpandablePanel({ header, children }: ExpandablePanelProps) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="p-2 flex justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="cursor-pointer" onClick={handleClick}>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
