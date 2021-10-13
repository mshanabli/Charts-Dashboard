import axios from 'axios';

export const getTypes = async () => {
  const { data } = await axios.get('simpool/layout').catch(err => console.log(err));

  return data;
};

export const getCharts = async (type, count) => {
  const endPoint = count ? `simpool/data?type=${type}&filter=${count}` : `simpool/data?type=${type}`;
  const { data } = await axios.get(endPoint).catch(err => console.log(err));

  return data;
};
