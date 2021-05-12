package com.poc7.users;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User , Integer>{
List<User> findByUserId(Integer userId);
public User findUserByUserId(Integer userId);
List<User> findByUserFname(String userFname);
List<User> findByUserPinCode(String userPinCode);
public User findByuserContact(String userContact);
public User findByuserEmail(String userEmail);
}
