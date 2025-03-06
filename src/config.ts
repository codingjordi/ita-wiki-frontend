const API_URL = import.meta.env.VITE_API_URL;

type EndPoints = "resources" | "users";

const END_POINTS = {
  resources: {
    lists: "resources" as EndPoints,
  },
};

export { API_URL, END_POINTS };
