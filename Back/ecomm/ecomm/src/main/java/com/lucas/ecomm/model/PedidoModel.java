package com.lucas.ecomm.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "pedido")
@Data
public class PedidoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id", nullable = false)
    private ClienteModel cliente;

    @ManyToOne(optional = false)
    @JoinColumn(name = "endereco_entrega_id", nullable = false)
    private EnderecoModel enderecoEntrega;

    @Column(nullable = false)
    private BigDecimal total;

    @Column(nullable = false)
    private String status;
}
