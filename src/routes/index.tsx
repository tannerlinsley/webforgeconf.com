import { createFileRoute } from '@tanstack/react-router'
import {
  LuCode,
  LuUsers,
  LuSparkles,
  LuHandshake,
  LuRocket,
  LuMessageSquare,
  LuZap,
  LuTarget,
  LuHeart,
  LuVideo,
  LuBuilding2,
} from 'react-icons/lu'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6'
import { SiBluesky } from 'react-icons/si'
import creatorsData from '../data/creators.json'

// Google Form URLs for each type
const FORM_URLS = {
  developer:
    'https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url&entry.1276834846=Developer+who+may+want+to+attend',
  creator:
    'https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url&entry.1276834846=Creator,+open+source+maintainer,+or+educator+who+wants+to+host+a+booth',
  sponsor:
    'https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url&entry.1276834846=Sponsor+who+wants+to+support+the+event+and+engage+with+the+community',
  organizer:
    'https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url&entry.1276834846=Organizer+or+production+partner+who+can+help+run+the+event',
}

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  const faqs = [
    {
      question: 'Is this for profit?',
      answer: 'No. All funds go to costs and improving next year.',
    },
    {
      question: 'Will there be talks?',
      answer:
        'Only short demos or mini events. The floor is the main experience.',
    },
    {
      question: 'Where will it be?',
      answer: 'TBD.',
    },
    {
      question: 'When will it be?',
      answer: 'TBD.',
    },
    {
      question: 'Will travel be covered for creators?',
      answer:
        'Yes. Travel will be covered for all creators, funded through sponsors and ticket sales.',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display text-blue-900 dark:text-blue-100 mb-6">
            Web Forge Conference
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto font-light">
            A new kind of web developer conference
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto font-light">
            A community funded, not for profit event built for creators and web
            developers — full stack, TypeScript, JavaScript, HTML, CSS, and
            everything in between.
          </p>
          <div className="mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Featuring creators from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {Array.from({ length: 5 }).map((_, index) => {
                const creator = creatorsData[index]
                const isPlaceholder = !creator

                const badgeContent = isPlaceholder ? (
                  <a
                    href={FORM_URLS.creator}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-400 dark:border-gray-600 hover:scale-110 hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer flex items-center justify-center"
                  >
                    <span className="text-gray-500 dark:text-gray-400 text-lg font-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      +
                    </span>
                  </a>
                ) : creator.image ? (
                  creator.url ? (
                    <a
                      href={creator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-12 h-12 rounded-full object-contain bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 hover:scale-110 transition-transform cursor-pointer"
                      />
                    </a>
                  ) : (
                    <img
                      src={creator.image}
                      alt={creator.name}
                      className="w-12 h-12 rounded-full object-contain bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5 hover:scale-110 transition-transform cursor-pointer"
                    />
                  )
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform cursor-pointer" />
                )

                return (
                  <div key={index} className="group relative">
                    {badgeContent}
                    {isPlaceholder ? (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        Become a creator
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
                      </div>
                    ) : (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {creator.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#signup"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Register your interest
            </a>
            <a
              href="https://discord.gg/4Te4F9Ap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
            >
              <FaDiscord className="w-5 h-5" />
              Join Discord
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#developer"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-2xl transition-colors border border-blue-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
            >
              <LuCode className="w-5 h-5" />
              Developers
            </a>
            <a
              href="#creator"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-2xl transition-colors border border-blue-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
            >
              <LuSparkles className="w-5 h-5" />
              Creators
            </a>
            <a
              href="#sponsor"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-2xl transition-colors border border-blue-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
            >
              <LuHandshake className="w-5 h-5" />
              Sponsors
            </a>
            <a
              href="#partner"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-2xl transition-colors border border-blue-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2"
            >
              <LuUsers className="w-5 h-5" />
              Partners
            </a>
          </div>
        </div>
      </section>

      {/* Unified Pitch Section */}
      <section
        id="pitch"
        className="relative py-40 px-6 bg-blue-900 dark:bg-gray-950 text-white scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#pitch"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              The Experience
            </a>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Less stage. More story. All signal.
            </h2>
            <p className="text-xl text-blue-200 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Most conferences still feel the same — sit, listen, leave. This
              one flips that. Instead of long talks, every creator and OSS team
              gets their own space where you can walk up, ask questions, and see
              what they're building. It's like the hallway track turned into the
              whole event. You'll meet people behind your favorite tools, see
              new projects before launch, and have real conversations that
              actually move your work forward.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuCode className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-semibold">Just here to attend?</h3>
              </div>
              <p className="text-blue-200 dark:text-gray-300 mb-6">
                Jump to Developer section
              </p>
              <a
                href="#developer"
                className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-white font-semibold rounded-2xl transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center gap-2"
              >
                View Developer Info
                <LuRocket className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-blue-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuSparkles className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-semibold">Want to be a creator?</h3>
              </div>
              <p className="text-blue-200 dark:text-gray-300 mb-6">
                Jump to Creator section
              </p>
              <a
                href="#creator"
                className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-white font-semibold rounded-2xl transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center gap-2"
              >
                View Creator Info
                <LuRocket className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-blue-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuHandshake className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-semibold">
                  Interested in sponsoring?
                </h3>
              </div>
              <p className="text-blue-200 dark:text-gray-300 mb-6">
                Jump to Sponsor section
              </p>
              <a
                href="#sponsor"
                className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-white font-semibold rounded-2xl transition-colors border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center gap-2"
              >
                View Sponsor Info
                <LuRocket className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section
        id="developer"
        className="relative py-40 px-6 bg-white dark:bg-gray-900 scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#developer"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              For Developers
            </a>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white mb-6">
              Built for builders
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              It's not another talk-heavy conference. It's the hallway track —
              turned into the whole event. Meet builders. See what's next. Build
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                What you can expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LuUsers className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Meet the people behind the projects you already use
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuMessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Learn through direct discussion and live demos, not passive
                    talks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuRocket className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Discover upcoming tools and frameworks before launch
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuZap className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    See new ideas before they're public, test unreleased tools
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Why it's different
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LuTarget className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No stage lights, no scripts, no "wait until the Q&A"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuHeart className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    The hallway track turned into the entire event
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuMessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Genuine conversations with people shaping the next wave
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <LuSparkles className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Be part of the first event that reflects how modern
                    developers engage
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href={FORM_URLS.developer}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              I want to attend
            </a>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section
        id="creator"
        className="relative py-40 px-6 bg-blue-50 dark:bg-gray-800 scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#creator"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              For Creators
            </a>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-white mb-6">
              You're not a speaker. You're the experience.
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This isn't another conference asking you to make slides, rehearse,
              or fit into a schedule. We give you your own space — your own
              booth — where you can meet developers face-to-face, show them what
              you're building, and have real, unfiltered conversations.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Why You'll Love It
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <div className="flex items-center gap-3 mb-3">
                  <LuHeart className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    No talk anxiety
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No decks, no slides, no stage. Just conversation and
                  collaboration.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <div className="flex items-center gap-3 mb-3">
                  <LuUsers className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Deeper exposure
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Engage with more people, more meaningfully, than any single
                  talk could.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <div className="flex items-center gap-3 mb-3">
                  <LuSparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Creative control
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  It's your space. Run it your way.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <div className="flex items-center gap-3 mb-3">
                  <LuVideo className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Organic visibility
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Every camera, every post, every recap captures you in action.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {Array.from({ length: Math.max(3, creatorsData.length) }).map(
              (_, index) => {
                const creator = creatorsData[index]
                const isPlaceholder = !creator

                const content = (
                  <>
                    {isPlaceholder ? (
                      <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                          Your Project Here
                        </span>
                      </div>
                    ) : (
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-64 h-64 object-contain rounded-full mb-4"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 text-center">
                      {isPlaceholder ? 'Your Project Here' : creator.name}
                    </h3>
                  </>
                )

                return (
                  <div key={index} className="flex flex-col items-center">
                    {isPlaceholder || !creator.url ? (
                      content
                    ) : (
                      <a
                        href={creator.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    )}
                  </div>
                )
              },
            )}
          </div>

          <div className="text-center">
            <a
              href={FORM_URLS.creator}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Apply to be a creator
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://docs.google.com/document/d/1UaK47KV2ZT3PjurUFDntHkX1_gDi2CT_zIngiInEtZM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
              >
                Learn about our VIP Framework and selection process
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section
        id="sponsor"
        className="relative py-40 px-6 bg-white dark:bg-gray-900 scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#sponsor"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              For Sponsors
            </a>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Don't just be seen — be part of the conversation
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This isn't about logo placement or lead capture — it's about
              trust, visibility, and cultural relevance. Your brand becomes a
              visible part of the ecosystem — integrated into the same space
              where every conversation and livestream moment happens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuZap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  High engagement, low friction
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Placed where the energy is — surrounded by the projects and
                creators developers care about.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuBuilding2 className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Zones, not booths
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Interactive, branded spaces for demos and OSS collaborations
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuVideo className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Content goldmine
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Built for social clips, livestreams, and highlight reels — every
                one naturally features your presence.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/20">
              <div className="flex items-center gap-3 mb-3">
                <LuHeart className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Deeper authenticity
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Connect through tools, collaboration, and shared value. No
                canned pitches.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={FORM_URLS.sponsor}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Become a sponsor
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://docs.google.com/document/d/19vtBnEQ3kNSHyzozkwx0tmCKBd4Y7m2n1q8LTSEwunc/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
              >
                View our Sponsorship Prospectus
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partner"
        className="relative py-40 px-6 bg-blue-50 dark:bg-gray-800 scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#partner"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              For Partners
            </a>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Partner with us to build something different
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're looking for two types of partners: operations partners who
              can handle logistics, production, and venue management, and media
              partners — influencers and content creators who can help us build
              buzz, create marketing materials, livestream micro-interactions,
              and serve as the media foundation for the event.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Types of Partnerships
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Operations Partners
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Handle logistics, production, and venue management. We bring
                  the vision, format, and creator network.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Media Partners
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Content creators and influencers who'll be VIPs, create
                  marketing materials, livestream interactions, and build buzz
                  around the event.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Why Partner With Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Built for modern behavior
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Developers attend for hallway tracks — this is that,
                  formalized.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Higher engagement per square foot
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Each creator interacts with hundreds of attendees, not a
                  handful of talk-watchers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Media-first approach
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No traditional stage or expensive A/V. Media partners provide
                  coverage and content creation in exchange for exposure.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-2xl shadow-black/10 dark:shadow-black/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Scalable production
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Similar to an expo floor, but with lighter A/V and flexible
                  layouts.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={FORM_URLS.organizer}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Become a partner
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative py-40 px-6 bg-white dark:bg-gray-900 scroll-mt-36"
      >
        <div className="max-w-3xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#faq"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              FAQ
            </a>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/20 overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 shrink-0 ml-4 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section
        id="signup"
        className="relative py-40 px-6 bg-blue-900 dark:bg-gray-950 text-white scroll-mt-36"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#signup"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Register
            </a>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register your interest
          </h2>
          <p className="text-xl text-blue-200 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            This event is community funded and not for profit. Filling out the
            form helps us size and shape the conference.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a
              href={FORM_URLS.developer}
              className="px-6 py-4 bg-white hover:bg-blue-50 dark:bg-white dark:hover:bg-gray-100 text-blue-900 dark:text-gray-900 font-semibold rounded-2xl transition-colors border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-950"
            >
              I am a developer
            </a>
            <a
              href={FORM_URLS.creator}
              className="px-6 py-4 bg-white hover:bg-blue-50 dark:bg-white dark:hover:bg-gray-100 text-blue-900 dark:text-gray-900 font-semibold rounded-2xl transition-colors border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-950"
            >
              I am a creator
            </a>
            <a
              href={FORM_URLS.sponsor}
              className="px-6 py-4 bg-white hover:bg-blue-50 dark:bg-white dark:hover:bg-gray-100 text-blue-900 dark:text-gray-900 font-semibold rounded-2xl transition-colors border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-950"
            >
              I represent a sponsor
            </a>
            <a
              href={FORM_URLS.organizer}
              className="px-6 py-4 bg-white hover:bg-blue-50 dark:bg-white dark:hover:bg-gray-100 text-blue-900 dark:text-gray-900 font-semibold rounded-2xl transition-colors border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 dark:focus:ring-offset-gray-950"
            >
              I am a partner
            </a>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNYlfKaLvHry4Z-8bgbeszCMgQOSSB1drOE1EgKD5FUrQUoA/viewform?usp=pp_url"
            className="inline-block px-6 py-3 text-blue-200 dark:text-gray-400 hover:text-white font-medium transition-colors"
          >
            I am not sure
          </a>
        </div>
      </section>

      {/* Discord Community Section */}
      <section
        id="discord"
        className="relative py-40 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900 text-white scroll-mt-36"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a
              href="#discord"
              className="inline-block px-10 py-5 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white text-4xl md:text-5xl font-display rounded-full border-2 border-white/40 dark:border-white/20 shadow-2xl shadow-black/30 dark:shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Community
            </a>
          </div>
          <div className="mb-8">
            <FaDiscord className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-indigo-100 dark:text-indigo-200 mb-4 max-w-2xl mx-auto leading-relaxed">
              Connect with fellow developers, creators, and partners in our
              Discord server. Share your ideas, excitement, and help shape the
              future of Web Forge Conference.
            </p>
            <p className="text-lg text-indigo-200 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://discord.gg/4Te4F9Ap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-indigo-50 text-indigo-600 dark:text-indigo-900 font-semibold rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 flex items-center gap-3"
            >
              <FaDiscord className="w-6 h-6" />
              Join Discord Server
            </a>
          </div>
          <div className="pt-8 border-t border-white/20">
            <p className="text-lg text-indigo-100 dark:text-indigo-200 mb-6">
              Share your excitement about Web Forge Conference
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://twitter.com/intent/tweet?text=I'm%20excited%20about%20%40webforgeconf%20-%20a%20new%20kind%20of%20web%20developer%20conference%20built%20for%20creators%20and%20developers!%20Less%20stage.%20More%20story.%20All%20signal.%20%0A%0Ahttps%3A%2F%2Fwebforgeconf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Share on X
              </a>
              <a
                href="https://bsky.app/intent/compose?text=I'm%20excited%20about%20Web%20Forge%20Conference%20-%20a%20new%20kind%20of%20web%20developer%20conference%20built%20for%20creators%20and%20developers!%20Less%20stage.%20More%20story.%20All%20signal.%20%0A%0Ahttps%3A%2F%2Fwebforgeconf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-sky-500/20 hover:bg-sky-500/30 backdrop-blur-sm text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 flex items-center gap-2 border border-white/20 hover:border-white/40"
              >
                <SiBluesky className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Share on Bluesky
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-blue-950 dark:bg-black text-blue-200 dark:text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3">
                Mission
              </h3>
              <p className="text-blue-300 dark:text-gray-500">
                A community funded, not for profit developer event.
              </p>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3">
                Contact
              </h3>
              <p className="text-blue-300 dark:text-gray-500">
                <a
                  href="mailto:webforgeconf@tanstack.com"
                  className="hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  webforgeconf@tanstack.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3">
                Resources
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://docs.google.com/document/d/1UaK47KV2ZT3PjurUFDntHkX1_gDi2CT_zIngiInEtZM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  VIP Framework
                </a>
                <a
                  href="https://docs.google.com/document/d/19vtBnEQ3kNSHyzozkwx0tmCKBd4Y7m2n1q8LTSEwunc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Sponsorship Prospectus
                </a>
                <a
                  href="https://github.com/tannerlinsley/webforgeconf.com/blob/main/CREATORS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Creator Guide
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3">
                Links
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://discord.gg/4Te4F9Ap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="https://github.com/tannerlinsley/webforgeconf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/webforgeconf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 dark:border-gray-800 pt-8 text-center text-blue-400 dark:text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Web Forge Conf. All rights
              reserved.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/tannerlinsley/webforgeconf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-300 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 bg-blue-900/50 dark:bg-gray-900/50 rounded-full border border-blue-800/50 dark:border-gray-800/50 hover:border-blue-700 dark:hover:border-gray-700 transition-colors"
              >
                Built with TanStack Start
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
