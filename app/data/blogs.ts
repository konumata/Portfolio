export const blogs = {
  title: 'BLOG',
  description: '技術的な知見や開発で得た経験をQiita、Zenn、noteで発信しています。主にWeb開発、システム設計、プログラミングに関する記事を執筆しています。',
  platforms: [
    {
      name: 'Qiita',
      url: process.env.NEXT_PUBLIC_QIITA_URL as string,
      icon: 'image/qiita.png'
    },
    {
      name: 'Zenn',
      url: process.env.NEXT_PUBLIC_ZENN_URL as string,
      icon: 'image/zenn.png'
    },
    {
      name: 'note',
      url: process.env.NEXT_PUBLIC_NOTE_URL as string,
      icon: 'image/note.png'
    }
  ]
};