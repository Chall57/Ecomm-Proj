package com.lucas.ecomm.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "produto")
@Data
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, length = 25)
    private String fabricante;

    @Column(nullable = false, length = 100)
    private String modelo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "categoria_id", nullable = false)
    private CategoriaModel categoria;

    @Column(length = 500)
    private String descricao;

    @Column(name = "espec_tecnicas", columnDefinition = "jsonb")
    private String especTecnicas;

    @Column(name = "preco_base", nullable = false)
    private BigDecimal precoBase;

    @Column(nullable = false)
    private Boolean ativo;

    @Column(name = "criado_em", nullable = false)
    private LocalDateTime criadoEm;

    @Column(name = "atualizado_em", nullable = false)
    private LocalDateTime atualizadoEm;
}
