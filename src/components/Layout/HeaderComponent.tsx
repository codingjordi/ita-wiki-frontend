import { Link, useNavigate, useLocation, useSearchParams } from "react-router";
import logoItAcademy from "../../assets/LogoItAcademy.svg";
import addIcon from "../../assets/add.svg";
import settingsIcon from "../../assets/settings.svg";
import userIcon from "../../assets/user2.svg";
import ButtonComponent from "../atoms/ButtonComponent";
import { useCtxUser } from "../../hooks/useCtxUser";
import SearchComponnent from "./header/SearchComponnent";
import { useState, useEffect } from 'react';

const HeaderComponent = () => {
  const { user } = useCtxUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();


  const [searchQuery, setSearchQuery] = useState("")

  const goToResourcesPage = () => {
    navigate("/resources/add");
  };
  const disabledSearch = () => location.pathname === '/';


  useEffect(() => {
    const searchFromUrl = searchParams.get("search") || "";
    if (searchFromUrl !== searchQuery) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);


  // useEffect(() => {
  // console.log("params");
  //    searchParams.toString();
  // }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Guardar todos los parámetros actuales, incluyendo search
    const params = new URLSearchParams(window.location.search);
    params.set('search', query);  // Aseguramos que el parámetro `search` siempre se mantenga

    navigate(`?${params.toString()}`);
  };

  return (
    <header className="hidden lg:flex bg-[#ebebeb] p-6 items-center justify-between">
      <Link to="/">
        <img src={logoItAcademy} alt="logo" width={"116px"} />
      </Link>
      <div className="flex">
        <SearchComponnent onSearch={handleSearch} disabled={disabledSearch()} />
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
