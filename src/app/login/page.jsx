"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const handleSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
    email: user.email, // required
    password: user.password, // required
    rememberMe: true,
    callbackURL: "/",
});
if(data){
    redirect('/')
}
else if(error){
    alert(error.message);
}

  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}