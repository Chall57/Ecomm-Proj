package com.lucas.ecomm.controller;

import com.lucas.ecomm.model.CartaoModel;
import com.lucas.ecomm.service.CartaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cartoes")
public class CartaoController {

    @Autowired
    private CartaoService cartaoService;

    @GetMapping
    public List<CartaoModel> listarTodos() {
        return cartaoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartaoModel> buscarPorId(@PathVariable Long id) {
        return cartaoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CartaoModel criar(@RequestBody CartaoModel cartao) {
        return cartaoService.salvar(cartao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CartaoModel> atualizar(@PathVariable Long id, @RequestBody CartaoModel cartao) {
        return cartaoService.buscarPorId(id)
                .map(c -> {
                    cartao.setId(id);
                    return ResponseEntity.ok(cartaoService.salvar(cartao));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (cartaoService.buscarPorId(id).isPresent()) {
            cartaoService.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
