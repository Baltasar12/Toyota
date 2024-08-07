import axios from 'axios';

const API_BASE_URL = 'https://challenge.egodesign.dev/api';

export const getModels = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/models/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching models', error);
    throw error;
  }
};

export const getModelDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/models/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching model ${id}`, error);
    throw error;
  }
};
