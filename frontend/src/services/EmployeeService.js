import axios from "../axios";
import qs from 'qs';

class EmployeeService {
    postEmployee = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Staff', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchEmployee = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Staff')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    deleteEmployee = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Staff', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    updateEmployee = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('Staff', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}
export default new EmployeeService();