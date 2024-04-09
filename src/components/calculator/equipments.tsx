import { EquipmentsProps } from "@/lib/interface";
import SelectEquipmentWeapper from "./select-equipment-weapper";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useFormContext } from "react-hook-form";

const Equipments: React.FC<EquipmentsProps> = ({ weapons, artifacts }) => {
  const { setValue, watch } = useFormContext();

  const equipments = [
    {
      formName: "flowerId",
      label: "flower",
      typeId: 1,
      iconUrl: "Icon_Flower_of_Life",
      title: "花",
    },
    {
      formName: "plumeId",
      label: "plume",
      typeId: 2,
      iconUrl: "Icon_Plume_of_Death",
      title: "羽",
    },
    {
      formName: "sandId",
      label: "sands",
      typeId: 3,
      iconUrl: "Icon_Sands_of_Eon",
      title: "時計",
    },
    {
      formName: "gobletId",
      label: "goblet",
      typeId: 4,
      iconUrl: "Icon_Goblet_of_Eonothem",
      title: "杯",
    },
    {
      formName: "circletId",
      label: "circlet",
      typeId: 5,
      iconUrl: "Icon_Circlet_of_Logos",
      title: "冠",
    },
  ];

  return (
    <div className="p-2 grid grid-cols-6 gap-2 border rounded-lg">
      <div className="flex flex-col border rounded h-fit self-center">
        <SelectEquipmentWeapper
          formName="weaponId"
          iconSize={watch("weaponId") == "" ? undefined : "border-b"}
          iconId={watch("weaponId") || "weapon"}
          iconUrl={
            weapons.find((weapon) => weapon.id.toString() === watch("weaponId"))
              ?.WeaponImageUrls.url || "/Icon_Inventory_Weapons.webp"
          }
        >
          <div className="grid grid-cols-6 gap-2">
            {weapons.map((weapon) => (
              <Button
                variant="outline"
                size="icon"
                key={weapon.id}
                className="h-20 w-20"
                type="button"
                onClick={() => {
                  setValue("weaponId", weapon.id.toString());
                }}
              >
                <Avatar className="h-20 w-20">
                  <AvatarImage src={weapon.WeaponImageUrls.url} />
                  <AvatarFallback>
                    {weapon.WeaponImageUrls.weaponId}
                  </AvatarFallback>
                </Avatar>
              </Button>
            ))}
          </div>
        </SelectEquipmentWeapper>
        {!(watch("weaponId") == "") && (
          <div className="text-sm text-center">武器</div>
        )}
      </div>
      {equipments.map((equip) => (
        <div
          className="flex flex-col border rounded h-fit self-center"
          key={equip.typeId}
        >
          <SelectEquipmentWeapper
            formName={equip.formName}
            iconSize={
              watch(equip.formName) == "" ? undefined : "h-20 w-20 border-b"
            }
            iconId={watch(equip.formName) || equip.label}
            iconUrl={
              artifacts.find(
                (artifact) => artifact.id === watch(equip.formName)
              )?.ArtifactIcons.url || `/${equip.iconUrl}.webp`
            }
            key={equip.typeId}
          >
            <div className="grid grid-cols-6 gap-2">
              {artifacts
                .filter((artifact) => artifact.typeId === equip.typeId)
                .map((artifact) => (
                  <Button
                    variant="outline"
                    size="icon"
                    key={artifact.id}
                    className="h-20 w-20"
                    type="button"
                    onClick={() => {
                      setValue(equip.formName, artifact.id);
                    }}
                  >
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={artifact.ArtifactIcons.url} />
                      <AvatarFallback>
                        {artifact.ArtifactIcons.artifactId}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                ))}
            </div>
          </SelectEquipmentWeapper>
          {!(watch(equip.formName) == "") && (
            <div className="text-sm text-center">{equip.title}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Equipments;
