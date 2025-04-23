"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateUser } from "@/services/user";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function EditProfile() {
  const user = useUser();
  console.log(user?.email);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const form = useForm({
    defaultValues: {
      photo: "",
      bio: "",
      name: "",
      phone: "",
      salary: "",
      availableDays: "",
      tuitionStyle: "",
      experience: "",
      subject: "",
      rating: 4.8,
      class: "",
      location: "",
      PreferredTeach: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Form Data:", data);

    if (!user?.email) {
      console.error("User email is missing!");
      return;
    }

    try {
      const userData = {
        bio: data.bio,
        name: data.name,
        phone: data.phone,
        salary: data.salary,
        availableDays: data.availableDays,
        tuitionStyle: data.tuitionStyle,
        experience: data.experience,
        subject: data.subject,
        rating: data.rating,
        class: data.class,
        location: data.location,
        PreferredTeach: data.PreferredTeach,
        photo: data.photo, // If it's a URL or Base64 string
      };

      const response = await updateUser(userData, user?.email);

      // console.log(response,"dataaaaaa")
      if (response.result) {
        toast.success(response.message);
      } else {
        toast.error("Failed to update profile.");
      }
      console.log("User updated successfully!", response);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (loading) {
    return <p className="text-center py-5">Loading user data...</p>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle className="py-5">Edit profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Photo URL</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center mt-3 ">
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="PreferredTeach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Area to Teach</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center mt-3 ">
              <FormField
                control={form.control}
                name="tuitionStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tuition Style</FormLabel>

                    <FormControl>
                      <Input placeholder="Offline/Online" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class</FormLabel>
                    <FormControl>
                      <Input placeholder=" 1-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <textarea
                        className="h-16 resize-none w-full border border-gray-300 rounded-md p-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center mt-3 ">
              {/* New Fields Added */}
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subjects</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select subjects" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mathematics">
                            Mathematics
                          </SelectItem>
                          <SelectItem value="Physics">Physics</SelectItem>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Biology">Biology</SelectItem>
                          <SelectItem value="Chemistry">Chemistry</SelectItem>
                          <SelectItem value="Higher Math">
                            Higher Math
                          </SelectItem>
                          <SelectItem value="Bangla">Bangla</SelectItem>
                          <SelectItem value="General Science">
                            General Science
                          </SelectItem>
                          <SelectItem value="Accounting">Accounting</SelectItem>
                          <SelectItem value="Economics">Economics</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="availableDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Days Per Week</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center mt-3 ">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="mt-5 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Save Profile"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
