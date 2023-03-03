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
        <div className="max-w-md w-full bg-white">{children}</div>
      </body>
    </html>
  )
}
