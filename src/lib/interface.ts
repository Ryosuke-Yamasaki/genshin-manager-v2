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

export type {
  ArtifactTypes,
  ArtifactMainStats,
  ArtifactIcons,
  Artifacts,
  SelectArtifactTypeProps,
  SelectArtifactMainStatProps,
  SelectArtifactProps,
  SelectDialogProps,
};
