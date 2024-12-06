import axios from 'axios'

export const API_SERVER = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";





//? CREATE **********************************************************************************/
export const createdRegistro = async (datax) => {
    const { data } = await axios.post(`${API_SERVER}registro/create`, datax, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  };
  

