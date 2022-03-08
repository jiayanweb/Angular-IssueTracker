import { Injectable } from '@angular/core';
import { Issue } from './issue';
import {issues} from '../assets/mock-issues';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  //private issues: Issue[] = [];
  
  constructor() { }

  getPendingIssues(): Issue[] {
   //return this.issues.filter(issue=> !issue.completed);
   return issues.filter(issue=> !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = issues.length+1;
    issues.push(issue)
    
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };

    const index=issues.findIndex(i=>i===issue);
    issues[index]=selectedIssue;
  }

  getSuggestions(title:string): Issue[] {
    if (title.length>3) {
      return issues.filter(issue=>issue.title.toUpperCase().indexOf(title.toUpperCase())!==-1);
    }
    return [];
  }
}
