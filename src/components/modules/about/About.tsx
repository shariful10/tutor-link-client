"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hridoy Chandra Roy",
      role: "Founder & CEO",
      image:
        "https://i.ibb.co.com/rFSYnXb/20230409234326-IMG-7354-removebg-removebg-preview.png",
    },
    {
      id: 2,
      name: "Zeo Lix",
      role: "Head of Operations",
      image:
        "https://i.ibb.co/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Marketing Director",
      image:
        "https://i.ibb.co.com/C3LMFzK6/images-8.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      role:"Chief Technology Officer",
      image:
        "https://i.ibb.co.com/DD56yNR9/26ef2dfe-b661-4a77-8f90-26cbf96b2a3c.jpg",
    },
  ];

  return (
    <div className=" ">
      <div className=" bg-[#ac0ed4e1] opacity-80 text-white text-center py-16">
        <div className="text-start px-20">
          <h2 className="text-3xl font-bold">Our Company</h2>
          <div className="mt-4 text-5xl font-serif">
            <span className="text-white">tutor</span>
            <span className="text-yellow-400">.com</span>
          </div>
          <p className="mt-2 text-lg">
            A Service of <span className="font-bold">The Princeton Review</span>
            <span className="inline-block w-3 h-3 bg-yellow-400 ml-1" />
          </p>
        </div>
      </div>
      {/* text section */}
      <div className="py-16 md:px-20 px-10 mb-12">
        <div className="max-w-3xl ">
          <h1 className="text-4xl font-bold">Our Beliefs</h1>
          <p className="mt-4 text-lg text-gray-800">
            At TutorsyncX, we believe that every student deserves a personal
            tutor, and we are dedicated to promoting equity, opportunity, and
            achievement for all learners. To that end, we partner with colleges
            and universities, K–12 schools and districts, public and state
            libraries, employee benefits programs, and various organizations to
            provide 24/7, on-demand tutoring and homework help in more than 250
            subjects. Our mission is to instill hope, advance equity, and
            catalyze achievement in schools and communities. We do this by
            providing encouraging, empowering, and effective academic and
            professional support for learners of all ages and stages—from
            kindergarten through college, graduate school, career, and
            continuing education. Over more than two decades of supporting
            students, educators, school leaders, and families, we have helped
            institutions increase student success and retention rates, and
            learners become more confident in their studies. Our learner
            satisfaction rates remain consistently high: 97% of post-session
            survey respondents would recommend TutorsyncX to a friend, and 98%
            are glad their institution offers TutorsyncX. The feeling is mutual.
            We are honored to partner with institutions and organizations to
            help them scale the human connection and provide personalized
            support—anytime, anywhere.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12 pt-10">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="w-60 h-[275px] p-1 shadow-lg">
                <Image
                  src={member.image}
                  height={400}
                  width={500}
                  alt={member.name}
                  className="h-[180px] w-full object-contain"
                />
                <CardContent>
                  <h3 className="font-medium mt-1">{member.name}</h3>
                  <p className="text-gray-500 py-2 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-4xl text-[#ac0ed4e5] font-semibold mb-6">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl ">
            Many students have used our platform to find their ideal tutors and
            receive better education.
          </p>
          <h1 className="mt-5 text-3xl ">Krishna Roy’s Story :</h1>
          <p className="mt-3">
            Krishna Chandra Roy, a student from Dhaka, always struggled with
            mathematics. Frustrated with poor academic performance, he found an
            experienced math tutor through TutorLink. Within just three months,
            his results improved dramatically, and he achieved an A+ in the SSC
            exam!
            <br />
            <span className="mt-2 text-lg">
              {" "}
              <br /> In Krishna Roy’s words:
            </span>
            : <br /> Math used to be a nightmare for me. But with my tutor’s
            help, I regained confidence. TutorLink has been a blessing in my
            educational journey!
          </p>

          <h1 className="mt-5 text-3xl ">Mehedi Sir’s Story :</h1>
          <p className="mt-3">
            Mehedi Sir was a skilled English teacher, but he was struggling to
            find students who matched his expertise. After joining TutorLink, he
            started getting students from different parts of the country.
            <br />
            Now, his online classes have become so popular that he has built a
            full-time career as an online teacher!
            <br />
            <span className="mt-2 text-lg">
              {" "}
              <br /> In Mehedi’s words:
            </span>
            : <br /> I used to think that only coaching centers could provide
            good teaching opportunities. But TutorLink has shown me that I can
            help thousands of students by teaching online.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Future Plans</h2>
          <p className="text-gray-600 max-w-2xl ">
            We aim to connect more students and tutors and integrate new
            technologies into our platform to enhance the learning experience.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🏆 Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl ">
            5,000+ teachers have found their ideal students.
          </p>
          <p className="text-gray-600 max-w-2xl ">
            95% of students reported improved exam results.
          </p>
          <p className="text-gray-600 max-w-2xl ">
            90% of teachers said they have benefited financially.
          </p>
        </div>

        {/* Call to Action */}
        <Button className="mt-6 bg-[#ac0ed4e5] text-white px-6 py-3 text-lg rounded-lg">
          Learn More About Us
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
