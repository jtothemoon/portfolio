import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <title>{metadata.title?.toString()}</title>
      <meta name="description" content={metadata.description?.toString()} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Lim Hyun Jin" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="4rxwgcipDI-3NLA-6ZHI_58PzTupyMsO4_WDt06f3dQ" />
      <meta name="naver-site-verification" content="b3a8b3edecfe1b668e1ea135572fc374d0659b10" />

      <meta property="og:title" content={metadata.title?.toString()} />
      <meta
        property="og:description"
        content={metadata.description?.toString()}
      />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Lim Hyun Jin" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Lim Hyun Jin" />
      <meta name="twitter:title" content={metadata.title?.toString()} />
      <meta
        name="twitter:description"
        content={metadata.description?.toString()}
      />
      <meta name="twitter:image" content="" />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
      <meta property="twitter:image:alt" content="Emanuel Peire" />
      <meta property="twitter:image:type" content="image/png" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000"></meta>

      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
  )
}
