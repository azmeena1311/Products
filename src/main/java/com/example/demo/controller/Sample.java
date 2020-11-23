package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.SampleService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Sample {
	
	@Autowired
	private SampleService service;
	
	//@RequestMapping(path ="/getproductlist",method =RequestMethod.GET)
	@GetMapping("/getproductlist")
	@CrossOrigin(origins ="http://localhost:4200")
	public List<Product> fetchProductList(){
		
		List<Product> products = new ArrayList<Product>();
		//logic to fetch list from database
		products = service.fetchproductList();
		return products;
	}
	
	@PostMapping("/addproduct")
	@CrossOrigin(origins ="http://localhost:4200")
	public Product saveProduct(@RequestBody Product product){
		
		List<Product> products = new ArrayList<Product>();
		//logic to fetch list from database
		return service.saveProductToDB(product);
		
	}
	
	
	@GetMapping("/getproductbyId/{id}")
	@CrossOrigin(origins ="http://localhost:4200")
	public Product fetchProductById(@PathVariable  int id){
		
		return service.fetchProductbyId(id).get();
		
	}
	
	
	@GetMapping("/deleteproductById/{id}")
	@CrossOrigin(origins ="http://localhost:4200")
	public String DeleteProductById(@PathVariable int id ){
		
		
		//logic to fetch list from database
		return service.deleteProductById(id);
		
	}
	

}
