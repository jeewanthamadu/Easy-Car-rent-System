import axios from "../axios"
import qs from "qs";

class VehicleTypeService {
    postVehicleType = async (data)=>{
        const  promise = new Promise((resolve,reject)=>{
            axios.post('Customer',qs.stringify(data))
                .then((res)=>{
                    return resolve(res)
                }).catch((error)=>{
                    return resolve(error)
            })
        })
        return await promise;
    }
     fetchVehicleType =  async (data)=>{
         const  promise = new Promise((resolve,reject)=>{
             axios.get('Customer')
                 .then((res)=>{
                     return resolve(res)
                 }).catch((error)=>{
                 return resolve(error)
             })
         })
         return await promise;
     }

     updateVehicleType = async (data)=>{
         const  promise = new Promise((resolve,reject)=>{
             axios.put('Customer',data)
                 .then((res)=>{
                     return resolve(res)
                 }).catch((error)=>{
                 return resolve(error)
             })
         })
         return await promise;
     }


}
export default new VehicleTypeService();