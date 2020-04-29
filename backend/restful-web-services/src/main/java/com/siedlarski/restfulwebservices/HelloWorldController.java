package com.siedlarski.restfulwebservices;

import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
    @GetMapping( path = "/hello")
    public String hello(){
        return "hello world";
    }
    @GetMapping( path = "/helloBean")
    public HelloBean helloBean(){
        return new HelloBean("Essa BYKU");
    }
}
