import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="px-32">
      <Hero/>
      <Clients/>
      <Category/>
    </div>
  );
}
