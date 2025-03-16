import { Link, useNavigate } from "react-router";
import logoItAcademy from "../../assets/LogoItAcademy.svg";
import addIcon from "../../assets/add.svg";
import settingsIcon from "../../assets/settings.svg";
import userIcon from "../../assets/user2.svg";
import ButtonComponent from "../atoms/ButtonComponent";
import { useCtxUser } from "../../hooks/useCtxUser";
import SearchComponnent from "./header/SearchComponnent";
import { useState } from "react";
import { useSearchMatch } from "../../hooks/useResourceFilter"

const HeaderComponent = () => {
  const { user } = useCtxUser();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("")

  const goToResourcesPage = () => {
    navigate("/resources/add");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    useSearchMatch(searchQuery);
  };

  return (
    <header className="hidden lg:flex bg-[#ebebeb] p-6 items-center justify-between">
      <Link to="/">
        <img src={logoItAcademy} alt="logo" width={"116px"} />
      </Link>
      <div className="flex">
        <SearchComponnent onSearch={handleSearch} />
        {user && (
          <ButtonComponent
            icon={addIcon}
            variant="icon"
            onClick={goToResourcesPage}
          />
        )}
        <div className="flex justify-center items-center mx-2">
          <select
            title="lang"
            className="bg-white py-2 px-4 text-[#808080] rounded-lg border border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#808080] focus:border-transparent"
          >
            <option>ES</option>
            <option>EN</option>
          </select>
        </div>
        <ButtonComponent icon={settingsIcon} variant="icon" />
        <div className="mr-[-10px]">
          <ButtonComponent icon={userIcon} variant="icon" />
        </div>
      </div>
    </header >
  );
};

export default HeaderComponent;
