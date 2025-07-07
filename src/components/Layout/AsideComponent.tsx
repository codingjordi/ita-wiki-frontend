import { useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";

import classNames from "classnames";
import { Bookmark, PenSquare } from "lucide-react";
import { useUserContext } from "../../context/UserContext";
import SearchComponent from "./header/SearchComponent";
import ButtonComponent from "../atoms/ButtonComponent";

const AsideComponent: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resource] = useState("");
  const isSearchDisabled = location.pathname === "/";
  const { user } = useUserContext();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    navigate(`?${params.toString()}`);
  };

  const goToResourcesPage = () => {
    navigate("/resources/add");
  };

  const isPathActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <aside className="flex flex-col px-6 lg:w-56">
      <SearchComponent
        onSearch={handleSearch}
        disabled={isSearchDisabled}
        resetTrigger={resource}
      />

      <section>
        <ButtonComponent
          className="mt-4"
          type="button"
          variant="primary"
          onClick={goToResourcesPage}
        >
          Crear recurso
        </ButtonComponent>
      </section>

      <section>
        <ul className="py-6 space-y-3">
          <li className="flex items-center space-x-3">
            <span
              className={classNames("w-3 h-3 rounded-full", {
                "bg-primary": isPathActive("/resources/React"),
                "bg-gray-400": !isPathActive("/resources/React"),
              })}
            />
            <Link
              to="/resources/React"
              className={classNames("transition-colors", {
                "!text-black !font-bold": isPathActive("/resources/React"),
                "text-gray-700": !isPathActive("/resources/React"),
              })}
            >
              Recursos
            </Link>
          </li>

          <li className="flex items-center space-x-3">
            <span
              className={classNames("w-3 h-3 rounded-full", {
                "bg-primary": isPathActive("/pruebas-tecnicas"),
                "bg-gray-400": !isPathActive("/pruebas-tecnicas"),
              })}
            />
            <Link
              to="/pruebas-tecnicas"
              className={classNames("transition-colors", {
                "!text-black !font-bold": isPathActive("/pruebas-tecnicas"),
                "text-gray-700": !isPathActive("/pruebas-tecnicas"),
              })}
            >
              Pruebas técnicas
            </Link>
          </li>
        </ul>
      </section>

      <section className="py-6">
        <p className="pb-3 font-bold text-lg mb-2">Mis recursos</p>

        <div className="flex items-center space-x-3 py-1 mb-4">
          <Bookmark size={25} />
          <Link
            to="/resources/bookmarks"
            className={classNames("transition-colors", {
              "!text-[var(--color-primary)] !font-bold": isPathActive(
                "/resources/bookmarks"
              ),
              "text-gray-700": !isPathActive("/resources/bookmarks"),
            })}
          >
            Guardados
          </Link>
        </div>

        <div className="flex items-center space-x-3 py-1">
          <PenSquare size={25} />
          <Link
            to="/resources/my-resources"
            className={classNames("transition-colors", {
              "!text-[var(--color-primary)] !font-bold": isPathActive(
                "/resources/my-resources"
              ),
              "text-gray-700": !isPathActive("/resources/my-resources"),
            })}
          >
            Creados
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default AsideComponent;
