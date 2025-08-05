package com.lucas.ecomm.service;

import com.lucas.ecomm.model.CartaoModel;
import com.lucas.ecomm.repository.CartaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartaoService {

    @Autowired
    private CartaoRepository cartaoRepository;

    public List<CartaoModel> listarTodos() {
        return cartaoRepository.findAll();
    }

    public Optional<CartaoModel> buscarPorId(Long id) {
        return cartaoRepository.findById(id);
    }

    public CartaoModel salvar(CartaoModel cartao) {
        return cartaoRepository.save(cartao);
    }

    public void deletar(Long id) {
        cartaoRepository.deleteById(id);
    }
}
