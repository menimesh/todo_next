"use client";
import React from 'react'
import Form from "./addTodoForm"
import { TodoItem } from './components/ServerComponents';


const page = () => {
  return (
    <div className='container'>
        <Form/>
    <section className='todosContainer'>
<TodoItem 
title={"Sample title"}
description={"abcdefgh"}
id={"sampleId"}
completed={true}
/>
    </section>
    </div>
  )
}

export default page