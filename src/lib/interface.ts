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

interface SelectArtifactTypeProps {
  typeId: number;
}

interface SelectArtifactMainStatProps {
  typeId: string;
  form: any;
}

export type {
  ArtifactTypes,
  ArtifactMainStats,
  ArtifactIcons,
  SelectArtifactTypeProps,
  SelectArtifactMainStatProps,
};
