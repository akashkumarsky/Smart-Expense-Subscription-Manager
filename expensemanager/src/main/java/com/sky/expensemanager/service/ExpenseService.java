package com.sky.expensemanager.service;

import com.sky.expensemanager.entity.Expense;

import java.util.List;
import java.util.Optional;

public interface ExpenseService {
    Expense createExpense(Expense expense);
    List<Expense> getAllExpenses();
    Optional<Expense> getExpenseById(Long id);
    Expense updateExpense(Long id, Expense updatedExpense);
    void deleteExpense(Long id);
    List<Expense> getExpensesByUserId(Long userId);
}
