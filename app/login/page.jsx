"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='login'>
        <section>
            <form>
                <input type="email" placeholder='Enter a Email'/>
                <input type="password" placeholder='Enter a password'/>
                <button type='submit'>Login</button>
                <p>Or</p>
                <Link href={"/register"}>New user</Link>
            </form>
        </section>
    </div>
  )
}

export default page