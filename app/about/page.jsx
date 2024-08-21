import React from 'react'

const page = () => {
  return (<>
  <div className="heading">
    <h2>About Our Todo App </h2>
    <p>
        Welcome to our Todo App! This app is designed to help you keep track of your tasks and stay organized.
        Whether you need to manage your daily chores, plan your projects, or just jot down quick reminders,
        our app makes it easy to stay on top of everything.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Add, edit, and delete tasks easily.</li>
        <li>Mark tasks as completed.</li>
        <li>Organize tasks by categories.</li>
        <li>Simple and intuitive user interface.</li>
      </ul>
      <h2>Technologies Used</h2>
      <p>
        Our Todo App is built with the following technologies:
      </p>
      <ul>
        <li>React: For building the user interface.</li>
        <li>Next.js: For server-side rendering and routing.</li>
        <li>MongoDB: For storing task data.</li>
        <li>Bootstrap: For styling the app.</li>
      </ul>
      <h2>About the Team</h2>
      <p>
        We are a team of passionate developers who believe in building tools that make people's lives easier.
        Our goal is to create apps that are not only functional but also delightful to use.
      </p>
      <p>
        If you have any questions, feel free to 
      </p>
  </div>
  </>
  )
}

export default page