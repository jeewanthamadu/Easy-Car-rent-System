import axios from "../axios"
import qs from "qs";

class VehicleTypeService {
    postVehicleType = async (data)=>{
        const  promise = new Promise((resolve,reject)=>{
            axios.post('VehicleType',qs.stringify(data))
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
             axios.get('VehicleType')
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
             axios.put('VehicleType',data)
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