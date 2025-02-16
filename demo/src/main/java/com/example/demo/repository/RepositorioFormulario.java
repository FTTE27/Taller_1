package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Formulario;

@Repository
public interface RepositorioFormulario extends CrudRepository<Formulario, Long> {
    
}