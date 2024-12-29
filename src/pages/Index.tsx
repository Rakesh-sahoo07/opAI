import { Header } from "@/components/Header";
import { NFTCard } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

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
            On-Chain <span className="text-primary">AI Agent Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Create, govern, and trade AI agents with dedicated DAOs and ERC-20 tokens.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg">
                This platform allows users to create on-chain AI agents. Each AI agent:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Is represented by an ERC-20 token</li>
                <li>Has a dedicated DAO for governance</li>
                <li>Is registered in a smart contract for proof of existence and metadata storage</li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">ERC-20 Token Creation</h4>
                  <p className="text-muted-foreground">For each AI agent, 100 million tokens are minted.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Dedicated DAO</h4>
                  <p className="text-muted-foreground">Each agent has its own DAO, accepting either its ERC-20 token or the platform's native token.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Agent Registry</h4>
                  <p className="text-muted-foreground">Metadata about each AI agent is stored on-chain in an upgradeable contract.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">DAO Governance</h4>
                  <p className="text-muted-foreground">The DAO can update agent instructions and implement changes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="gap-2">
              Learn More <ArrowRightIcon />
            </Button>
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