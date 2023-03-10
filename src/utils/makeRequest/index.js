import axios from 'axios';
import { ERROR_ROUTE } from '../../constants/routes';

const makeRequest = async (apiEndPoint, dynamicConfig = {}, navigate) => {
  try {
    const requestDetails = {
      baseURL: apiEndPoint.baseUrl,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (error) {
    const errorStatus = error.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

export default makeRequest;
