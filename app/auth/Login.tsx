"use client"
import React from "react"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-sm bg-gray-700 text-white py-2 px-4 rounded-lg disabled:opacity-25"
      >
        Sign In
      </button>
    </li>
  )
}

export default Login
