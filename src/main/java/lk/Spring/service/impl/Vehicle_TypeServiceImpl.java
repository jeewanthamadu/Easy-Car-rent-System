package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.dto.Vehicle_TypeDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Vehicle_Type;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.repo.Vehicle_TypeRepo;
import lk.Spring.service.Vehicle_TypeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class Vehicle_TypeServiceImpl implements Vehicle_TypeService {


    @Autowired
    private Vehicle_TypeRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveVehicleType(Vehicle_TypeDTO Vehicle_typeDTO) {
        if (!repo.existsById(Vehicle_typeDTO.getVehicle_Type_Id())){
            repo.save(mapper.map(Vehicle_typeDTO, Vehicle_Type.class));
        }else {
            throw new RuntimeException("Customer Already Saved..");
        }
    }

    @Override
    public void deleteVehicleType(String id) {

    }

    @Override
    public void updateVehicleType(Vehicle_TypeDTO Vehicle_typeDTO) {

    }

    @Override
    public CustomerDTO searchVehicleType(String id) {
        return null;
    }

    @Override
    public List<Vehicle_TypeDTO> getAllVehicleTypes() {
        return null;
    }
}
