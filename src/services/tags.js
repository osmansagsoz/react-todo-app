const tagsUrl = `${process.env.REACT_APP_TODO_API_BASE_URL}/tags`;

export const createTag = async ({ name }) => {
  // 🚫 Generate ID here, but it should always be in the server!
  const id = new Date().toISOString();

  const result = await fetch(tagsUrl, {
    body: JSON.stringify({ id, name }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
  });

  const data = await result.json();
  return data;
};

export const getAllTags = async () => {
  const result = await fetch(tagsUrl);
  const data = await result.json();
  return data;
};
