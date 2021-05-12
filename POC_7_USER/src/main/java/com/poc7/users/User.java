package com.poc7.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="user_id",nullable=false)
private Integer userId;
@Column(name="user_fname",nullable=false)
@Pattern(regexp="^[a-zA-Z]*$",message="Name Should only contain characters")
private String userFname;
@Column(name="user_lname",nullable=false)
@Pattern(regexp="^[a-zA-Z]*$",message="Name Should only contain characters")
private String userLname;
@Column(name="user_contact",nullable=false)
@Pattern(regexp="^[a-zA-Z0-9]{10}",message="Contact Number should only contain digits and should be of length 10")
private String userContact;
@Column(name="user_email",nullable=false,unique=true)
@Pattern(regexp="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",message="Email Should be Valid with atleast one @ and .")
private String userEmail;
@Column(name="user_dept",nullable=false)
private String userDepartment;
@Column(name="user_pincode",nullable=false)
@Pattern(regexp="^[a-zA-Z0-9]{6}",message="PinCode should only contain digits and should be of length 6")
private String userPinCode;
@Column(name="user_city",nullable=false)
@Pattern(regexp="^[a-zA-Z]*$",message="City Name Should only contain characters")
private String userCity;
@Column(name="user_country",nullable=false)
@Pattern(regexp="^[a-zA-Z]*$",message="Country Name Should only contain characters")
private String userCountry;
}
