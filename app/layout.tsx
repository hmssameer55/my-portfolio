import '@styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script';

const inter = Montserrat({ subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: "Sameer's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
                    <Script id="clarity-script" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "mzd5swhack");
                `}
            </Script>
        {children}</body>
    </html>
  )
}
