package com.poc7.users;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
@Autowired
private UserRepository userRepository;
@Autowired 
private UserService userService;
@GetMapping("/")
public String login() {
	return "You Have Successfully Logged in";
}
@GetMapping("/getUsers")
public List<User> getAllUser(){
	return userService.getAllUser();
}
@GetMapping("/getAllUserTest")
public ResponseModule getAllUsers() {
	return userService.getUserByTest();
}
@GetMapping("/getUserByNameTest/{userFname}")
public ResponseModule getUserByNameTest(@Valid @PathVariable String userFname) {
	return userService.getUserByNameTest(userFname);
}
@GetMapping("/getUserByPinCodeTest/{userPinCode}")
public ResponseModule getUserByPinCodeTest(@Valid @PathVariable String userPinCode) {
	return userService.getUserByPinCodeTest(userPinCode);
}
@GetMapping("/getUserByIdTest/{userId}")
public ResponseModule getUserByPinCodeTest(@Valid @PathVariable Integer userId) {
	return userService.getUserByIdTest(userId);
}
@GetMapping("/getById/{userId}")
public ResponseEntity<User> getUserById(@Valid @PathVariable (value="userId") Integer userId){
	User user=userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User With ID " + userId + " not found"));
	return ResponseEntity.ok(user);
}
@GetMapping("/getUserByName/{userFname}")
public List<User> getUserByName(@Valid @PathVariable (value="userFname") String userFname){
	return userService.getUserByName(userFname);
}
@GetMapping("/getUserByPinCode/{userPinCode}")
public List<User> getUserByPinCode(@Valid @PathVariable (value="userPinCode") String userPinCode){
	return userService.getUserByPinCode(userPinCode);
}
@PostMapping("/createUserTest")
public ResponseModule createUserTest(@Valid @RequestBody User user) {
	return userService.createUserTest(user);
}
@PostMapping("/createUser")
public User createUser(@Valid @RequestBody User user)
{
	return userService.createUser(user);
}
@PutMapping("/updateUserTest/{userId}")
public ResponseModule updateUserTest(@Valid @PathVariable Integer userId , @RequestBody User user) {
	return userService.updateUserTest(user, userId);
}
@PutMapping("/updateUser/{userId}")
public ResponseEntity<User> upateUserById(@Valid @PathVariable (value="userId") Integer userId,@RequestBody User userRequest){
	return userService.upateUserById(userId, userRequest);
	
}
@DeleteMapping("/deleteUser/{userId}")
public ResponseEntity<Map<String,Boolean>> deleteUserById(@Valid @PathVariable (value="userId") Integer userId){
	return userService.deleteUserById(userId);
}
@DeleteMapping("/deleteUserTest/{userId}")
public ResponseModule deleteUserTest(@Valid @PathVariable Integer userId) {
	return userService.deleteUserTest(userId);
}
}
