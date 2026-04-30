import Banner from "@/components/Banner";
import TopRatedCourses from "@/components/TopRatedCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
          <Banner></Banner>
          <TopRatedCourses></TopRatedCourses>
      </main>
    </div>
  );
}
