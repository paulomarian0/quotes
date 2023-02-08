export class CreatePostDto {
  title: string
  content: string
  authorId: number
  created_at?: Date | string | null
}
