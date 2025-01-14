import { api } from '../config/axiosConfig';
import { defineCancelApiObject } from '../utils/axiosUtils';
const cancelApiObject = defineCancelApiObject(api);
export const AUTH = {
  PostLogin: async (data: any, cancel = false) => {
    console.log("this",data);
    const response = await api.request({
      url: '/auth/login',
      method: 'POST',
      data: {
        email: data.email,
        password: data.password,
      },
      signal: cancel
        ? cancelApiObject.PostLogin.handleRequestCancellation().signal
        : undefined,
    });
console.log("this",response.data);
    return response.data;
  },
};
