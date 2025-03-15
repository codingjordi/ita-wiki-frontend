const API_URL = import.meta.env.VITE_API_URL;

type EndPoints = "resources/" | "users/lists" | "roles/";

const END_POINTS = {
  resources: {
    lists: "resources/" as EndPoints,
    post: "resources/" as EndPoints,
  },
  roles: {
    lists: "users/user-signedin-as?github_id=" as EndPoints,
    post: "roles/" as EndPoints,
  }
};

export { API_URL, END_POINTS };
