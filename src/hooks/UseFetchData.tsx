// useFetchData.js
'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';

const UseFetchData = (endpoint, fetchCount = 0) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading state before fetching
            try {
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
    }, [endpoint, fetchCount]); // Add fetchCount to dependencies

    return { data, error, loading };
};

export default UseFetchData;
