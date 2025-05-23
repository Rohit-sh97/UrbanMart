"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/signin");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center flex-col h-screen items-center ">
      <form
        onSubmit={handleSignup}
        className=" flex flex-col justify-center  bg-gray-200 gap-4 border p-10  rounded shadow items-center "
      >
        <input
          type="email"
          className="border p-2 text-black bg-white rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 bg-white rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="border border-gray-200 bg-green-300  rounded-lg py-2 px-7 m-2 hover:bg-blue-200"
        >
          Signup
        </button>
        <button className="bg-blue-400 p-2 rounded-lg" onClick={() => router.push("/signin")} >Sign in</button>
      </form>
    </div>
  );
}
