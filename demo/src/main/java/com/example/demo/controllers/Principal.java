package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class Principal {

	 @GetMapping("/formulario")
	 public String formulario() {
		 return "form";
	 }
	 

}