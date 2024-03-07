import { z } from "zod";

export const postArtifacterSchema = z.object({
  userId: z.string(),
  typeId: z.number(),
  setId: z.number(),
  artifactId: z.number(),
  mainStatId: z.number(),
  subOptions: z.array(z.object({ statId: z.string(), value: z.string() })),
});

export const ArtifacterSchema = z.object({
  id: z.string(),
  userId: z.string(),
  score: z.number(),
  artifactId: z.number(),
  setId: z.number(),
  typeId: z.number(),
  mainStatId: z.number(),
});
