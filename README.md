# social-api

# employee-database

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| MySQL    | [https://www.w3schools.com/MySQL/mysql_create_db.asp](https://www.w3schools.com/MySQL/mysql_create_db.asp)  
| MySQL    | [https://www.w3schools.com/MySQL/mysql_notnull.asp](https://www.w3schools.com/MySQL/mysql_notnull.asp) 
| Node.js    | [https://www.w3schools.com/nodejs/nodejs_mysql.asp](https://www.w3schools.com/nodejs/nodejs_mysql.asp) 
| MySQL    | [https://www.sitepoint.com/using-node-mysql-javascript-client/](https://www.sitepoint.com/using-node-mysql-javascript-client/) 




## Description 

For this project I was given a task to create an employee tracking database. In this assignment we were primarily focusing on the usage of mysql. In my project I needed to create a database that would keep track of all departments, role and employees for an imaginary company. At the end of the assignment the user needs to view all tables created for every department, roles, and employees and additionally the user must be able to add a department, add a role and add an employee.

## Markdown





## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
const employeeQueryManager = `
    SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    LEFT JOIN roles ON a.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    ORDER BY manager
  `;
const employeeQueryDepartment = `
    SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', b.first_name, b.last_name) AS manager
    FROM employees a
    LEFT JOIN employees b ON a.manager_id = b.id
    LEFT JOIN roles ON a.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    ORDER BY department
  `;
```

I think I spent the most time with this code snippet than anything else for this assignment. At first I had one const variable to route all manager and department options but I soon found out that creating one variable with 2 different routes was a huge problem. I found out that after creating 2 seperate variables and with they're own intended roles the execution moved a lot more smoothly and I was able to locate both departments and managers in my terminal.


## Usage 

For usages I used a lot of the activities we worked on in class and a whole lot of research with ways to problem solve road blocks that I ran into. Also another usage I found extremely helpful was stackoverflow, that website has a lot of helpful tools and questions that other people struggled with as well and the answers that are given are very well detailed in problem solving.


## Learning Points 

This assignment for me was also a little challenging, mysql is a lot different than working with node.js so transitioning from node to mysql was a little confusing at first but after rial and errors it's starting to feel more comfortable.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
