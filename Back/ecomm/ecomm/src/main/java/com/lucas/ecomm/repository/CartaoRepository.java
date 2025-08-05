package com.lucas.ecomm.repository;

import com.lucas.ecomm.model.CartaoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartaoRepository extends JpaRepository<CartaoModel, Long> {
}
