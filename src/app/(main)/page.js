import Banner from "@/components/Banner";
import PopularInstructor from "@/components/PopularInstructor";
import TechniquesTips from "@/components/TechniquesTips";
import TopRatedCourses from "@/components/TopRatedCourses";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Banner></Banner>
          <TopRatedCourses></TopRatedCourses>
          <TechniquesTips></TechniquesTips>
          <TrendingCourses></TrendingCourses>
          <PopularInstructor></PopularInstructor>
      </main>
    </div>
  );
}
