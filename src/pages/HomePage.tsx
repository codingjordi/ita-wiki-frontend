import folder from "../assets/new-folder-dynamic-color.svg";
import puzzle from "../assets/puzzle-dynamic-color.svg";
import ok from "../assets/thumb-up-dynamic-color.svg";
import { useCallback } from "react";
import ButtonComponent from "../components/atoms/ButtonComponent";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router";
import PageTitle from "../components/ui/PageTitle";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/resources/React");
  }, []);

  return (
    <>
      <PageTitle title="" />
      <main className="bg-white rounded-xl flex flex-col items-center justify-center w-full mx-6 gap-10 p-10 md:p-6 mb-6 text-center">
        <h1 className="font-bold text-3xl">
          ¡Bienvenid@ a la wiki de la IT Academy!
        </h1>
        <section>
          <div className="w-full flex flex-col items-center justify-center gap-10">
            <div>
              <ButtonComponent onClick={handleNavigate}>
                Ver Recursos
              </ButtonComponent>
            </div>
            <h2>Funcionalidades básicas que te ofrece esta plataforma:</h2>
            <section className="flex flex-col gap-8 items-center md:items-stretch md:flex-row">
              <Card
                number={1}
                imageSource={folder}
                imageAlt="folder"
                title="Guarda tus recursos favoritos"
                text="Ten tus recursos bien organizados"
              />
              <Card
                number={2}
                imageSource={puzzle}
                imageAlt="puzzle"
                title="Colabora con tus compañer@s"
                text="Recursos compartidos"
              />
              <Card
                number={3}
                imageSource={ok}
                imageAlt="ok"
                title="Vota los recursos"
                text="La comunidad decide cuáles son más relevantes"
              />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
