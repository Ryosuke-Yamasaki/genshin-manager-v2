import { GetVisions } from "@/actions/getVisions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { GetCharacters } from "@/actions/getCharacters";

const Sidebar = async () => {
  const visions = await GetVisions();
  const characters = await GetCharacters();

  return (
    <div className="p-4 space-y-2 w-[170px]">
      <div className="text-lg">キャラクター</div>
      <Link href="/data/characters" className="text-sm">
        キャラクター一覧
      </Link>
      <Accordion type="multiple" className="space-y-1">
        {visions.map((vision) => (
          <AccordionItem key={vision.id} value={vision.id} className="w-full">
            <AccordionTrigger className="indent-1">
              {vision.japanese}元素
            </AccordionTrigger>
            <AccordionContent className="px-4">
              {characters
                .filter((character) => character.visionId === vision.id)
                .map((character) => (
                  <Link
                    key={character.id}
                    href={`/data/characters/${character.id}`}
                    className="text-sm"
                  >
                    <ul className="list-disc list-inside">
                      <li>{character.name}</li>
                    </ul>
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
