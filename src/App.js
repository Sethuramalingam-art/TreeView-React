import logo from "./logo.svg";
import "./App.css";
import data from "../src/treeView";
import FileTreeView from "../src/FileTreeView";
import useTraverseTree from "../src/hooks/useTreeTraversal";

function App() {
  const { insertNode } = useTraverseTree();

  const handleAddNode = (folderId, itemName, isFolder) => {
    insertNode(data, folderId, itemName, isFolder);
  };

  return (
    <div className="App">
      <header className="App-header">Revision LLD - Folder Tree View</header>
      <FileTreeView data={data} onAddNode={handleAddNode} />
    </div>
  );
}

export default App;
