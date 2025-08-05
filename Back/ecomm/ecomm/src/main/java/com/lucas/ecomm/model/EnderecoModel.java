package com.lucas.ecomm.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "endereco")
@Data
public class EnderecoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id", nullable = false)
    private ClienteModel cliente;

    @Column(nullable = false, length = 255)
    private String complemento;

    @Column(name = "endereco_completo", nullable = false, length = 255)
    private String enderecoCompleto;

    @Column(nullable = false)
    private Boolean padrao;
}
