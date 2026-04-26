const data = {
  id: 1,
  name: "Root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "Folder 1",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "Folder 1.1",
          isFolder: true,
          items: [
            {
              id: 11,
              name: "File 1",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 4,
          name: "File 1",
          isFolder: false,
          items: [],
        },
        {
          id: 5,
          name: "File 2",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 6,
      name: "Folder 2",
      isFolder: true,
      items: [
        {
          id: 7,
          name: "File 3",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 9,
      name: "File 4",
      isFolder: false,
      items: [],
    },
    {
      id: 10,
      name: "File 5",
      isFolder: false,
      items: [],
    },
  ],
};

export default data;
