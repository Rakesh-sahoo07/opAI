import React, {useState, useEffect} from "react";
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
    image: "https://cdn.leonardo.ai/users/a9924c17-c750-4792-8be7-482823c2d711/generations/e1724931-82b3-487d-989d-09fc9859cd50/Leonardo_Anime_XL_In_a_semireal_anime_style_in_the_heart_of_a_1.jpg?w=512",
    creator: "CZ.eth"
  },
  {
    title: "Crypto Agent",
    description: "An AI agent that trades cryptocurrencies.",
    image: "https://cdn.leonardo.ai/users/0d067c6a-7648-4b56-b313-cdb2c7dee6f3/generations/e1b99d6e-2ef2-493e-9adb-74207d3735aa/Leonardo_Anime_XL_Create_an_animestyle_character_surrounded_by_2.jpg?w=512",
    creator: "Doctor.eth"
  },
  {
    title: "Healthcare Agent",
    description: "An AI agent that provides medical diagnosis and treatment.",
    image: "https://cdn.leonardo.ai/users/cf96710a-7ada-4a1c-83a7-aae9d195d243/generations/e8d9f2ad-8be8-463d-8fc5-18381786b4a5/Leonardo_Anime_XL_Digital_illustration_featuring_an_animestyle_2.jpg?w=512",
    creator: "Satoshi.eth"
  },
  {
    title: "Stock Market Agent",
    description: "An AI agent that predicts stock market trends and trades.",
    image: "https://cdn.leonardo.ai/users/08a03a53-7188-40d5-b5b3-15ba98e17e12/generations/6b379b5b-7336-4c55-b1d1-c96d54f49e6d/Leonardo_Anime_XL_A_creative_anime_character_named_Kaito_Tanak_3.jpg",
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
                    <CardContent className="relative h-full flex flex-col justify-end">
                      <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                          <p className="text-lg text-white/80">{feature.description}</p>
                        </div>
                        <div className="space-y-4 mt-4">
                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              className="flex-1 bg-black/30 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
                            >
                              <EyeIcon className="w-4 h-4 mr-2" />
                              USE
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
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-5">
                    <div className="animate-bounce">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
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