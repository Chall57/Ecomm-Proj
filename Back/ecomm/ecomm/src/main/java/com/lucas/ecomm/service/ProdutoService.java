package com.lucas.ecomm.service;

import com.lucas.ecomm.model.ProdutoModel;
import com.lucas.ecomm.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ProdutoModel> listarTodos() {
        return produtoRepository.findAll();
    }

    public Optional<ProdutoModel> buscarPorId(Long id) {
        return produtoRepository.findById(id);
    }

    public ProdutoModel salvar(ProdutoModel produto) {
        return produtoRepository.save(produto);
    }

    public void deletar(Long id) {
        produtoRepository.deleteById(id);
    }
}
