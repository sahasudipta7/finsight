import HeroSection from "@/components/hero";
import { statsData } from "@/data/landing";



export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index)=>(
              <div key={index}>
                <div>
                {stat.value}
                </div>
                <div>
                  {stat.label}
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </div>
    
  );
}
