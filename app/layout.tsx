import React from "react"
import './global.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | K - Engineer',
  description: 'フルスタックエンジニアを目指すKのポートフォリオサイトです。Web開発、システム設計、AIなど幅広い技術スタックを活かしたプロジェクト実績を紹介しています。',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" type="text/css" href="http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/4-1/css/reset.css"/>
        <link rel="stylesheet" type="text/css" href="http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/4-1/css/4-1.css"/>
      </head>
      <body>{children}</body>
    </html>
  )
}