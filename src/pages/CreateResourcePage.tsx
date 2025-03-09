import { IntResource } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resourceSchema } from "../validations/resourceSchema";
import FormInput from "../components/FormInput";
import { createResource } from "../api/endPointResources";
import { toast } from "sonner";
import ButtonComponent from "../components/atoms/ButtonComponent";

export default function CreateResourcePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<IntResource>>({
    resolver: zodResolver(resourceSchema),
  });

  const onSubmit = async (data: Partial<IntResource>) => {
    const resourceWithGithubId = {
      ...data,
      github_id: 4967235,
    };

    try {
      await createResource(resourceWithGithubId);
      toast.success("¡Recurso creado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al crear el recurso:", error);
      toast.error("Hubo un error al crear el recurso");
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-semibold">Nuevo recurso</h1>
      <div className="flex justify-center mt-20 xl:mr-[198px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-5 w-full lg:w-3/5 bg-white p-10 rounded-xl"
        >
          <FormInput id="title" placeholder="Título" register={register} errors={errors.title?.message} />

          <FormInput id="description" placeholder="Descripción" register={register} errors={errors.description?.message} />

          <FormInput id="url" placeholder="URL" register={register} errors={errors.url?.message} />

          <div className="flex gap-4 mt-4">
            <ButtonComponent type="submit" variant="primary">Crear</ButtonComponent>
            <ButtonComponent variant="secondary" onClick={() => window.history.back()}>Cancelar</ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
}
