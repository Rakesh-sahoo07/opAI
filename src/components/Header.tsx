import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Button 
          variant="outline"
          onClick={() => navigate("/create")}
        >
          Create
        </Button>
        <Button>
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};