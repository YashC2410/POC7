package com.poc7.users;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
@Autowired 
private UserRepository userRepository;
public List<User> getAllUser(){
	List<User> user=userRepository.findAll();
	return user;
}
public List<User> getUserByName(String userFname){
	return userRepository.findByUserFname(userFname);
}
public List<User> getUserByPinCode(String userPinCode){
	return userRepository.findByUserPinCode(userPinCode);
}
public User createUser(User user)
{
	return userRepository.save(user);
}
public ResponseEntity<User> upateUserById(Integer userId, User userRequest){
	User user = userRepository.findById(userId)
	        .orElseThrow(() -> new UserNotFoundException("User not found for this id :: " + userId));
	user.setUserFname(userRequest.getUserFname());
	user.setUserLname(userRequest.getUserLname());
	user.setUserContact(userRequest.getUserContact());
	user.setUserEmail(userRequest.getUserEmail());
	user.setUserDepartment(userRequest.getUserDepartment());
	user.setUserPinCode(userRequest.getUserPinCode());
	user.setUserCity(userRequest.getUserCity());
	user.setUserCountry(userRequest.getUserCountry());
	 final User updatedUser = userRepository.save(user);
     return ResponseEntity.ok(updatedUser);
	
}
public ResponseEntity<Map<String,Boolean>> deleteUserById(Integer userId){
	return userRepository.findById(userId).map(user->{
	 userRepository.delete(user);
	 Map<String,Boolean> rep=new HashMap<>();
	 rep.put("User with ID:"+userId+" deleted ", Boolean.TRUE);
	 return ResponseEntity.ok(rep);
	}).orElseThrow(() -> new UserNotFoundException("User With ID " + userId + " not found"));
}
public ResponseModule createUserTest(User user) {
	User user1=userRepository.findByuserContact(user.getUserContact());
	User user2=userRepository.findByuserEmail(user.getUserEmail());
	if(user1==null && user2==null) {
		userRepository.save(user);
		return new ResponseModule("User with Name: "+user.getUserFname()+" and Email ID: "+user.getUserEmail()+" added",Boolean.TRUE,"Success");
	}
	if(user1!=null && user2==null) {
		return new ResponseModule("User with Name :"+user1.getUserFname()+" and Contact Number: "+user1.getUserContact()+" alreay exists",Boolean.FALSE,"Failed");
	}
	else {
		return new ResponseModule("User with Name :"+user2.getUserFname()+" and Email ID: "+user2.getUserEmail()+" alreay exists",Boolean.FALSE,"Failed");
	}
}
public ResponseModule getUserByTest() {
	List<User> user=userRepository.findAll();
	if(user.size()==0) {
		return new ResponseModule("No User were Found",Boolean.FALSE,"Failed");
	}
	else {
		return new ResponseModule("Number Users were Found are "+user.size(),Boolean.TRUE,"Success");
	}
}
public ResponseModule getUserByNameTest(String userName) {
	List<User> user=userRepository.findByUserFname(userName);
	if(user.size()==0) {
		return new ResponseModule("No User with Name "+userName+" were Found",Boolean.FALSE,"Failed");
	}
	else {
		return new ResponseModule("Number Users with Name "+userName+" were Found are "+user.size(),Boolean.TRUE,"Success");
	}
}
public ResponseModule getUserByPinCodeTest(String userPinCode) {
	List<User> user=userRepository.findByUserPinCode(userPinCode);
	if(user.size()==0) {
		return new ResponseModule("No User with Pin-Code "+userPinCode+" were Found",Boolean.FALSE,"Failed");
	}
	else {
		return new ResponseModule("Number Users with Pin-Code "+userPinCode+" were Found are "+user.size(),Boolean.TRUE,"Success");
	}
}
public ResponseModule getUserByIdTest(Integer userId) {
	List<User> user=userRepository.findByUserId(userId);
	if(user.size()==0) {
		return new ResponseModule("No User with ID: "+userId+" were Found",Boolean.FALSE,"Failed");
	}
	else {
		return new ResponseModule("Number Users with ID: "+userId+" were Found are "+user.size(),Boolean.TRUE,"Success");
	}
}
public ResponseModule updateUserTest(User user, Integer userId) {
	User userData=userRepository.findUserByUserId(userId);
	if(userData==null) {
		return new ResponseModule("No User with ID: "+userId+" were Found",Boolean.FALSE,"Failed");
	}
	else {
		userData.setUserFname(user.getUserFname());
		userData.setUserLname(user.getUserLname());
		userData.setUserContact(user.getUserContact());
		userData.setUserEmail(user.getUserEmail());
		userData.setUserDepartment(user.getUserDepartment());
		userData.setUserPinCode(user.getUserPinCode());
		userData.setUserCity(user.getUserCity());
		userData.setUserCountry(user.getUserCountry());
		userRepository.save(userData);
		return new ResponseModule("User with ID: "+userId+" is Updated Succesfully ",Boolean.TRUE,"Success");
	}
}
public ResponseModule deleteUserTest(Integer userId) {
	User user=userRepository.findUserByUserId(userId);
	if(user==null) {
		return new ResponseModule("No User with ID: "+userId+" were Found",Boolean.FALSE,"Failed");
	}
	else {
		userRepository.delete(user);
		return new ResponseModule("User with ID: "+userId+" is Deleted Succesfully ",Boolean.TRUE,"Success");
		
	}
}
}
 