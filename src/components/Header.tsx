import { Button } from "@/components/ui/button";
import { PlusCircleIcon, WalletIcon } from "lucide-react";

export const Header = () => {
  const handleConnect = () => {
    // Wallet connection logic will be implemented later
    console.log("Connecting wallet...");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary">AI NFT Market</h1>
          <Button variant="outline" className="gap-2">
            <PlusCircleIcon className="w-4 h-4" />
            Create
          </Button>
        </div>
        <Button onClick={handleConnect} className="gap-2">
          <WalletIcon className="w-4 h-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};