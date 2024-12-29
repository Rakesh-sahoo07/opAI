import { Header } from "@/components/Header";
import { NFTCard } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const FEATURED_NFTS = [
  {
    title: "AI Assistant Pro",
    price: "0.85",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    creator: "AI Labs"
  },
  {
    title: "Digital Brain v2",
    price: "1.2",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    creator: "Neural Networks Inc"
  },
  {
    title: "Smart Agent X",
    price: "0.95",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    creator: "Deep Mind DAO"
  },
  {
    title: "AI Companion",
    price: "0.75",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    creator: "Tech Innovators"
  }
];

const FEATURES = [
  {
    title: "ERC-20 Token Creation",
    description: "For each AI agent, 100 million tokens are minted."
  },
  {
    title: "Dedicated DAO",
    description: "Each agent has its own DAO, accepting either its ERC-20 token or the platform's native token."
  },
  {
    title: "Agent Registry",
    description: "Metadata about each AI agent is stored on-chain in an upgradeable contract."
  },
  {
    title: "DAO Governance",
    description: "The DAO can update agent instructions and implement changes."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with 60/40 Split */}
      <section 
        className="h-screen relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        
        <div className="relative h-full flex">
          {/* Left Side - 60% */}
          <div className="w-[60%] h-full flex flex-col items-center justify-center px-8">
            <div className="space-y-6 text-center">
              <h1 className="text-7xl font-bold">
                <span className="block mb-4">On-Chain</span>
                <span className="text-primary block">AI Agent Platform</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Create, govern, and trade AI agents with dedicated DAOs and ERC-20 tokens.
              </p>
            </div>
          </div>

          {/* Right Side - 40% with Scrollable Cards */}
          <div className="w-[40%] h-full flex items-center justify-center px-8">
            <Carousel
              opts={{
                align: "start",
                axis: "y"
              }}
              className="w-full max-w-xs"
              orientation="vertical"
            >
              <CarouselContent className="-mt-1 h-[70vh]">
                {FEATURES.map((feature, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_NFTS.map((nft, index) => (
              <NFTCard key={index} {...nft} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;