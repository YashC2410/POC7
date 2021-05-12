package com.poc7.users.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.poc7.users.ResponseModule;
import com.poc7.users.User;
@SpringBootTest
@TestInstance(Lifecycle.PER_CLASS)
public class UserTest {
private MockMvc mockMvc;
@Autowired
private WebApplicationContext context;

ObjectMapper objectMapper = new ObjectMapper();

@BeforeAll
public void setUp()
{
	mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
}
@Test
public void createUser() throws Exception{
	User user=new User();
	user.setUserFname("Lincy");
	user.setUserLname("Joseph");
	user.setUserContact("9812345390");
	user.setUserEmail("itsLincy55@gmail.com");
	user.setUserDepartment("Accounts");
	user.setUserPinCode("400053");
	user.setUserCity("Thane");
	user.setUserCountry("India");
	String JsonRequest= objectMapper.writeValueAsString(user);
	MvcResult result=mockMvc.perform(post("/users/createUserTest").content(JsonRequest).contentType(
	MediaType.APPLICATION_JSON_VALUE)).andDo(print()).andExpect(status().isOk()).
	andReturn();
	String resultContext =result.getResponse().getContentAsString(); 
	ResponseModule response=objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void getAllUsers() throws Exception{
	MvcResult result = mockMvc.perform(get("/users/getAllUserTest").contentType(MediaType.APPLICATION_JSON_VALUE)).andDo(print())
			.andExpect(status().isOk()).andReturn();
	String resultContext = result.getResponse().getContentAsString();
	ResponseModule response = objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void getUserByName() throws Exception{
	MvcResult result = mockMvc.perform(get("/users/getUserByNameTest/Yash").contentType(MediaType.APPLICATION_JSON_VALUE)).andDo(print())
			.andExpect(status().isOk()).andReturn();
	String resultContext = result.getResponse().getContentAsString();
	ResponseModule response = objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void getUserByPinCode() throws Exception{
	MvcResult result = mockMvc.perform(get("/users/getUserByPinCodeTest/400068").contentType(MediaType.APPLICATION_JSON_VALUE)).andDo(print())
			.andExpect(status().isOk()).andReturn();
	String resultContext = result.getResponse().getContentAsString();
	ResponseModule response = objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void getUserById() throws Exception{
	MvcResult result = mockMvc.perform(get("/users/getUserByIdTest/1").contentType(MediaType.APPLICATION_JSON_VALUE)).andDo(print())
			.andExpect(status().isOk()).andReturn();
	String resultContext = result.getResponse().getContentAsString();
	ResponseModule response = objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void updateUserTest() throws Exception{
	User user=new User();
	user.setUserFname("Vivek");
	user.setUserLname("Lodh");
	user.setUserContact("9812345678");
	user.setUserEmail("iamvk55@gmail.com");
	user.setUserDepartment("Android");
	user.setUserPinCode("400063");
	user.setUserCity("Mumbai");
	user.setUserCountry("India");
	String JsonRequest= objectMapper.writeValueAsString(user);
	MvcResult result=mockMvc.perform(put("/users/updateUserTest/13").content(JsonRequest).contentType(
	MediaType.APPLICATION_JSON_VALUE)).andDo(print()).andExpect(status().isOk()).
	andReturn();
	String resultContext =result.getResponse().getContentAsString(); 
	ResponseModule response=objectMapper.readValue(resultContext, ResponseModule.class);
	Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
	Assertions.assertEquals("Success",response.getProgressMessage());
}
@Test
public void deleteUserTest() throws Exception{
	MvcResult result =  mockMvc.perform(delete("/users/deleteUserTest/18").contentType(MediaType.APPLICATION_JSON_VALUE)).andDo(print()).
    andExpect(status().isOk()).andReturn(); 
	String resultContext=result.getResponse().getContentAsString(); 
    ResponseModule response=objectMapper.readValue(resultContext, ResponseModule.class);
    Assertions.assertTrue(response.isStatus() == Boolean.TRUE);
    Assertions.assertEquals("Success",response.getProgressMessage()); 
}
}
