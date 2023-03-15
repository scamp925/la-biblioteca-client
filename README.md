# La Biblioteca: Server Side

[Walkthrough Video of La Biblioteca (3 mins)](https://www.loom.com/share/a18b70cc76444b25a73f45a6afb99fd0)

[Walkthrough Video with ME for La Biblioteca (5 mins)](https://www.loom.com/share/a18b70cc76444b25a73f45a6afb99fd0)

![La-Biblioteca](https://media.licdn.com/dms/image/C4E22AQHcSRSwmXmBBw/feedshare-shrink_800/0/1676755433329?e=1681948800&v=beta&t=eCcaJAe1YdkN7Yzx_ziP7ehsoz3PhRsbSK0iKn44fIo)

## Topics
- [Project Overview](#project-overview)
- [MVP Features](#mvp-features)
- [Stretch Features](#stretch-features)
- [Try La Biblioteca Out](#try-plated-out)
- [Planning for La Biblioteca](#planning-for-plated)
- [Tech Stacks for La Biblioteca](#tech-stacks)

## Project Overview
Welcome to my full stack capstone project for Nashville Software School!!

La Biblioteca is my version of one of my favorite websites, GoodReads. I enjoy so much about GoodReads, but, for me, there's one thing missing: the ability to rate finished books with full and half star ratings. For La Biblioteca users, the restraint of only rating books with full stars is gone, because let's be honest, some books are 4.5 stars and not 5 stars nor are they 4 stars. Now, fair ratings are giving AND La Biblioteca users still enjoy GoodReads features like placing books onto "Want to Read", "Currently Reading", and "Read" shelves, leaving a review of a read book, perusing other user's reviews, reacting to reviews and using the search bar to find either a book or an author.

[Scroll to top](#la-biblioteca-server-side)

## MVP Features

Single Book View Page

* Book's details including title, author, book cover, description, book's page count, and first publica​tion date
* "Add to My Books" button
  * Once book is on a user's shelf:
    * The text of same button renders "Move to Another Shelf"
    * A helpful message renders above to button to let the user know which shelf the book is currently on
* "Rate this Book" button
  * Button does not render UNTIL user has place book on "Read" shelf
  * If the book has been rated by the user, the text of same button will render "Edit Your Review"
* Community Reviews
  * All reviews and star ratings of the book from users render here
  * Logged in user can add emoji reactions to reviews
  * Each review that has a reaction, also has a count of how many reactions have been added
  * User can edit or delete ONLY their own review

Bookshelf Form

* Book details of the book being put on a shelf
* Radio buttons for each of the three bookshelf options
* Same form to add and edit information
* Once a book has been placed on a bookshelf, a user can click "Remove from My Books" button to remove the book from their list of books

Review Form

* Book details of the book being reviewed/rated
* Implemented React Simple Star Rating into my project to allow users to rate a book with either full or half stars. Click [here](https://www.npmjs.com/package/react-simple-star-rating) to learn more
* Large textbox for users to leave a review
* Same form to add and edit information

My Books

* Using the same Next.js dynamic route file to display individual shelves. Within the file, I wrote condition logic to determine what will be displayed depending on information from how the user is interacting with the UI specifically a dropdown in the navbar.
* All books marked "Want to Read" by user will render on a single page
* All books marked "Currently Reading" by user will render on a single page
* All books marked "Read" by user will render on a single page
* A message will render on the page notifying the user that there are no books on the shelf if that is in fact true per the database.

Search bar

* Search by book title
* Search author to get a list of their books
* Located on the homepage once logged in

[Scroll to top](#la-biblioteca-server-side)
## Stretch Features

Completed:

* CSS styling for entire application

* Average star rating of a single book displayed on the single book view

To Implement:

* Yearly Book Challenge: Allow user to set the number of books they want to complete within a year's time

[Scroll to top](#la-biblioteca-server-side)
## Try La Biblioteca Out
*You've found my client side repo. Yahoo! You can check out my server side repo [here](https://github.com/scamp925/la-biblioteca-server). Instructions on how to get the backend on your local machine can be found in the repo's ReadMe.*

### How to run frontend locally
1. Clone La Biblioteca Client to your local machine
``` bash
git@github.com:scamp925/la-biblioteca-client.git
```

2. Set up a [Firebase](https://firebase.google.com/) project - Here's how: [Firebase Instructions](/Firebase.md)

3. Once in Plated's code, create a .env file at the root of the project
4. Copy the environmental variables from Firebase and Paste them as the properties of the keys found in your newly created .env file
5. Import sample data found in data folder in Plated to Realtime Database in your Firebase project
![finding-sample-data](https://user-images.githubusercontent.com/98675776/191889055-468ebbbd-3143-4362-8adf-99668352d15c.png)
6. While in the root directory and from your command line, run
``` bash
npm install or npm i
```
7. Now from your command line, run
``` bash
npm run prepare
```
8. To start Plated, run
``` bash
npm run dev
```
9. Open http://localhost:3000 with your browser and enjoy Plated!

[Scroll to top](#la-biblioteca-server-side)

## Planning

#### La Biblioteca's MVP Wireframe
[Link to Wireframe](https://www.figma.com/file/oncaUqtr0mQdBfu6hlQipX/La-Biblioteca-MVP?node-id=0%3A1&t=soWRyWsgYsPn8Ejm-1)

#### La Biblioteca's MVP ERD
![image](https://user-images.githubusercontent.com/98675776/224432440-3f8e8266-5941-46dc-871d-b2cc374fadc6.png)


[Scroll to top](#la-biblioteca-server-side)
## Tech Stacks
### Frontend 
<div align="center"> 
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
</div>

### Backend
<div align="center"> 
<a href="https://www.python.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
<a href="https://www.djangoproject.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" height="50" /></a>  
<a href="hhttps://www.sqlite.org/index.html" target="_blank"><img style="margin: 10px" src="https://user-images.githubusercontent.com/33158051/103467186-7b6a8900-4d1a-11eb-9907-491064bc8458.png" alt="SQLite" height="50" /></a>
</div>

<ul>
<li>Fixtures</li>
<li>ORM & SQL Queries</li>
<li>Models</li>
<li>API Endpoint Views</li>
<li>User authentication using authtoken</li>
<li>URL routing & action decorators</li>
</ul>

[Scroll to top](#la-biblioteca-server-side)
