package com.lucas.ecomm.controller;

import com.lucas.ecomm.model.ClienteModel;
import com.lucas.ecomm.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<ClienteModel> listarTodos() {
        return clienteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteModel> buscarPorId(@PathVariable Long id) {
        return clienteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ClienteModel criar(@RequestBody ClienteModel cliente) {
        cliente.setCriadoEm(LocalDateTime.now());
        cliente.setAtivo(true);
        return clienteService.salvar(cliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteModel> atualizar(@PathVariable Long id, @RequestBody ClienteModel cliente) {
        return clienteService.buscarPorId(id)
                .map(clienteExistente -> {
                    cliente.setId(id);
                    return ResponseEntity.ok(clienteService.salvar(cliente));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (clienteService.buscarPorId(id).isPresent()) {
            clienteService.deletar(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
