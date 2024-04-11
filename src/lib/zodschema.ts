import { z } from "zod";

const PostArtifacterSchema = z.object({
  userId: z.string(),
  typeId: z.string(),
  setId: z.string(),
  artifactId: z.string(),
  mainStatId: z.string(),
  subOptions: z.array(z.object({ statId: z.string(), value: z.string() })),
});

const ArtifacterSchema = z.object({
  id: z.string(),
  userId: z.string(),
  score: z.number(),
  artifactId: z.number(),
  setId: z.number(),
  typeId: z.number(),
  mainStatId: z.number(),
});

const PostTeamCompositionSchema = z.object({
  name: z.string(),
  characterId: z.string(),
  characterLevelId: z.string(),
  normalAttackLevel: z.string(),
  elementalSkillLevel: z.string(),
  elementalBurstLevel: z.string(),
  constellationRank: z.string(),
  weaponId: z.string(),
  weaponLevelId: z.string(),
  refinementRank: z.string(),
  flowerId: z.string(),
  plumeId: z.string(),
  sandId: z.string(),
  gobletId: z.string(),
  circletId: z.string(),
  buffersId: z.object({
    passiveTalents: z.array(z.string()),
    characters: z.array(z.string()),
    weapons: z.array(z.string()),
    artifacts: z.array(z.string()),
  }),
});

export { PostArtifacterSchema, ArtifacterSchema, PostTeamCompositionSchema };
