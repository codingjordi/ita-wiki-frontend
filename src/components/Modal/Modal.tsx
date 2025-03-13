import GItHubLogin from '../github-login/GItHubLogin';
import { useCtxUser } from '../../hooks/useCtxUser';

interface ModalProps {
  closeModal: () => void;
}
export const Modal = ({ closeModal }: ModalProps) => {
  const { signIn, error } = useCtxUser();

  return (
    <>
      <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
        <div className="bg-white p-6 rounded-2xl w-[35%] h-[30%] relative">
          <button
            className="absolute top-4 right-4 text-xl font-bold text-gray-600"
            onClick={closeModal}>
            X
          </button>
          <div className="flex flex-col justify-center items-center w-full mt-10">
            <h2 className="text-xl font-bold font-semibold mb-10 ">Inicio de sesión</h2>

            <GItHubLogin onClick={signIn} />

            <label
              htmlFor="terms"
              className="block my-6">
              <input
                name="terms"
                type="checkbox"
              />
              Acepto términos legales
            </label>

            {error && <div className="text-red-500 my-4">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};
