"use client"
import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"

type User = {
  image: string
}

function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="bg-gray-700 text-white py-2 px-4 rounded-lg"
      >
        Sign Out
      </button>
      <Link href="/dashboard">
        <Image
          className="w-14 rounded-full"
          src={image}
          height={64}
          width={64}
          alt="profile"
          priority
        />
      </Link>
    </li>
  )
}

export default Logged
