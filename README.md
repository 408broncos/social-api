# social-api

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Mongoose   | [https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)  
|  NoSQL     | [https://www.w3schools.com/nodejs/nodejs_mongodb.asp](https://www.w3schools.com/nodejs/nodejs_mongodb.asp) 
| Express    | [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) 


## Description 

For this project I was asked to create an API that would store social networking tools such as making usernames, emails, add and remove capabilities for friends, add thoughts and the ability to add and remove reactions to thoughts. Given these requirements we needed to seed all of the data and store it in mongoDB for efficient and quick speed to pull and push the data.

## Markdown





https://github.com/408broncos/social-api/assets/126821868/529f4578-8db8-45fa-af38-ef1b8fd572b6



## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
 try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    const seededUsers = await User.insertMany(users);

    for (const thought of thoughts) {
      const user = seededUsers.find((user) => user.username === thought.username);
      thought.userId = user._id;
      await Thought.create(thought);
    }
```

For this code snippet my main struggle with this was trying to link the thoughts to the seeding process and connecting it to the corresponding username by the ID. After a lot of researching i discovered that to link the thoughts to the the corresponding ID I needed to also connect the users with that associated ID.

## Usage 

For usages I used mainly express, mongoDB, mongoose, moment and nodemon. I also used a lot of previous activities to point me in the right direction including research of my own on google with any questions I needed help with.


## Learning Points 

For learning points there was a lot that i learned from this assignment that I was pretty stuck and confused on. For instance I was able to understand mongoose and mongoDB functionalitiy a lot more than what I had previously known, I also had a big learning point with using routes and controllers and the uses of them.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
