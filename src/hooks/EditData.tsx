import { Axios } from '@/utils/Axios';

export const EditData = async (Id: string, endpoint: string, data: any) => {
    try {
        const response = await Axios.put(`/api/${endpoint}?id=${Id}`, data);

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error('Failed to edit data:', error);
        throw error;
    }
};
