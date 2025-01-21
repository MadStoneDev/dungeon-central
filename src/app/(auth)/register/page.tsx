﻿import {
  IconBrandDiscord,
  IconBrandDiscordFilled,
  IconBrandGoogle,
  IconBrandGoogleFilled,
  IconBrandTwitch,
} from "@tabler/icons-react";
import Link from "next/link";

export const metadata = {
  title: "Register - Tabletop Central",
  description: "Register for Tabletop Central",
};

export default function Login() {
  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-screen bg-tabletop-off-white dark:bg-tabletop-black`}
    >
      <section
        className={`flex-grow max-h-[600px] grid md:grid-cols-2 w-full max-w-[900px] bg-tabletop-red md:rounded-xl overflow-hidden transition-all duration-300 ease-in-out`}
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
          className={`p-6 sm:p-12 relative flex flex-col justify-center transition-all duration-300 ease-in-out`}
        >
          <h1
            className={`font-sans font-bold uppercase text-tabletop-off-white text-4xl`}
          >
            Create a<br />
            New Account
          </h1>
          <form className={`mt-8 grid gap-y-4`}>
            <input
              type="text"
              placeholder="Username / Email"
              className={`px-2 py-2 bg-tabletop-red-dark border border-tabletop-red-light placeholder:text-tabletop-red-light`}
            />
            <input
              type="password"
              placeholder="Password"
              className={`px-2 py-2 bg-tabletop-red-dark border border-tabletop-red-light placeholder:text-tabletop-red-light`}
            />
            <button
              type="submit"
              className={`p-2 bg-tabletop-off-white font-bold text-tabletop-red uppercase`}
            >
              Login
            </button>
          </form>

          <div className={`mt-5 flex items-center justify-center gap-x-4`}>
            <IconBrandGoogleFilled
              size={30}
              className={`text-tabletop-off-white`}
            />
            <IconBrandTwitch size={30} className={`text-tabletop-off-white`} />
            <IconBrandDiscordFilled
              size={30}
              className={`text-tabletop-off-white`}
            />
          </div>

          <div className={`absolute bottom-4`}>
            <span className={`font-light text-tabletop-off-white/70`}>
              Already have an account?
              <Link
                href={`/login`}
                className={`group ml-1 hover:px-1 py-0.5 relative text-tabletop-off-white z-10 transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`absolute top-0 right-full group-hover:right-0 bottom-0 left-0 bg-tabletop-off-white -z-10 transition-all duration-300 ease-in-out`}
                ></div>

                <span
                  className={`group-hover:text-tabletop-red z-20 transition-all duration-300 ease-in-out`}
                >
                  Login here
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
