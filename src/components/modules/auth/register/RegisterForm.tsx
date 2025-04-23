"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [role, setRole] = useState<"student" | "tutor">("tutor");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  // password validation

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
      if (res?.data) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        toast.error(res?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white p-4">
        {/* Left Section  */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-orange-600 flex items-center gap-2">
            Welcome Back <span className="wave">👋</span>
          </h2>
          <p className="text-gray-600 lg:text-3xl text-lg ">
            <span className="font-semibold text-[#ac0ed4e5]">Login</span> with
            your data that you entered during registration.
          </p>
          <Image
            src="https://i.ibb.co.com/YBcz2LTZ/28891279.png"
            alt="Tutor and Student"
            width={400}
            height={300}
            className="mx-auto md:mx-0 bg-cover"
          />
          <p className="text-[#ac0ed4e5] font-semibold text-lg">
            টিউশন বা টিউটর খুঁজে পাবার সেরা প্লাটফর্ম <br />{" "}
            hrhridoyroy503@gmail.com
          </p>
        </div>

        <Card className="md:w-1/2 max-w-lg w-full  p-6 shadow-lg">
          <CardContent>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="outline"
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  role === "student" && "border-orange-500 bg-orange-100"
                )}
                onClick={() => setRole("student")}
              >
                👨‍👧 Student
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "flex items-center gap-2 px-6 py-2",
                  role === "tutor" && "border-orange-500 bg-orange-100"
                )}
                onClick={() => setRole("tutor")}
              >
                🧑‍🏫 Tutor
              </Button>
            </div>

            <h3 className="text-2xl font-semibold text-[#ac0ed4e5] text-center">
              Register Now
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormLabel />
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormLabel />
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  defaultValue="tutor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="border p-2 rounded w-full"
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                        >
                          <option value="student">Student</option>
                          <option value="tutor">Tutor</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormLabel />
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-5 w-full" type="submit">
                  Register
                </Button>
              </form>
            </Form>
            <p className="text-gray-600 text-center mt-7">
              If you are registered, please
              <Link href="/login" className="text-[#ac0ed4e5] font-semibold">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
