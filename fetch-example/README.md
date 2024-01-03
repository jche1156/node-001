fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


const data = { username: 'example' };

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));



Lesson Goals:

[ ] Introductions
[ ] Get-to-Know, Technical Assessment
[ ] Review Goals
[ ] Inventory Understanding
[ ] Summarize Outcome of Lesson
[ ] Quick Q&A

[ ] System Setup
[ ] GitHub Codespace
[ ] Node.js Dev Container
[ ] Create HTML/JS Files
[ ] Hello World! HTML
[ ] Hello World! Javascript
[ ] Including Javascript in HTML

[ ] Overview of HTML, API's
[ ] Javascript Basics
[ ] JSON Objects
[ ] JS Fetch Function
[ ] Review Response, JSON Packet
[ ] Break - Fetch from a few more API's
[ ] Check-In - Concepts too easy/hard? Review standards

[ ] Insertion into Website
[ ] Super Basic Fetching
[ ] Templating Options
[ ] Alpine.js Showcase
[ ] Break - Hand-Draw Desired Website
[ ] Software Platform Review

[ ] Deeper Dive into Web Programming with Data
[ ] Querying - SQL Overview
[ ] Querying - GraphQL
[ ] Exercise - Naming Data from Sources
[ ] Break - Exploring Visualizations for Inspiration

[ ] Review, Next Steps
[ ] Coursework Suggestions - FreeCodeCamp Modules
[ ] FreeCodeCamp demo
[ ] Suggest Learning Go