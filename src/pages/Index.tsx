import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { EyeIcon, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
  {
    title: "BNB Chain Agent",
    description: "An AI agent that operates on the Binance Smart Chain.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    creator: "CZ.eth"
  },
  {
    title: "Healthcare Agent",
    description: "An AI agent that provides medical diagnosis and treatment.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    creator: "Doctor.eth"
  },
  {
    title: "Blockchain Explorer",
    description: "An AI agent that monitors and analyzes blockchain transactions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    creator: "Satoshi.eth"
  },
  {
    title: "Stock Market Agent",
    description: "An AI agent that predicts stock market trends and trades.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    creator: "Harshath.eth"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section with 60/40 Split */}
      <section className="h-screen flex py-20 px-8">
        {/* Left Side - 60% */}
        <div className="w-[60%] h-full flex flex-col  justify-center items-center">
          <div className="space-y-6 text-center">
            <h1 className="text-7xl font-bold">
              <span className="block mb-4">opBNB</span>
              <span className="text-primary block">AI Agent Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Create, use, govern, and trade AI agents with dedicated DAOs
            </p>
          </div>
        </div>

        {/* Right Side - 40% with Scrollable Cards */}
        <div className="w-[40%] h-full ">
          <Carousel
            opts={{
              align: "start",
              axis: "y"
            }}
            className="w-full h-full"
            orientation="vertical"
          >
            <CarouselContent className="-mt-1 h-[80vh]">
              {FEATURES.map((feature, index) => (
                <CarouselItem key={index} className="pt-1 h-[80vh]">
                  <Card 
                    className="w-full h-full overflow-hidden relative border-none"
                    style={{
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                    <CardContent className="relative h-full flex flex-col justify-between p-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                        <p className="text-lg text-white/80">{feature.description}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-sm text-white/60">Created by {feature.creator}</p>
                        <div className="flex gap-4">
                          <Button 
                            variant="outline" 
                            className="flex-1 bg-black/30 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
                          >
                            <EyeIcon className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex-1 bg-black/30 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            DAO
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Index;