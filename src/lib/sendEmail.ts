import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const response = await api.post("/send-email", {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Error desconocido");
  }
}
