interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-2xl w-[35%] min-w-[300px] min-h-[35%] max-w-md text-center"
        onClick={handleContentClick}
      >
        <h2 className="text-xl font-semibold mb-6 mt-5 mx-2">
          Para acceder a esta sección necesitas iniciar sesión
        </h2>
        <button
          onClick={onClose}
          className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition mt-2"
        >
          De acuerdo
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
