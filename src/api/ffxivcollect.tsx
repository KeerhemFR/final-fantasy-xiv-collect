import axios from 'axios';

/**
 * - Default export and setup of axios
 * - In the current case, just needing the baseURL which will serve as a reference to
 * call any path of the said API
 */
export default axios.create({
  baseURL: 'https://ffxivcollect.com/api/',
  headers: {},
});
