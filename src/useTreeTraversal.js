const useTreeTraversal = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
    }

    let latestTree = [];
    latestTree = tree.items.map((child) => {
      return insertNode(child, folderId, item, isFolder);
    });

    return { ...tree, items: latestTree };
  };
  return { insertNode };
};

export default useTreeTraversal;
