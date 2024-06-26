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
  headerTitle: string;
  icon: { artifactId: number; url: string };
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

interface SectionWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  id: string;
}

interface ProfileProps {
  character: Character;
  url: { characterId: number; icon: string; gacha: string };
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
  SectionWrapperProps,
  ProfileProps,
  StatsProps,
  ContentsProps,
  TalentsProps,
  PassiveTalentsProps,
  ConstellationsProps,
};
