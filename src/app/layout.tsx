
import Providers from '../components/client/Providers/provider'
import './global.css'

export const metadata = {
  title: '모두 같이 알리고 올려봐요 | aligo oligo',
  description: '목표 달성 웹 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body>
        <main className='w-desktop mx-auto bg-white min-h-full'>
        <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
