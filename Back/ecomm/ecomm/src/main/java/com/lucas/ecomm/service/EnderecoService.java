package com.lucas.ecomm.service;

import com.lucas.ecomm.model.EnderecoModel;
import com.lucas.ecomm.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public List<EnderecoModel> listarTodos() {
        return enderecoRepository.findAll();
    }

    public Optional<EnderecoModel> buscarPorId(Long id) {
        return enderecoRepository.findById(id);
    }

    public EnderecoModel salvar(EnderecoModel endereco) {
        return enderecoRepository.save(endereco);
    }

    public void deletar(Long id) {
        enderecoRepository.deleteById(id);
    }
}
