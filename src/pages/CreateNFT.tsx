import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { ethers } from "ethers";
import contractABI from "../abi/AIAgentRegistry.json";
import { toast } from "sonner";

const modelData = {
  "models": [
    {
      "model": "OpenAIChat",
      "ids": ["gpt-4o"]
    },
    {
      "model": "Claude",
      "ids": ["claude-3-5-sonnet-20240620"]
    },
    {
      "model": "Gemini",
      "ids": ["gemini-1.5-flash"]
    },
    {
      "model": "Groq",
      "ids": [
        "distil-whisper-large-v3-en",
        "gemma2-9b-it",
        "gemma-7b-it",
        "llama-3.3-70b-versatile",
        "llama-3.1-70b-versatile",
        "llama-3.1-8b-instant"
      ]
    }
  ]
};

const CreateNFT = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [availableIds, setAvailableIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedModel) {
      const model = modelData.models.find(m => m.model === selectedModel);
      setAvailableIds(model?.ids || []);
      setSelectedId(""); // Clear selected ID when model changes
    }
  }, [selectedModel]);

  const CONTRACT_ADDRESS = "0x2e593c7227D5527a075724a01d4dC07Ca7E68a52";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Random ethereum addresses for agent token and DAO
      const randomAgentToken = ethers.Wallet.createRandom().address;
      const randomDaoAddress = ethers.Wallet.createRandom().address;

      // Get provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract instance
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI.abi,
        signer
      );
      // Call registerAgent function
      const tx = await contract.registerAgent(
        name,
        description,
        instructions,
        selectedModel,
        selectedId,
        randomAgentToken,
        randomDaoAddress
      );

      await tx.wait();
      navigate(-1); // Return to previous page on success
    } catch (err) {
      toast.error(`Failed to create AI agent: ${err.message}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-background p-6">
      <Button
        variant="ghost"
        className="rounded-full mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter AI agent name"
            className="bg-card"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="instructions" className="text-sm font-medium">
            Instructions
          </label>
          <Textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter instructions (one per line)"
            className="min-h-[100px] bg-card"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="bg-card"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Model</label>
            <Select
              value={selectedModel}
              onValueChange={setSelectedModel}
            >
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                {modelData.models.map((model) => (
                  <SelectItem key={model.model} value={model.model}>
                    {model.model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">ID</label>
            <Select
              value={selectedId}
              onValueChange={setSelectedId}
              disabled={!selectedModel}
            >
              <SelectTrigger className="bg-card">
                <SelectValue placeholder="Select ID" />
              </SelectTrigger>
              <SelectContent>
                {availableIds.map((id) => (
                  <SelectItem key={id} value={id}>
                    {id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          Create AI Agent
        </Button>
      </form>
    </div>
  );
};

export default CreateNFT;