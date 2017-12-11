import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AssignmentService } from './assignment.service';
import { Assignment } from './assignment';

@Component({
   selector: 'app-assignment,
   templateUrl: './assignment.component.html',
   styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent implements OnInit { 
   //Component properties
   allAssignments: Assignment[];
   statusCode: number;
   requestProcessing = false;
   assignmentIdToUpdate = null;
   processValidation = false;
   //Create form
   assignmentForm = new FormGroup({
       title: new FormControl('', Validators.required),
       subject: new FormControl('', Validators.required)	   
   });
   //Create constructor to get service instance
   constructor(private assignmentService: AssignmentService) {
   }
   //Create ngOnInit() and and load assignments
   ngOnInit(): void {
	   this.getAllAssignments();
   }   
   //Fetch all assignments
   getAllAssignments() {
        this.assignmentService.getAllAssignments()
		  .subscribe(
                data => this.allAssignments = data,
                errorCode =>  this.statusCode = errorCode);   
   }
   //Handle create and update assignment
   onAssignmentFormSubmit() {
	  this.processValidation = true;   
	  if (this.assignmentForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
      this.preProcessConfigurations();
	  let assignment = this.assignmentForm.value;
	  if (this.assignmentIdToUpdate === null) {  
	    //Generate assignment id then create assignment
        this.assignmentService.getAllAssignments()
	     .subscribe(assignments => {
			 
		   //Generate assignment id	 
		   let maxIndex = assignmenta.length - 1;
		   let assignmentWithMaxIndex = assignments[maxIndex];
		   let assignmentId = assignmentWithMaxIndex.id + 1;
		   assignment.id = assignmentId;
		   
		   //Create assignment
     	   this.assignmentService.createAssignment(assignment)
			  .subscribe(successCode => {
					this.statusCode = successCode;
					this.getAllAssignments();	
					this.backToCreateAssignment();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		
	  } else {  
   	    //Handle update assignment
        assignment.id = this.assignmentIdToUpdate; 		
	    this.assignmentService.updateAssignment(assignment)
	      .subscribe(successCode => {
		            this.statusCode = successCode;
				    this.getAllAssignments();	
					this.backToCreateAssignment();
			    },
		        errorCode => this.statusCode = errorCode);	  
	  }
   }
   //Load assignment by id to edit
   loadAssignmentToEdit(assignmentId: string) {
      this.preProcessConfigurations();
      this.assignmentService.getAssignmentById(assignmentId)
	      .subscribe(assignment => {
		            this.assignmentIdToUpdate = assignment.id;   
		            this.assignmentForm.setValue({ title: assignment.title, category: assignment.subject });
					this.processValidation = true;
					this.requestProcessing = false;   
		        },
		        errorCode =>  this.statusCode = errorCode);   
   }
   //Delete assignment
   deleteAssignment(assignmentId: string) {
      this.preProcessConfigurations();
      this.assignmentService.deleteAssignmentById(assignmentId)
	      .subscribe(successCode => {
		            //this.statusCode = successCode;
					//Expecting success code 204 from server
					this.statusCode = 204;
				    this.getAllAssignments();	
				    this.backToCreateAssignment();
			    },
		        errorCode => this.statusCode = errorCode);    
   }
   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }
   //Go back from update to create
   backToCreateAssignment() {
      this.assignmentIdToUpdate = null;
      this.assignmentForm.reset();	  
	  this.processValidation = false;
   }
}
    