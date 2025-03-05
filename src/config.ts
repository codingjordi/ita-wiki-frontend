const API_URL = import.meta.env.VITE_API_URL;

type EndPoints = "resources/" | "resources/lists" | "users/lists";

const END_POINTS = {
  resources: {
    lists: "resources/lists" as EndPoints,
    post: "resources/" as EndPoints,
  },
};

export { API_URL, END_POINTS };
