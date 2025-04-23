"use client";
import Counter from "@/components/modules/home/counter/Counter";
import Futures from "@/components/modules/home/futur/Futures";
import Herosection from "@/components/modules/home/herosection/Herosection";
import PopularTutor from "@/components/modules/home/herosection/PopularTutor";
import AppSchener from "@/components/modules/home/playstore/AppSchener";
import Testimonials from "@/components/modules/home/testimonials/Testimonials";
import Trusted from "@/components/modules/home/trusted/Trusted";
import TuitionTypes from "@/components/modules/home/TuitionTypes/TuitionTypes";
import TuitionProcess from "@/components/modules/home/tutorsWork/TutorsWork";
import WhyChooseUs from "@/components/modules/home/whyChoiosUs/WhyChooseUs";

export default function HomePage() {

  return (
    <div className="">
      <Herosection />
      <Counter/>
      <TuitionTypes />
      <PopularTutor />
      <TuitionProcess/>
      <Trusted />
      <WhyChooseUs/>
      <Testimonials/>
      <AppSchener/>
      <Futures/>
    </div>
  );
}
