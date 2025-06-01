import React from 'react'
import Header from '@/components/layout/Header'
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ posts }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">User Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2 ">
                    {
                        posts.map(({ name, username, email, address }: UserProps, key: number) => (
                            <UserCard name={name} username={username} email={email} address={address} key={key} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users;
