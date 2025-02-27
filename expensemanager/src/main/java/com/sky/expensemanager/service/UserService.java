package com.sky.expensemanager.service;


import com.sky.expensemanager.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
        User createUser(User user);
        List<User> getAllUsers();
        Optional<User> getUserById(Long id);
        User updateUser(Long id, User updatedUser);
        void deleteUser(Long id);
}

