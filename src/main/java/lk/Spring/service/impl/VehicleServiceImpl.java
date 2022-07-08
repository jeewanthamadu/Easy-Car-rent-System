package lk.Spring.service.impl;

import lk.Spring.dto.VehicleDTO;
import lk.Spring.entity.Vehicle;
import lk.Spring.repo.VehicleRepo;
import lk.Spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepo repo;
    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (!repo.existsById(vehicleDTO.getRegistration_Number())) {
            repo.save(mapper.map(vehicleDTO, Vehicle.class));
        }else {
            throw new RuntimeException("Vehicle Already Saved..");
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }else {
            throw new RuntimeException("Delete Failed");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {

    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        return null;
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return null;
    }
}
