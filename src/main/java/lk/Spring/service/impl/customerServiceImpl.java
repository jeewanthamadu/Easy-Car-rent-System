package lk.Spring.service.impl;

import lk.Spring.dto.CustomerDTO;
import lk.Spring.entity.Customer;
import lk.Spring.repo.CustomerRepo;
import lk.Spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import java.util.List;

@Service
@Transactional
public class customerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveCustomer(CustomerDTO customerDTO) {

        if (!repo.existsById(customerDTO.getId())){
            repo.save(mapper.map(customerDTO, Customer.class));
        }else {
            throw new RuntimeException("Customer Already Saved..");
        }

    }

    @Override
    public void deleteCustomer(String id) {

    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {

    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        return null;
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return null;
    }
}
