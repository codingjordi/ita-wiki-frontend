import { useState } from "react";
import ButtonComponent from "../components/atoms/ButtonComponent";
import { IntResource } from "../types";
import { API_URL, END_POINTS } from "../config";

import { useUser } from "../hooks/useUser";

export default function CreateResourcePage() {
  const { user } = useUser();

  const [formData, setFormData] = useState({
    github_id: user?.id,
    title: "",
    description: "",
    url: "",
  });

  const handleChangeFormData = (updatedField: Partial<IntResource>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...updatedField,
    }));
    console.log(JSON.stringify(updatedField, null, 2));
  };

  const handleSubmitFormData = async () => {
    const newResource = { ...formData };
    alert(JSON.stringify(newResource, null, 2));
    try {
      const response = await fetch(`${API_URL}${END_POINTS.resources.post}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
        body: JSON.stringify(newResource),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    } catch (_error) {
      alert("Hubo un error");
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-semibold">Nuevo recurso</h1>
      <form className="my-5 space-y-3.5 w-1/2 bg-white p-10 rounded-xl">
        <div>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleChangeFormData({ title: e.target.value })}
            placeholder="Título"
            className="w-full px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]"
          />
        </div>

        <div>
          <input
            name="description"
            value={formData.description}
            onChange={(e) =>
              handleChangeFormData({ description: e.target.value })
            }
            type="text"
            id="description"
            placeholder="Description"
            className="w-full px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]"
          />
        </div>

        <div>
          <input
            name="URL"
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => handleChangeFormData({ url: e.target.value })}
            placeholder="URL"
            className="w-full px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]"
          />
        </div>

        {/* <select
          name="topic"
          id=""
          className='w-full px-6 py-4 border border-[#dddddd] rounded-lg placeholder:font-medium outline-[#B91879]'
        >
          <option value="" className='font-black text-red-500'>Tema</option>
          <option value="Node">Node</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Fullstack PHP">Fullstack PHP</option>
          <option value="Data Science">Data Science</option>
          <option value="BB.DD.">BB.DD.</option>
        </select> */}

        {/* <div className='flex justify-around'>
          <label htmlFor='video' className='flex items-center'>
            Video
            <input
              type="radio"
              name="type"
              value="video"
              id="video"
              onClick={(e) => {
                const input = e.target as HTMLInputElement; 
                handleChangeFormData({ type: input.checked ? "video" : "" });
              }}
              className="w-6 h-6 ml-1 accent-[#B91879] outline-black"
            />
          </label>
          <label htmlFor='curso' className='flex items-center'>
            Curso
            <input
              type="radio"
              name="type"
              value="curso"
              id="curso"
              onClick={(e) => {
                const input = e.target as HTMLInputElement; 
                handleChangeFormData({ type: input.checked ? "curso" : "" });
              }}
              className="w-6 h-6 ml-1 accent-[#B91879] outline-black"
            />
          </label>
          <label htmlFor='blog' className='flex items-center'>
            Blog
            <input
              type="radio"
              name="type"
              value="blog"
              id="blog"
              onClick={(e) => {
                const input = e.target as HTMLInputElement; 
                handleChangeFormData({ type: input.checked ? "blog" : "" });
              }}
              className="w-6 h-6 ml-1 accent-[#B91879] outline-black"
            />
          </label>
        </div> */}

        <div className="mt-12">
          <ButtonComponent
            className="outline-[#B91879]"
            children="Crear"
            variant="primary"
            onClick={() => handleSubmitFormData()}
          />
          <ButtonComponent
            className="outline-[#B91879]"
            children="Cancelar"
            variant="secondary"
          />
        </div>
      </form>
    </div>
  );
}
