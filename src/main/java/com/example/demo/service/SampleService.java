package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repo.SampleRepo;


@Service
public class SampleService {
	
	@Autowired
	private SampleRepo repo;
	
	public List<Product> fetchproductList(){
		
		return repo.findAll();
	}
	
	public Product saveProductToDB(Product product){
		
		return repo.save(product);
		
	}
	
	
	public Optional<Product> fetchProductbyId(int id){
		
		Optional<Product> product = repo.findById(id);
		return product  ;
	}
	
	
	@Transactional
	public String deleteProductById(int id){
		
		String result;
		try{
			repo.deleteById(id);
			result =" Product Deleted Successfully";
		}
		catch(Exception e){
			result =" Product with Id is not deleted";
		}
		
		return result;
		
	}

	

}
