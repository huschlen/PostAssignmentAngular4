package com.assignment.core.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "assignment")
@DynamicUpdate
@Getter
@Setter
@EqualsAndHashCode
public class Assignment implements Serializable {

    private static final long serialVersionUID  = 1L;

    @Id
    @Column(name = "id")
    private int id;
    
    @Column(name = "title")
    private String title;
    
    @Column(name = "subject")
    private String subject;

}
