import { z } from "zod"

export const UserValidation = z.object({
  profilePhoto: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
})

export type UserData = z.infer<typeof UserValidation>