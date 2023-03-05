import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Ledger',
  description: '가계부 관리',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col max-w-md w-full bg-white">
          <Header />
          <section className="flex-1">{children}</section>
        </div>
      </body>
    </html>
  )
}
