import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: any[] = [
    {id: 1, name:'Learn Angular',description:'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',image:'../../assets/angular.png' },
    {id: 2, name:'Learn Typescript',description:'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.',image:'../../assets/typescript.png' },
    {id: 3, name:'Learn NodeJs',description:'Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat.',image:'../../assets/nodejs.png' },
    {id: 4, name:'Learn Bootstrap',description:'Bootstrap is a free and open source front end development framework for the creation of websites and web apps. The Bootstrap framework is built on HTML, CSS, and JavaScript (JS) to facilitate the development of responsive, mobile-first sites and apps.',image:'../../assets/bootstrap.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
