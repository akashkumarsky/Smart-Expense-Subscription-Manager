package com.sky.expensemanager.service;

import com.sky.expensemanager.entity.Subscription;

import java.util.List;
import java.util.Optional;

public interface SubscriptionService {
    Subscription createSubscription(Subscription subscription);
    List<Subscription> getAllSubscriptions();
    Optional<Subscription> getSubscriptionById(Long id);
    Subscription updateSubscription(Long id, Subscription updatedSubscription);
    void deleteSubscription(Long id);
    List<Subscription> getSubscriptionsByUserId(Long userId);
}
