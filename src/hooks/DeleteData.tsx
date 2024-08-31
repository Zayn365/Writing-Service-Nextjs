import { Axios } from '@/utils/Axios';

export const DeleteData = async (Id: string) => {
    try {
        const response = await Axios.delete(`/api/faqs?id=${Id}`);

        if (response.status !== 200) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.data;
    } catch (error) {
        console.error('Failed to delete FAQ:', error);
        throw error;
    }
};
