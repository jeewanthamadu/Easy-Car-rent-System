package lk.Spring.service.impl;

import lk.Spring.dto.DriverDTO;
import lk.Spring.entity.Customer;
import lk.Spring.entity.Driver;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.repo.DriverRepo;
import lk.Spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (!repo.existsById(driverDTO.getDriverId())){
            repo.save(mapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver Already Saved..");
        }
    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {

    }

    @Override
    public DriverDTO searchDriver(String id) {
        return null;
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        return null;
    }
}
