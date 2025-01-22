import Link from "next/link";

import {
  IconBrandDiscordFilled,
  IconBrandGoogleFilled,
  IconBrandTwitch,
} from "@tabler/icons-react";

export const metadata = {
  title: "Login - Tabletop Central",
  description: "Login to Tabletop Central",
};

export default function Login() {
  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-dvh bg-tabletop-off-white dark:bg-tabletop-black`}
    >
      <section
        className={`flex-grow md:max-h-[600px] grid md:grid-cols-2 w-full max-w-[900px] bg-tabletop-red md:rounded-xl overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <article
          className={`hidden md:block bg-tabletop-black`}
          style={{
            backgroundImage: "url(/maugrim-poster-art.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></article>
        <article
          className={`p-6 pt-12 pb-24 sm:p-12 relative flex flex-col justify-center transition-all duration-300 ease-in-out`}
        >
          <h1
            className={`font-sans font-bold uppercase text-tabletop-off-white text-4xl`}
          >
            Welcome Back
          </h1>
          <form className={`mt-8 grid gap-y-4`}>
            <input
              type="text"
              placeholder="Email"
              className={`px-2 py-2 bg-tabletop-red-dark border border-tabletop-red-light placeholder:text-tabletop-red-light text-tabletop-off-white`}
            />
            <input
              type="password"
              placeholder="Password"
              className={`px-2 py-2 bg-tabletop-red-dark border border-tabletop-red-light placeholder:text-tabletop-red-light text-tabletop-off-white`}
            />
            <button
              type="submit"
              className={`p-2 bg-tabletop-off-white font-bold text-tabletop-red uppercase`}
            >
              Login
            </button>
          </form>

          <div className={`mt-5 flex items-center justify-center gap-x-4`}>
            <button type={`button`} title={`Login with Google`}>
              <IconBrandGoogleFilled
                size={30}
                className={`text-tabletop-off-white`}
              />
            </button>
            <button type={`button`} title={`Login with Twitch`}>
              <IconBrandTwitch
                size={30}
                className={`text-tabletop-off-white`}
              />
            </button>
            <button type={`button`} title={`Login with Discord`}>
              <IconBrandDiscordFilled
                size={30}
                className={`text-tabletop-off-white`}
              />
            </button>
          </div>

          <div className={`absolute bottom-4`}>
            <span className={`font-light text-tabletop-off-white/70`}>
              Don't have an account?
              <Link
                href={`/register`}
                className={`group ml-1 hover:px-1 py-0.5 relative text-tabletop-off-white z-10 transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`absolute top-0 right-full group-hover:right-0 bottom-0 left-0 bg-tabletop-off-white -z-10 transition-all duration-300 ease-in-out`}
                ></div>

                <span
                  className={`group-hover:text-tabletop-red z-20 transition-all duration-300 ease-in-out`}
                >
                  Sign up here
                </span>
              </Link>
              .
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}
