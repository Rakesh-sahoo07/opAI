import { Header } from "@/components/Header";
import { NFTCard } from "@/components/NFTCard";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover & Trade <span className="text-primary">AI Agent NFTs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The first marketplace dedicated to AI agent NFTs. Buy, sell, and create unique AI-powered digital assets.
          </p>
        </div>
      </section>

      {/* NFT Grid */}
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