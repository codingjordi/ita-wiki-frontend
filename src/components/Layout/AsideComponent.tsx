import { useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import { useUserContext } from "../../context/UserContext";
import classNames from "classnames";
import BookmarkFigmaIcon from "../../icons/BookmarkFigmaIcon";
import CreatedFigmaIcon from "../../icons/CreatedFigmaIcon";
import SearchComponent from "./header/SearchComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import LoginModal from "../Modal/LoginModal";

const AsideComponent: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [resource] = useState("");
  const { user } = useUserContext();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    navigate(`?${params.toString()}`);
  };

  const isPathActive = (path: string) => {
    return currentPath === path;
  };

  const handleProtectedClick = (path: string) => {
    if (user) {
      navigate(path);
    } else {
      setRedirectPath(path);
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);

    if (user && redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    }
  };

  return (
    <aside className="flex flex-col px-6 lg:w-56 py-4">
      <SearchComponent
        onSearch={handleSearch}
        resetTrigger={resource}
      />
      <LoginModal visible={isLoginModalOpen} onClose={handleLoginModalClose} />
      <section>
        <ButtonComponent
          className="my-5"
          type="button"
          variant="primary"
          onClick={() => handleProtectedClick("/resources/add")}
        >
          Crear recurso
        </ButtonComponent>
      </section>

      <section>
        <ul className="py-6 space-y-3">
          <li className="flex items-center space-x-3 mb-5">
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
                "text-gray-400": !isPathActive("/resources/React"),
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
                "text-gray-400": !isPathActive("/pruebas-tecnicas"),
              })}
            >
              Pruebas técnicas
            </Link>
          </li>
        </ul>
      </section>

      <section className="py-6">
        <p className="pb-3 font-bold text-lg mb-2 text-black">Mis recursos</p>

        <div className="flex items-center space-x-3 py-1 mb-4 cursor-pointer">
          <BookmarkFigmaIcon
            className={classNames("w-6 h-6", {
              "text-primary": isPathActive("/resources/bookmarks"),
              "text-gray-600": !isPathActive("/resources/bookmarks"),
            })}
          />
          <div
            onClick={() => handleProtectedClick("/resources/bookmarks")}
            className={classNames("transition-colors", {
              "!text-black !font-bold": isPathActive("/resources/bookmarks"),
              "text-gray-700": !isPathActive("/resources/bookmarks"),
            })}
          >
            Guardados
          </div>
        </div>

        <div className="flex items-center space-x-3 py-1 cursor-pointer">
          <CreatedFigmaIcon
            className={classNames("w-6 h-6", {
              "text-primary": isPathActive("/resources/my-resources"),
              "text-gray-600": !isPathActive("/resources/my-resources"),
            })}
          />
          <div
            onClick={() => handleProtectedClick("/resources/my-resources")}
            className={classNames("transition-colors", {
              "!text-black !font-bold": isPathActive("/resources/my-resources"),
              "text-gray-700": !isPathActive("/resources/my-resources"),
            })}
          >
            Creados
          </div>
        </div>
      </section>
    </aside>
  );
};

export default AsideComponent;
