"use client";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/types";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [blog, setBlog] = useState<IBlog[]>([]);

  console.log(blog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blogData.json");
        const result = await response.json();
        setBlog(result);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" bg-[#ac0ed4e1] opacity-80 text-white text-center py-16">
        <div className="text-start px-20">
          <h2 className="text-3xl font-bold">MyTutor blog</h2>
          <div className="mt-4 text-5xl font-serif">
            <span className="text-white">TutorsyncX</span>
            <span className="text-black">.com</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:px-22 md:px-10 px-8 ">
        <h1 className="text-3xl font-medium mt-10">Latest Blog Posts</h1>
        {blog.map((blog) => (
          <div key={blog?.id} className="mt-10 lg:w-[750px]">
            <h1 className="text-2xl mb-1 font-medium">{blog.title}</h1>
            <p className=" mb-4 text-gray-600">{blog.date}</p>
            <p className="text-gray-700">{blog.description}</p>
            <Button className="text-[#ac0ed4e5]  mt-3" variant="outline">
              Read more...
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
