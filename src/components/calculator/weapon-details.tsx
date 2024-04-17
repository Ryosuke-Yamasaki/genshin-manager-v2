import { StarFilledIcon } from "@radix-ui/react-icons";
import { WeaponDetailsProps } from "@/lib/interface";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { PostTeamCompositionSchema } from "@/lib/zodschema";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SelectLevel from "./select-level";
import SelectRefinement from "./select-refinement";
import parse from "html-react-parser";
import { FormatPercent } from "@/lib/utils";

const WeaponDetails: React.FC<WeaponDetailsProps> = ({ weapon, levels }) => {
  const { watch } = useFormContext<z.infer<typeof PostTeamCompositionSchema>>();

  const weaponLevel = levels.find(
    (level) => level.id.toString() === watch("weaponLevelId")
  )?.value;

  return (
    <div className="max-w-[300px] shadow-lg">
      <div className="bg-[#bd6833] p-0.5">
        <div className="border-2 border-[#9f5427] text-white">
          <div className="ml-2">{weapon.name}</div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-[#e2ac53] to-[#6b5453]">
        <div className="flex items-center justify-between text-white">
          <div className="mx-3">
            <div className="text-xs">{weapon.WeaponTypes.japanese}</div>
            <div>
              <div className="opacity-50 text-xs">{weapon.Stats.text}</div>
              <div>
                {weapon.subStatId === 400
                  ? weapon.WeaponSubStats[weaponLevel!]
                  : FormatPercent(weapon.WeaponSubStats[weaponLevel!])}
              </div>
            </div>
            <div>
              <div className="opacity-50 text-xs">基礎攻撃力</div>
              <div className="text-2xl">
                {weapon.WeaponBaseAttacks[weaponLevel!].toFixed(0)}
              </div>
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
            <AvatarImage src={weapon.WeaponImageUrls.url} />
            <AvatarFallback>{weapon.WeaponImageUrls.weaponId}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#816c58] to-[#b79056]" />
      <div className="bg-[#ece5d7] px-4 py-2 space-y-2 max-h-[400px] overflow-auto">
        <div className="space-y-1">
          <SelectLevel levels={levels} formName="weaponLevelId" />
          <SelectRefinement />
        </div>
        <div>
          <div className="text-[#727781]">
            {
              weapon.WeaponRefinements[Number(watch("refinementRank")) - 1]
                .title
            }
          </div>
          <ul className="list-inside list-disc">
            <li className="text-[#727781]">
              {parse(
                weapon.WeaponRefinements[Number(watch("refinementRank")) - 1]
                  .description
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;
