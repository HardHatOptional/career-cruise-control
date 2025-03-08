import './global.css'

export const metadata = {
  title: 'Career Cruise Control with Dodge Challenge',
  description: 'Career advice and fun game to play',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}