import { IntResource } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resourceSchema } from "../validations/resourceSchema";
import ButtonComponent from "../components/atoms/ButtonComponent";
import { createResource } from "../api/endPointResources";
import { toast } from "sonner";

export default function CreateResourcePage() {

  /* const { user } = useUser() */

  const {register, handleSubmit, reset, formState: { errors }} = useForm<Partial<IntResource>>({
    resolver: zodResolver(resourceSchema),
  });

  return (
    <div className="w-full">
      <h1 className="font-semibold">Nuevo recurso</h1>
      <div className="flex justify-center mt-20 xl:mr-[198px]">
        <form
          onSubmit={handleSubmit(async (data: Partial<IntResource>) => {
            const resourceWithGithubId = {
              ...data,
              github_id: 2421919,
            };
            try {
              await createResource(resourceWithGithubId);
              toast.success("Recurso creado con éxito!");
              reset()
            } catch (error) {
              console.error("Error al crear el recurso:", error);
              toast.error("Hubo un error al crear el recurso...");
            }
          })}
          className="my-5 w-full lg:w-3/5 bg-white p-10 rounded-xl"
        >
          <div>
            <input
              type="text"
              id="title"
              placeholder="Título"
              className="w-full mb-1 px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879] "
              {...register("title")}
            />
            <div className="h-6">
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>
          </div>
  
          <div>
            <input
              type="text"
              id="description"
              placeholder="Descripción"
              className="w-full mb-1 px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]"
              {...register("description")}
            />
            <div className="h-6">
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description.message}</p>
              )}
            </div>
          </div>
  
          <div>
            <input
              type="text"
              id="url"
              placeholder="URL"
              className="w-full mb-1 px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]"
              {...register("url")}
            />
            <div className="h-6">
              {errors.url && (
                <p className="text-red-500 text-sm">{errors.url.message}</p>
              )}
            </div>
          </div>
  
          <div>
            <ButtonComponent
              className="outline-[#B91879]"
              children="Crear"
              variant="primary"
              type="submit"
            />
            <ButtonComponent
              className="outline-[#B91879]"
              children="Cancelar"
              variant="secondary"
              onClick={() => window.history.back()}
              />
          </div>
        </form>
      </div>
    </div>
  );
}
