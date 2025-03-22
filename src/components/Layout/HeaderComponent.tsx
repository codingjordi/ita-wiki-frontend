import { Link, useNavigate, useLocation, useSearchParams } from "react-router";
import logoItAcademy from "../../assets/LogoItAcademy.svg";
import addIcon from "../../assets/add.svg";
import settingsIcon from "../../assets/settings.svg";
import userIcon from "../../assets/user2.svg";
import ButtonComponent from "../atoms/ButtonComponent";
import { useCtxUser } from "../../hooks/useCtxUser";
import SearchComponnent from "./header/SearchComponnent";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const { user } = useCtxUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [resource, setResource] = useState("");

  const goToResourcesPage = () => {
    navigate("/resources/add");
  };

  const disabledSearch = () => location.pathname === "/";

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    navigate(`?${params.toString()}`);
  };

  useEffect(() => {
    const resourcePath =
      location.pathname.split("/resources/")[1]?.split("?")[0] || "";
    if (resourcePath !== resource) {
      setResource(resourcePath);
    }
  }, [location.pathname, resource]);

  return (
    <header className="hidden lg:flex bg-[#ebebeb] p-6 items-center justify-between">
      <Link to="/">
        <img src={logoItAcademy} alt="logo" width={"116px"} />
      </Link>
      <div className="flex">
        <SearchComponnent
          onSearch={handleSearch}
          disabled={disabledSearch()}
          resetTrigger={resource}
        />
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
    </header>
  );
};

export default HeaderComponent;
