import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'

// function MyApp({ Component, pageProps: {session, ...pageProps} }) {
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
