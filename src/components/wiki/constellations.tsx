import { ConstellationsProps } from "@/lib/interface";
import SectionWrapper from "./section-wrapper";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import parse from "html-react-parser";
import { GetConstellationsById } from "@/actions/getConstellationById";

const Constellations: React.FC<ConstellationsProps> = async ({
  characterId,
  title,
}) => {
  const constellations = await GetConstellationsById(characterId);
  console.log(constellations);

  return (
    <SectionWrapper headerTitle={title.value} id={title.label}>
      <Table className="w-fit">
        <TableBody>
          {constellations.map((constellation) => (
            <TableRow key={constellation.id} className="divide-x">
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={constellation.iconUrl}
                    className="h-16 w-16"
                  />
                  <AvatarFallback>{constellation.characterId}</AvatarFallback>
                </Avatar>
                <div className="text-center">第{constellation.rank}重</div>
              </TableCell>
              <TableCell>
                <div className="space-y-2">
                  <div className="text-lg">{constellation.title}</div>
                  <div>{parse(constellation.description)}</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionWrapper>
  );
};

export default Constellations;
