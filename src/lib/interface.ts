export interface ArtifactTypes {
  id: number;
  japanese: string;
  english: string;
}

export interface ArtifactMainStats {
  statId: number;
  star4: number;
  star5: number;
  Stats: { id: number; japanese: string; english: string; text: string };
}
