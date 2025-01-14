import { api } from '../config/axiosConfig';
import { defineCancelApiObject } from '../utils/axiosUtils';
const cancelApiObject = defineCancelApiObject(api);

export const Job = {
  PostJob: async (data: any, cancel = false) => {
    const response = await api.request({
      url: '/admin/addJob',
      method: 'POST',
      data: {
        name: data.name,
        description: data.description,
        active: data.active,
        comapnyId:data.comapnyId
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.PostJob.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetJobs: async (cancel = false) => {
    const response = await api.request({
      url: '/admin/getjobs',
      method: 'GET',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.GetJobs.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  UpdateJob: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/updateJob/${data._id}`,
      method: 'PUT',
      data: {
        name: data.name,
        description: data.description,
        active: data.active,
        comapnyId:data.comapnyId
      },
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.UpdateJob.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  DeleteJob: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/deleteJob/${data._id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
      signal: cancel
        ? cancelApiObject.UpdateJob.handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  GetJobById: async (data: any, cancel = false) => {
    const response = await api.request({
      url: `/admin/getJob/${data.id}`,
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
