import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Assignment } from './assignment';

@Injectable()
export class AssignmentService {
    //URL for CRUD operations
    assignmentUrl = "http://localhost:3000/assignments";
    //Create constructor to get Http instance
    constructor(private http:Http) { 
    }
    //Fetch all assignments
    getAllAssignments(): Observable<Assignment[]> {
        return this.http.get(this.assignmentUrl)
	   .map(this.extractData)
	   .catch(this.handleError);

    }
    //Create assignment
    createAssignment(assignment: Assignment):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.assignmentUrl, assignment, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Fetch assignment by id
    getAssignmentById(assignmentId: string): Observable<Assignment> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	console.log(this.assignmentUrl +"/"+ assignmentId);
	return this.http.get(this.assignmentUrl +"/"+ assignmentId)
	   .map(this.extractData)
	   .catch(this.handleError);
    }	
    //Update assignment
    updateAssignment(assignment: Assignment):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.assignmentUrl +"/"+ assignment.id, assignment, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Delete assignment	
    deleteAssignmentById(assignmentId: string): Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	return this.http.delete(this.assignmentUrl +"/"+ assignmentId)
	       .map(success => success.status)
               .catch(this.handleError);
    }	
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
}