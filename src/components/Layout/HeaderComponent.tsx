import { Link, useNavigate, useLocation } from "react-router";
import logoItAcademy from "../../assets/LogoItAcademy.svg";
import addIcon from "../../assets/add.svg";
import userIcon from "../../assets/user2.svg";
import ButtonComponent from "../atoms/ButtonComponent";
import { useCtxUser } from "../../hooks/useCtxUser";

import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import GitHubLogin from "../github-login/GitHubLogin";
import { AddUsersModal } from "../resources/AddUserModal";
import { getUserRole } from "../../api/userApi";

const HeaderComponent = () => {
  const { user, signIn } = useCtxUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [resource, setResource] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const goToResourcesPage = () => {
    navigate("/resources/add");
  };

  useEffect(() => {
    const resourcePath =
      location.pathname.split("/resources/")[1]?.split("?")[0] || "";
    if (resourcePath !== resource) {
      setResource(resourcePath);
    }
  }, [location.pathname, resource]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAddUserModal = () => setIsAddUserModalOpen(true);
  const closeAddUserModal = () => setIsAddUserModalOpen(false);

  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (user && user.id) {
      getUserRole(user.id)
        .then((roleData) => {
          setUserRole(roleData || null);
        })
        .catch((err) => {
          console.error("Error fetching role:", err);
          setUserRole(null);
        });
    } else {
      setUserRole(null);
    }
  }, [user]);

  const hasPermission = userRole
    ? ["superadmin", "admin", "mentor"].includes(userRole)
    : false;

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!isChecked) {
      setLoginError(true);
      return;
    }
    setIsLoading(true);
    try {
      await signIn();
      setIsModalOpen(false);
    } catch {
      setLoginError(true);
    }
    setIsLoading(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setLoginError(false);
  };

  return (
    <header className="hidden lg:flex py-4 px-6 items-center justify-between">
      <Link to="/">
        <img src={logoItAcademy} alt="logo" width={"116px"} />
      </Link>

      <div className="flex gap-2 items-center">
        {hasPermission && (
          <ButtonComponent
            onClick={openAddUserModal}
            icon={addIcon}
            variant="icon"
            text="Añadir Usuario"
          ></ButtonComponent>
        )}

        {user && (
          <ButtonComponent
            icon={addIcon}
            variant="icon"
            onClick={goToResourcesPage}
          />
        )}
        <div className="flex justify-center items-center">
          <select
            title="lang"
            className="bg-white p-2 text-[#808080] rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-[#808080] focus:border-transparent"
          >
            <option>ES</option>
            <option>EN</option>
          </select>
        </div>
        <div>
          <ButtonComponent
            icon={userIcon}
            variant="icon"
            text={user ? "" : "Iniciar sesión"}
            onClick={openModal}
          />
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal} title="Inicio de sesión">
            <GitHubLogin onClick={handleSignIn} isLoading={isLoading} />
            <label
              htmlFor="terms"
              className=" flex items-center gap-2 mt-8 cursor-pointer font-medium text-[1rem]"
            >
              <input
                name="terms"
                id="terms"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
                className="hidden"
              ></input>
              <div
                className={`w-5 h-5 flex items-center justify-center rounded border ${
                  isChecked
                    ? "bg-[#B91879] border-[#B91879]"
                    : "border-gray-400"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>
              Acepto <u>términos legales</u>
            </label>
            {loginError && (
              <div className="">
                <div className="text-red-500 text-[1rem] mt-8 text-center font-medium">
                  Lo sentimos, no se ha podido iniciar sesión,
                  <br /> contacte con el administrador
                </div>
              </div>
            )}
          </Modal>
        )}
        {isAddUserModalOpen && hasPermission && (
          <AddUsersModal
            onClose={closeAddUserModal}
            userRole={userRole}
            userID={user.id}
          />
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
