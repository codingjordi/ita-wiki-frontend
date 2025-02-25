import { FC } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateResourcePage from "./pages/CreateResourcePage";
import moock from "./moock/resources.json"
import avatarPost from "./assets/avatar_post.svg"
import { ListResources } from "./components/resources/ListResources";
import HeaderComponent from "./components/layout/HeaderComponent";
import AsideComponent from "./components/layout/AsideComponent";

const App: FC = () => {

  return (
    <div className="bg-[#ebebeb] p-6">
      <HeaderComponent />
      <div className="flex">
        <AsideComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ListResources resources={moock.resources.map(res => {
            return (
              {
                ...res,
                user: {
                  ...res.user,
                  photoURL: avatarPost
                }
              }
            )
          })} nameResource="React.js" />} />
          <Route path="/resource/add" element={<CreateResourcePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
