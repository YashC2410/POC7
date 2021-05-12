package com.poc7.users;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class AuthController {
@GetMapping("/auth")
public AuthBean auth() {
	return new AuthBean("You are an Authorized user");
}
}
