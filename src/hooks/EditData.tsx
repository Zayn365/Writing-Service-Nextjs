import { toast } from 'react-toastify';
import axios from "axios";
const BASE_URL = "https://write-articles-for-me.vercel.app/";

export const EditData = async (Id: string, endpoint: string, data: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/${endpoint}?id=${Id}`, data);
        toast.success("upated!!")
        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error('Failed to edit data:', error);
        throw error;
    }
};
