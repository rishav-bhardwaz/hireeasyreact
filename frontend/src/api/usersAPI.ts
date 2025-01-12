import { api } from '../config/axiosConfig';
import { defineCancelApiObject } from '../utils/axiosUtils';
const cancelApiObject = defineCancelApiObject(api);

const getAuthHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
});

interface UserData {
    _id?: string;
    email: string;
    password: string;
    name: string;
    phoneNo: string;
    role: string;
}

export const USERS = {
    GetUsers: async (cancel = false) => {
        try {
            const response = await api.request({
                url: '/admin/getAllusers',
                method: 'GET',
                headers: getAuthHeader(),
                signal: cancel
                    ? cancelApiObject.GetUsers.handleRequestCancellation().signal
                    : undefined,
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    PostUser: async (data: UserData, cancel = false) => {
        try {
            const response = await api.request({
                url: '/admin/addUser',
                method: 'POST',
                data,
                headers: getAuthHeader(),
                signal: cancel
                    ? cancelApiObject.PostUser.handleRequestCancellation().signal
                    : undefined,
            });
            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    },

    GetById: async (id: string, cancel = false) => {
        try {
            const response = await api.request({
                url: `/admin/getUser/${id}`,
                method: 'GET',
                headers: getAuthHeader(),
                signal: cancel
                    ? cancelApiObject.GetById.handleRequestCancellation().signal
                    : undefined,
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching user by ID (${id}):`, error);
            throw error;
        }
    },

    Update: async (data: UserData, cancel = false) => {
        try {
            const response = await api.request({
                url: `/admin/updateUser/${data._id}`,
                method: 'PUT',
                data,
                headers: getAuthHeader(),
                signal: cancel
                    ? cancelApiObject.UpdateUser.handleRequestCancellation().signal
                    : undefined,
            });
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    Delete: async (id: string, cancel = false) => {
        try {
            const response = await api.request({
                url: `/admin/deleteUser/${id}`,
                method: 'DELETE',
                headers: getAuthHeader(),
                signal: cancel
                    ? cancelApiObject.DeleteUser.handleRequestCancellation().signal
                    : undefined,
            });
            return response.data;
        } catch (error) {
            console.error(`Error deleting user (${id}):`, error);
            throw error;
        }
    },
};
