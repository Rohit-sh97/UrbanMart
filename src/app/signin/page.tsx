"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/products"); // <-- your main list page
    } catch (err) {
      alert("Login failed: " + err);
    }
  };

  return (
    <div className="flex justify-center h-screen flex-col items-center p-4 space-y-4">
    <form onSubmit={handleSignin} className="flex justify-center flex-col border p-8 gap-4 rounded-xl ">
      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-lg">Sign In</button>
    </form>
    </div>
  );
}
