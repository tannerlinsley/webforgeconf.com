import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Web Forge Conf',
      },
      {
        name: 'description',
        content:
          'A new kind of web developer conference. A community funded, not for profit event built for creators and the developers who use their work.',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Web Forge Conf - A new kind of web developer conference',
      },
      {
        property: 'og:description',
        content:
          'A community funded, not for profit event built for creators and the developers who use their work. Less stage. More story. All signal.',
      },
      {
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        property: 'og:url',
        content: 'https://webforgeconf.com',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Web Forge Conf - A new kind of web developer conference',
      },
      {
        name: 'twitter:description',
        content:
          'A community funded, not for profit event built for creators and the developers who use their work. Less stage. More story. All signal.',
      },
      {
        name: 'twitter:image',
        content: '/og-image.png',
      },
      {
        name: 'twitter:url',
        content: 'https://webforgeconf.com',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        {/* <Scripts /> */}
      </body>
    </html>
  )
}
