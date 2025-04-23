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
import { loginUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { loginSchema } from "./loginValidation";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      console.log(res);
      if (res?.token) {
        toast.success("Login successful! Redirecting to Home...");
        setTimeout(() => router.push("/"), 2000);
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
        {/* Left   */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-gray-600 lg:text-3xl text-lg ">
            <span className="font-semibold text-[#ac0ed4e5]">Login</span> with
            your data that you entered during registration.
          </p>
          <Image
            src="https://i.ibb.co.com/YBcz2LTZ/28891279.png"
            alt="Tutor and Student"
            width={500}
            height={300}
            className="mx-auto md:mx-0 bg-cover"
          />
          <p className="text-[#ac0ed4e5] font-semibold text-lg">
            টিউশন বা টিউটর খুঁজে পাবার সেরা প্লাটফর্ম <br />{" "}
            hrhridoyroy503@gmail.com
          </p>
        </div>

        <Card className="md:w-1/2 max-w-md w-full p-6 shadow-lg">
          <CardContent>
            <h3 className="text-2xl font-semibold text-[#ac0ed4e5] text-center">
              Login Now
            </h3>
            <div className="space-y-4 mt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
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
                  <div className="flex justify-between text-sm mt-2">
                    <Link
                      href="/forgot-password"
                      className="text-gray-600 hover:text-[#ac0ed4e5]"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-4 bg-[#ac0ed4e5] text-white"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-600">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <Link href="/register">
              <Button className="w-full bg-black text-white">Sign Up</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
