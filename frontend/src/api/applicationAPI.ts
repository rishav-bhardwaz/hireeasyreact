import { api } from '../config/axiosConfig';
import { defineCancelApiObject } from '../utils/axiosUtils';
const cancelApiObject = defineCancelApiObject(api);

export const APPLICATION = {
  PostApplication: async (data: any, cancel = false) => {
    const response = await api.request({
      url: '/admin/addApplication',
      method: 'POST',
      data: {
        userName: data.userName,
        resume: data.resume,
        jobId: data.jobId,
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.PostApplication.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetApplications: async (cancel = false) => {
    const response = await api.request({
      url: '/admin/getApplications',
      method: 'GET',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.GetApplications.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  UpdateApplication: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/updateApplication/${data._id}`,
      method: 'PUT',
      data: {
        userName: data.userName,
        resume: data.resume,
        jobId: data.jobId,
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.UpdateApplication.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  DeleteApplication: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/deleteApplication/${data._id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.DeleteApplication.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetApplicationById: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/getApplication/${data.id}`,
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
