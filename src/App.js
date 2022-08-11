import React, { useState } from "react";
import {
  BinarySearchTreeNode,
  drawBinaryTree,
  VisualizationType,
  setTheme
} from "binary-tree-visualizer";

export const App = () => {
  const [rootNode, setRootNode] = useState(0);
  const [node, setNode] = useState(0);
  const [nodes, setNodes] = useState([]);

  function handleSubmit(values) {
    values.preventDefault();
    setTheme({
      radius: 20,
      fontSize: 12
    });
    // set the value for the root node using the useState hook
    const root = new BinarySearchTreeNode(rootNode);
    //  set the nodes
    nodes.forEach((num) => root.insert(num));

    // display the tree in the canvas html tag in the index.html file
    drawBinaryTree(root, document.querySelector("canvas"), {
      type: VisualizationType.HIGHLIGHT
    });
    setRootNode(0);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7%",
          width: "100%"
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
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
            Add node
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Root:
            <input
              type="text"
              value={rootNode}
              onChange={(e) => setRootNode(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <label for="">{"Nodes: " + nodes.map((node) => node.toString() + " ")}</label>
      </div>
    </>
  );
};
