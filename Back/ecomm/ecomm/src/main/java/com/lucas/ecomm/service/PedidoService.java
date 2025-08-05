package com.lucas.ecomm.service;

import com.lucas.ecomm.model.PedidoModel;
import com.lucas.ecomm.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<PedidoModel> listarTodos() {
        return pedidoRepository.findAll();
    }

    public Optional<PedidoModel> buscarPorId(Long id) {
        return pedidoRepository.findById(id);
    }

    public PedidoModel salvar(PedidoModel pedido) {
        return pedidoRepository.save(pedido);
    }

    public void deletar(Long id) {
        pedidoRepository.deleteById(id);
    }
}
