import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArtifactDetailsProps } from "@/lib/interface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { FormatPercent, IntStatId } from "@/lib/utils";

const ArtifactDetails: React.FC<ArtifactDetailsProps> = ({ artifact }) => {
  return (
    <div className="max-w-[300px] shadow-lg">
      <div className="bg-[#bd6833] p-0.5">
        <div className="border-2 border-[#9f5427] text-white">
          <div className="ml-2">{artifact.Artifacts.name}</div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-[#e2ac53] to-[#6b5453]">
        <div className="flex items-center justify-between text-white">
          <div className="ml-3 space-y-2">
            <div>{artifact.ArtifactTypes.japanese}</div>
            <div>
              <div className="text-sm">{artifact.Stats.text}</div>
              <div className="text-2xl">{artifact.ArtifactMainStats.star5}</div>
            </div>
            <div className="flex">
              <StarFilledIcon color="#fecc32" />
              <StarFilledIcon color="#fecc32" />
              <StarFilledIcon color="#fecc32" />
              <StarFilledIcon color="#fecc32" />
              <StarFilledIcon color="#fecc32" />
            </div>
          </div>
          <Avatar className="w-32 h-32">
            <AvatarImage src={artifact.ArtifactIcons.url} />
            <AvatarFallback>{artifact.ArtifactIcons.artifactId}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#816c58] to-[#b79056]" />
      <div className="bg-[#ece5d7] px-4 py-2 space-y-2">
        <div className="flex items-center justify-between">
          <Badge className="text-base">+20</Badge>
        </div>
        {artifact.ArtifacterSubOptions.map((sub) => (
          <ul
            className="list-inside list-disc font-semibold text-[#545963]"
            key={sub.id}
          >
            <li>
              {sub.Stats.text}+
              {IntStatId(sub.statId.toString())
                ? sub.value
                : FormatPercent(sub.value)}
            </li>
          </ul>
        ))}
        <div className="text-[#64af5d]">{artifact?.ArtifactSets.name}</div>
        <ul className="list-inside list-disc">
          <li className="text-[#727781]">
            {artifact?.ArtifactSets.twoPieceBonuses}
          </li>
          <li className="text-[#727781]">
            {artifact?.ArtifactSets.fourPieceBonuses}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArtifactDetails;
