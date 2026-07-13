import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Be.Chance - هنر تصادفی',
  description: 'یک دلار بده، هنر تصادفی بگیر! هر خرید = یک تصویر منحصربه‌فرد + شانس قرعه‌کشی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
        {children}
      </body>
    </html>
  )
}
