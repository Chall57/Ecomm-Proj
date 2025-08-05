package com.lucas.ecomm.controller;

import com.lucas.ecomm.model.PedidoModel;
import com.lucas.ecomm.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<PedidoModel> listarTodos() {
        return pedidoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoModel> buscarPorId(@PathVariable Long id) {
        return pedidoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PedidoModel criar(@RequestBody PedidoModel pedido) {
        return pedidoService.salvar(pedido);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PedidoModel> atualizar(@PathVariable Long id, @RequestBody PedidoModel pedido) {
        return pedidoService.buscarPorId(id)
                .map(p -> {
                    pedido.setId(id);
                    return ResponseEntity.ok(pedidoService.salvar(pedido));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (pedidoService.buscarPorId(id).isPresent()) {
            pedidoService.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
