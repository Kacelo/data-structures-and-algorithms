import React, { useState } from 'react';
import {
	BinarySearchTreeNode,
	drawBinaryTree,
	VisualizationType,
	setTheme,
} from 'binary-tree-visualizer';

const BinarySearchTree = () => {
	const [rootNode, setRootNode] = useState(0);
	const [node, setNode] = useState(0);
	const [nodes, setNodes] = useState([]);

	function handleSubmit(values) {
		values.preventDefault();
		setTheme({
			radius: 20,
			fontSize: 12,
		});
		// set the value for the root node using the useState hook
		const root = new BinarySearchTreeNode(rootNode);
		//  set the nodes
		nodes.forEach((num) => root.insert(num));

		// display the tree in the canvas html tag in the index.html file
		drawBinaryTree(root, document.querySelector('canvas'), {
			type: VisualizationType.HIGHLIGHT,
		});
		setRootNode(0);
	}
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '3%',
					width: '100%',
				}}
			>
				<div>
					<input
						type="text"
						value={node}
						onChange={(e) => setNode(e.target.value)}
					/>
					<button
						onClick={() => {
							nodes.push(parseInt(node));
							console.log(nodes);
							setNode(0);
						}}
					>
						Add Node
					</button>
				</div>

				<form onSubmit={handleSubmit} style={{ margin: '1%' }}>
					<label>
						Root:
						<input
							type="text"
							value={rootNode}
							onChange={(e) => setRootNode(e.target.value)}
						/>
					</label>
					<input type="submit" value="Generate Tree" />
				</form>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<label for="">
					{'Nodes: ' + nodes.map((node) => node.toString() + ' ')}
				</label>
			</div>
		</>
	);
};

export default BinarySearchTree;
