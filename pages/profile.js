import React from 'react';
import Link from 'next/link';

export default function profile() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <header>
        <nav className="flex flex-row h-12 items-center px-4 justify-between shadow-md bg-slate-200">
          <Link href="/">
            <a className="text-lg font-bold">NextShop</a>
          </Link>
          <div>
            <Link href="profile">
              <a className="p-2">Profile</a>
            </Link>
            <Link href="/cart">
              <a className="p-2">Cart</a>
            </Link>
            <Link href="/login">
              <a className="p-2">Login</a>
            </Link>
          </div>
        </nav>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden"></div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    이름: 홍승현
                    <br />
                    나이: 24
                    <br />
                    학교: 중부대학교 고양캠퍼스
                    <br />
                    학과: 정보보호학과
                    <br />
                    학번: 91813298
                    <br />
                    이메일: honk0128@gmail.com
                    <br />
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  <br />
                  <br />
                  [Backend] Web Developer
                  <br />
                  <br />
                  사용하는 언어: HTML5, CSS3, JavaScript, Next.js, Python,
                  MongoDB....
                  <br />
                  <br />
                  목표:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
