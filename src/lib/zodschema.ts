import { z } from "zod";

export const postArtifacterSchema = z.object({
  typeId: z.number(),
  setId: z.number(),
  mainStatId: z.number(),
  subOptions: z.array(z.object({ statId: z.number(), value: z.number() })),
});
