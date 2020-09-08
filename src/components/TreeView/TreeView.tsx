import React from "react";

interface TreeViewProps {
  data: string[];
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="tree-view">
      <div className="tree-view__content">
        {data.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};

export default TreeView;
