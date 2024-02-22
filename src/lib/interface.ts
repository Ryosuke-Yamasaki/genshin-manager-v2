import { UseFormReturn } from "react-hook-form";

interface ArtifactTypes {
  id: number;
  japanese: string;
  english: string;
}

interface ArtifactMainStats {
  statId: number;
  star4: number;
  star5: number;
  Stats: { id: number; japanese: string; english: string; text: string };
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
  ArtifactSets: {
    id: number;
    name: string;
    twoPieceBonuses: string;
    fourPieceBonuses: string;
  };
}

interface Stats {
  id: number;
  japanese: string;
  english: string;
  text: string;
}

interface SelectArtifactTypeProps {
  typeId: number;
  setId: string;
}

interface SelectArtifactMainStatProps {
  typeId: string;
  form: any;
}

interface SelectArtifactProps {
  typeId: string;
  setId: string;
}

interface SelectDialogProps {
  children: React.ReactNode;
  headerTitle: string;
  icon: { artifactId: number; url: string };
}

interface SubOptionFormProps {
  form: any;
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
  ArtifactTypes: { id: number; japanese: string };
  ArtifactSets: { id: number; text: string };
}

export type {
  ArtifactTypes,
  ArtifactMainStats,
  ArtifactIcons,
  Artifacts,
  Stats,
  SelectArtifactTypeProps,
  SelectArtifactMainStatProps,
  SelectArtifactProps,
  SelectDialogProps,
  SubOptionFormProps,
  Artifacter,
};
