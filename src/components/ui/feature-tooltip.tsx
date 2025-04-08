import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/mobile-tooltip";

interface FeatureTooltipProps {
  word: string;
  description: string;
}

export function FeatureTooltip({ word, description }: FeatureTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="underline decoration-dotted cursor-pointer">
          {word}
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          sideOffset={5}
          className="p-2 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20"
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
