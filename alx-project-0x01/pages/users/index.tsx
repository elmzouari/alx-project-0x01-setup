import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }: any) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<UserData | null>(null);


  const handleAddUser = (newUser: UserData) => {
    setPost({ ...newUser, id: posts.length + 1 });
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ id, username, name, email, address, phone, website, company }: UserProps, key: number) => (
             <UserCard
            username={username}
              name={name}
              email={email}
              id={id}
              key={key}
              address={address}
              phone={phone}
              website={website}
              company={company}
            />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
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
