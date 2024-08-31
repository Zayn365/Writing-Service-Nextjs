// useFetchData.js
'use client'
import { Axios } from '@/utils/Axios';
import axios from 'axios';
import { useState, useEffect } from 'react';

const UseFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(endpoint)
                const response = await axios.get(endpoint);
                setData(response.data.data);
            } catch (error) {
                setError('Failed to fetch data');
                console.log('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, error, loading };
};

export default UseFetchData;
