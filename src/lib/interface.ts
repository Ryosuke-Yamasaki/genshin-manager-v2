interface ArtifactTypes {
  id: number;
  japanese: string;
  english: string;
}

interface ArtifactSets {
  id: number;
  name: string;
  twoPieceBonuses: string;
  fourPieceBonuses: string;
}

interface ArtifactMainStats {
  statId: number;
  star4: number;
  star5: number;
  Stats: Stats;
}

interface ArtifactIcons {
  artifactId: number;
  url: string;
}

interface Artifacts {
  id: number;
  name: string;
  description: string;
  typeId: number;
  setId: number;
  star: number;
  ArtifactSets: ArtifactSets;
}

interface Stats {
  id: number;
  japanese: string;
  english: string;
  text: string;
}

interface ArtifacterRegisterFormProps {
  userId: string;
  typeId: string;
  setId: string;
  types: ArtifactTypes[];
  icons: ArtifactIcons[];
  stats: Stats[];
}

interface SelectArtifactTypeProps {
  typeId: number;
  setId: string;
  types: ArtifactTypes[];
}

interface SelectArtifactMainStatProps {
  typeId: string;
}

interface SelectArtifactProps {
  typeId: string;
  icons: ArtifactIcons[];
  icon: ArtifactIcons;
}

interface SelectDialogProps {
  children: React.ReactNode;
  iconSize: string;
  iconId: number | string;
  iconUrl: string;
  className?: string;
}

interface SubOptionFormProps {
  stats: Stats[];
}

interface Artifacter {
  id: string;
  score: number;
  artifactId: number;
  typeId: number;
  setId: number;
  mainStatId: number;
  createdAt: string;
  ArtifacterSubOptions: { statId: number; value: number }[];
  ArtifactTypes: ArtifactTypes;
  ArtifactSets: ArtifactSets;
  ArtifactIcons: ArtifactIcons;
  Stats: Stats;
}

interface Visions {
  id: number;
  japanese: string;
  english: string;
}

interface WeaponTypes {
  id: number;
  japanese: string;
  english: string;
}

interface Genders {
  id: number;
  japanese: string;
  english: string;
}

interface Regions {
  id: number;
  japanese: string;
  english: string;
}

interface Character {
  id: number;
  name: string;
  weaponTypeId: number;
  genderId: number;
  star: number;
  ascensionBonusStatId: number;
  signatureWeaponId: number;
  birthday: string;
  title: string;
  description: string;
  regionId: number | undefined;
  affiliation: string;
  visionId: number;
  constellation: string;
  Visions: Visions;
  WeaponTypes: WeaponTypes;
  Genders: Genders;
  Regions: Regions | undefined;
  CharacterBaseHps: {
    [K: string]: number;
  };
  CharacterBaseAttacks: {
    [K: string]: number;
  };
  CharacterBaseDefenses: {
    [K: string]: number;
  };
  CharacterAscensionBonusStats: {
    [K: string]: number | Stats;
    Stats: Stats;
  };
}

interface CharacterImageUrl {
  characterId: number;
  icon: string;
  gacha: string;
}

interface SectionWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  id: string;
}

interface ProfileProps {
  character: Character;
  url: CharacterImageUrl;
  title: { label: string; value: string };
}
interface StatsProps {
  character: Character;
  title: { label: string; value: string };
}

interface ContentsProps {
  contents: { label: string; value: string }[];
  title: { label: string; value: string };
}

interface TalentsProps {
  characterId: string;
  title: { label: string; value: string };
}

interface PassiveTalentsProps {
  characterId: string;
  title: { label: string; value: string };
}

interface ConstellationsProps {
  characterId: string;
  title: { label: string; value: string };
}

interface Levels {
  id: number;
  level: number;
  ascensionRank: number;
  value: string;
  valueText: string;
}

interface Constellation {
  id: number;
  characterId: number;
  rank: number;
  title: string;
  description: string;
  iconUrl: string;
}

interface Weapon {
  id: number;
  name: string;
  description: string;
  weaponTypeId: number;
  star: number;
  baseAttackId: number;
  subStatId: number;
  WeaponImageUrls: WeaponImageUrl;
}

interface WeaponImageUrl {
  weaponId: number;
  url: string;
}

interface TeamCompositionRegisterFormProps {
  character: Character;
  levels: Levels[];
  constellations: Constellation[];
  characterImageUrls: CharacterImageUrl[];
  characterImageUrl: CharacterImageUrl;
  weapons: Weapon[];
  artifacts: Artifacter[];
}

interface CharacterProps {
  character: Character;
  levels: Levels[];
  constellations: Constellation[];
  characterImageUrls: CharacterImageUrl[];
  characterImageUrl: CharacterImageUrl;
}

interface SelectLevelProps {
  levels: Levels[];
  formName: string;
}

interface SelectConstellationProps {
  constellations: Constellation[];
}

interface SelectTalentLevelProps {
  name: string;
  label: string;
}

interface SelectCharacterProps {
  characterImageUrls: CharacterImageUrl[];
  characterImageUrl: CharacterImageUrl;
}

interface EquipmentsProps {
  weapons: Weapon[];
  artifacts: Artifacter[];
}

interface SelectEquipmentWeapperProps {
  children: React.ReactNode;
  formName: string;
  iconSize?: string;
  iconId: string;
  iconUrl: string;
}

export type {
  ArtifactTypes,
  ArtifactSets,
  ArtifactMainStats,
  ArtifactIcons,
  Artifacts,
  Stats,
  ArtifacterRegisterFormProps,
  SelectArtifactTypeProps,
  SelectArtifactMainStatProps,
  SelectArtifactProps,
  SelectDialogProps,
  SubOptionFormProps,
  Artifacter,
  Visions,
  WeaponTypes,
  Genders,
  Regions,
  Character,
  CharacterImageUrl,
  SectionWrapperProps,
  ProfileProps,
  StatsProps,
  ContentsProps,
  TalentsProps,
  PassiveTalentsProps,
  ConstellationsProps,
  Levels,
  Constellation,
  Weapon,
  WeaponImageUrl,
  TeamCompositionRegisterFormProps,
  CharacterProps,
  SelectLevelProps,
  SelectConstellationProps,
  SelectTalentLevelProps,
  SelectCharacterProps,
  EquipmentsProps,
  SelectEquipmentWeapperProps,
};
