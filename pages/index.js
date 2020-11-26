import Head from 'next/head'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import ThemeSwitcher from '../components/themeSwitcher'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>owo.rs community</title>
        <link rel="icon" href="icon.png"></link>
        <meta name="twitter:card" content="photo" key="twcard" />
        <meta name="twitter:creator" content="@emmaischic" key="twhandle" />

        <meta property="og:url" content="https://owo.rs" key="ogurl" />
        <meta property="og:image" content="/og.png" key="ogimage" />
        <meta property="og:site_name" content="owo.rs" key="ogsitename" />
        <meta property="og:title" content="owo.rs community" key="ogtitle" />
        <meta property="og:description" content="the owo.rs internet website for developers and everyone else" key="ogdesc" />
      </Head>
      <section>
        <div className="bg-white dark:bg-black flex flex-col h-screen m-auto  transition duration-300 ease-in-out dark:transition dark:duration-300 dark:ease-in-out">
          <div className="absolute right-2 top-2 fade-in-longer">
            <ThemeSwitcher />
          </div>
          <div className="m-auto fade-in">
            <div className="flex justify-evenly content-evenly">
              <div>
                <h1 className="text-6xl text-center text-gray-800 dark:text-gray-100">owo.rs</h1>
                <h3 className="text-gray-600 dark:text-gray-400">for developers</h3>
                <h5 className="text-gray-600 dark:text-gray-400 fade-in-longer">and for others too :)</h5>
              </div>
              <a href="https://discord.gg/7PUA9QWAYa">
                <FaDiscord className=" text-gray-800 dark:text-gray-100 mx-1" size="1.25rem" />

              </a>
              <a href="https://github.com/owoers">
                <FaGithub className=" text-gray-800 dark:text-gray-100 mx-1" size="1.25rem" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
