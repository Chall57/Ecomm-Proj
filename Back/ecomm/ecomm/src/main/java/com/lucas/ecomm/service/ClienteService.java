package com.lucas.ecomm.service;

import com.lucas.ecomm.model.ClienteModel;
import com.lucas.ecomm.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<ClienteModel> listarTodos() {
        return clienteRepository.findAll();
    }

    public Optional<ClienteModel> buscarPorId(Long id) {
        return clienteRepository.findById(id);
    }

    public ClienteModel salvar(ClienteModel cliente) {
        return clienteRepository.save(cliente);
    }

    public void deletar(Long id) {
        clienteRepository.deleteById(id);
    }
}
