import React from "react";
import { Link } from "react-router-dom";

function TempTree({ treeArr, getMenu, Tree, setShowMenu }) {
	if (treeArr["parent_id"] === 0) {
		return (
			<Tree
				name={
					<Link
						onClick={() => setShowMenu(false)}
						to={`/categories/${treeArr.id}`}
					>
						{treeArr.title}
					</Link>
				}
				defaultOpen
			>
				{treeArr["childs"] ? getMenu(treeArr["childs"]) : null}
			</Tree>
		);
	} else {
		return (
			<Tree
				name={
					<Link
						onClick={() => setShowMenu(false)}
						to={`/categories/${treeArr.id}`}
					>
						{treeArr.title}
					</Link>
				}
			>
				{treeArr["childs"] ? getMenu(treeArr["childs"]) : null}
			</Tree>
		);
	}
}

export default TempTree;
