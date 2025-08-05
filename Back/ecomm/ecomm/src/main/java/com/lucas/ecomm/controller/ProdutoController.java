package com.lucas.ecomm.controller;

import com.lucas.ecomm.model.ProdutoModel;
import com.lucas.ecomm.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<ProdutoModel> listarTodos() {
        return produtoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoModel> buscarPorId(@PathVariable Long id) {
        return produtoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProdutoModel criar(@RequestBody ProdutoModel produto) {
        return produtoService.salvar(produto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoModel> atualizar(@PathVariable Long id, @RequestBody ProdutoModel produto) {
        return produtoService.buscarPorId(id)
                .map(produtoExistente -> {
                    produto.setId(id);
                    return ResponseEntity.ok(produtoService.salvar(produto));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (produtoService.buscarPorId(id).isPresent()) {
            produtoService.deletar(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
