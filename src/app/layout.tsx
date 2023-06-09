import Providers from "../utils/provider"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}