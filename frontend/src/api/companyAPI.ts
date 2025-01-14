import { api } from '../config/axiosConfig';
import { defineCancelApiObject } from '../utils/axiosUtils';
const cancelApiObject = defineCancelApiObject(api);

export const COMPANY = {
  PostCompany: async (data: any, cancel = false) => {
    const response = await api.request({
      url: '/admin/addCompany',
      method: 'POST',
      data: {
        name: data.name,
        description: data.description,
        email: data.email,
        admin:data.admin,
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.PostCompany.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetCompanys: async (cancel = false) => {
    const response = await api.request({
      url: '/admin/getCompanies',
      method: 'GET',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.GetCompanies.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  UpdateCompany: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/updateCompany/${data._id}`,
      method: 'PUT',
      data: {
        name: data.name,
        description: data.description,
        email: data.email,
        admin:data.admin,
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.UpdateCompany.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  DeleteCompany: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/deleteCompany/${data._id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.DeleteCompany.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetCompanyById: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/getCompany/${data.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.GetById.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },


};
