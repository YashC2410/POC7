package com.poc7.users;

public class AuthBean {
String message;
public AuthBean(String message) {
	this.message=message;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
@Override
public String toString() {
	 return String.format("User -Details [message=%s]", message);
}

}
