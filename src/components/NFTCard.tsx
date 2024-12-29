import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EyeIcon, ShoppingCartIcon } from "lucide-react";

interface NFTCardProps {
  title: string;
  price: string;
  image: string;
  creator: string;
}

export const NFTCard = ({ title, price, image, creator }: NFTCardProps) => {
  return (
    <Card className="nft-card bg-card">
      <CardContent className="p-0">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">Created by {creator}</p>
          <p className="text-primary font-bold">{price} ETH</p>
        </div>
      </CardContent>
      <CardFooter className="gap-2 p-4 pt-0">
        <Button variant="outline" size="sm" className="flex-1">
          <EyeIcon className="w-4 h-4 mr-2" />
          View
        </Button>
        <Button size="sm" className="flex-1">
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};