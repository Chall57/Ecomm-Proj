package com.lucas.ecomm.controller;

import com.lucas.ecomm.model.EnderecoModel;
import com.lucas.ecomm.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public List<EnderecoModel> listarTodos() {
        return enderecoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoModel> buscarPorId(@PathVariable Long id) {
        return enderecoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public EnderecoModel criar(@RequestBody EnderecoModel endereco) {
        return enderecoService.salvar(endereco);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnderecoModel> atualizar(@PathVariable Long id, @RequestBody EnderecoModel endereco) {
        return enderecoService.buscarPorId(id)
                .map(e -> {
                    endereco.setId(id);
                    return ResponseEntity.ok(enderecoService.salvar(endereco));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (enderecoService.buscarPorId(id).isPresent()) {
            enderecoService.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
