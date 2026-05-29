"use client" 
import { Check, Link } from "lucide-react";
import { Button, Card, Form, Input, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries());
const { data, error } = await authClient.signUp.email({
    name: user.name, // required
    email:user.email, // required
    password: user.password, // required
    callbackURL: "/",
});

console.log(error, data);

if(data){
  redirect('/')
}
else{
  alert(error.message);
}


  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-4">
      <Card className="w-full max-w-md bg-gray-300">
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-bold text-white">
            Sign Up
          </h1>

          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
            <label>Name</label>
            <Input
              label="Name"
              name="name"
              placeholder="Your name"
            />
            <label>Email</label>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
            />
            <label>Password</label>
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
            />

            <Button type="submit" color="primary">
              <Check size={18} />
              Create Account
            </Button>
          </Form>
    
        </div>
      </Card>
    </div>
  );
}