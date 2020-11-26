import Head from 'next/head'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import ThemeSwitcher from '../components/themeSwitcher'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>uwu.rs community</title>
        <link rel="icon" href="icon.png"></link>
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@emmaischic" key="twhandle" />

        <meta property="og:url" content="https://uwu.rs" key="ogurl" />
        <meta property="og:image" content="https://uwu.rs/og.png" key="ogimage" />
        <meta property="og:site_name" content="uwu.rs" key="ogsitename" />
        <meta property="og:title" content="uwu.rs community" key="ogtitle" />
        <meta property="og:description" content="the uwu.rs internet website for developers and everyone else" key="ogdesc" />
        <script async defer data-website-id="55dde592-d0bd-43be-a4ff-e5cf3636dbf2" src="https://umami.izu.moe/umami.js"></script>
      </Head>
      <section>
        <div className="bg-white dark:bg-black flex flex-col h-screen m-auto  transition duration-300 ease-in-out dark:transition dark:duration-300 dark:ease-in-out">
          <div className="absolute right-2 top-2 fade-in-longer">
            <ThemeSwitcher />
          </div>
          <div className="m-auto fade-in">
            <div className="flex justify-evenly content-evenly">
              <div>
                <h1 className="text-6xl text-center text-gray-800 dark:text-gray-100">uwu.rs</h1>
                <h3 className="text-gray-600 dark:text-gray-400">for developers</h3>
                <h5 className="text-gray-600 dark:text-gray-400 fade-in-longer">and for others too :)</h5>
              </div>
              <a href="https://discord.gg/7PUA9QWAYa">
                <FaDiscord className=" text-gray-800 dark:text-gray-100 mx-1" size="1.25rem" />

              </a>
              <a href="https://github.com/uwuers">
                <FaGithub className=" text-gray-800 dark:text-gray-100 mx-1" size="1.25rem" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
