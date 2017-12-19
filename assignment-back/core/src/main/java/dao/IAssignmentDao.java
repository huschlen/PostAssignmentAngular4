package com.assignment.core.dao;

import com.assignment.core.Assignment;

public interface IAssignmentDao {

	void addAssignment(Assignment asignment);
    Assignment getAssignmentById(int assignmentId);
    void updateAssignment();
    void deleteAssignment(Assignment assignment);

}
