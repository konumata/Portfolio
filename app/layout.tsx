import React from "react"
import './global.css'

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