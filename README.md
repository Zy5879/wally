# WHERE'S WALDO

Where's Waldo game! Find the characters the fastest!

**SCREENSHOTS**

![Screenshots](/src/images/wallyhome.png)
![Screenshots](/src/images/wallystart.png)
![Screenshots](/src/images/wallyend.png)
![Screenshots](/src/images/wallylb.png)

[LIVE PREVIEW](https://client-side-blue-vellum.onrender.com/)

## OVERVIEW

#

TECH USED: HTML, CSS, TAILWIND, REACT, REACT ROUTER FIREBASE

- Used React Router for user to navigate to leaderboard and back home once user completes game
- Used firebase to store character coordinates, frontend grabs the coordinates from the and matches them based off user click
- Once game is over, input fields is open, asking user for username. On submit the user's username and time is sent to firebase
- On submit of username, all username and times that were submitted by user's are grabbed from firebase, then sorted in a leaderboard table from quickest time to slowest time
- Responsive Design Using Tailwind
- Mobile Friendly as well

## LESSONS LEARNED

#

This project was my firstime using anything backend related. Learning something new is always fun but learning to use a backend database for the first time did prove to be quite challenging. Learning how to query data from thr backend in a way that could be displayed or used in the frontend was a hard concept for me to grab, but hard work, perserverance and a google will almost always save the day. Something that in the code base that I will definitely change is the time in the leaderboard and in the end game modal. In the navbar the time works as end, but once a user starts to get into those higher times, the numbers get a little wonky. They are still able to be sorted for lowest to highest, but it's not up to my liking. Aside from that, this project continued to build on my knowledge of the fundamentals of React. I am starting to become more comfortable with React and it's nuances as well as tailwind the new css framework I've been recently working with (Which I love). Overall fun project, cheers to creating bigger and better projects!
