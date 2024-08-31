import { Axios } from "@/utils/Axios";
import axios from "axios";

export const postData = async ({ endpoint, data }: { endpoint: string, data: any }) => {
    try {
        const response = await axios.post(endpoint, data);
        console.log(response)
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error posting data: ${error.response.status} - ${error.response.statusText}`);
            throw new Error(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            console.error('Error posting data: No response received');
            throw new Error('Error: No response received');
        } else {
            console.error('Error posting data:', error.message);
            throw new Error(`Error: ${error.message}`);
        }
    }
};