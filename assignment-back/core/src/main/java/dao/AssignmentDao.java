package com.assignment.core.dao;

import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.assignment.core.Assignment;

@Transactional
@Repository
public class AssignmentDao implements IAssignmentDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void addAssignment(Assignment assignment) {
        entityManager.persist(assignment);
    }
    
    @Override
    public Assignment getAssignmentById(int assignmentId) {
        return Optional.ofNullable(entityManager.find(Assignment.class, assignmentId));
    }
    
    @Override
    public void updateAssignment(Assignment assignment) {
        entityManager.merge(asignment);
    }
    
    @Override
    public void deleteAssignment(Assignment assignment) {
        entityManager.remove(assignment);
    }

}
