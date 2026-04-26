import React, { useState } from "react";

const FileTreeView = ({ data, onAddNode }) => {
  console.log("data: ", data);
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState({ show: false, isFolder: false });

  const handleAddFolder = (e) => {
    e.stopPropagation();
    setShowInput({ show: true, isFolder: true });
    setIsOpen(true);
  };

  const handleAddFile = (e) => {
    e.stopPropagation();
    setShowInput({ show: true, isFolder: false });
    setIsOpen(true);
  };

  if (data.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setIsOpen(!isOpen)}>
          <div>
            <i className={`fa ${isOpen ? "fa-folder-open" : "fa-folder"}`}></i>
            {data.name}
          </div>
          <div>
            <button style={{ marginLeft: "auto" }} onClick={handleAddFolder}>
              Folder +
            </button>
            <button style={{ marginLeft: "auto" }} onClick={handleAddFile}>
              File +
            </button>
          </div>
        </div>
        <div
          style={{
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            paddingLeft: "20px",
          }}
        >
          {showInput.show && (
            <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
              {showInput.isFolder ? (
                <i className="fa fa-folder"></i>
              ) : (
                <i className="fa fa-file"></i>
              )}
              <input
                type="text"
                placeholder={showInput.isFolder ? "Folder Name" : "File Name"}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, show: false })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // Handle adding new folder or file to the tree
                    onAddNode(data.id, e.target.value, showInput.isFolder);
                    setShowInput({ ...showInput, show: false });
                  }
                }}
              />
            </div>
          )}

          {data.items.map((item) => {
            return item.isFolder ? (
              <FileTreeView key={item.id} data={item} onAddNode={onAddNode} />
            ) : (
              <div className="file" key={item.id}>
                <i className="fa fa-file"></i>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file">{data.name}</div>;
  }
};

export default FileTreeView;
