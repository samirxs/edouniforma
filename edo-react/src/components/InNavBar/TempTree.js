import React from "react";

function TempTree({ treeArr, getMenu, Tree }) {
  if (treeArr['parent_id'] === 0) {
    return (
      <Tree name={treeArr.title} defaultOpen>
        {treeArr["childs"] ? getMenu(treeArr["childs"]) : null}
      </Tree>
    );
  } else {
    return (
      <Tree name={treeArr.title} >
        {treeArr["childs"] ? getMenu(treeArr["childs"]) : null}
      </Tree>
    );
  }
}

export default TempTree;
