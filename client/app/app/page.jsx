'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function handleSubmit() {
    const res = await fetch('http://localhost:8080/rest/createParticipant', {
      method: "POST",
      body: '{"id":"V1","name":"Voter 1","role":"Voter"}',
      headers: {
        "Content-Type": "application/json",
      },
    })
    const res2 = await fetch('http://localhost:8080/rest/createParticipant', {
      method: "POST",
      body: '{"id":"C1","name":"electionCreator 1","role":"ElectionCreator"}',
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.ok && res2.ok) {
      alert("you have been logged in");
      router.push('/dashboard')
    } else {
      alert('something went wrong with logging in')
    }

  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-56'>
        <p>Register</p>
        <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-4 text-center" required placeholder='name'></input>
        <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-4 text-center" required placeholder='password'></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
