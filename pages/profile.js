import React from 'react';
import Link from 'next/link';
import styles from '../styles/profile.module.css';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function profile() {
  return (
    <div className={styles.main}>
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
              <a className="text-4xl grid place-items-center underline font-bold text-cyan-500">
                Profile
              </a>
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
                    <p
                      className="text-lg h-full border-2 border-black-200 border-opacity-60
                        rounded-lg overflow-hidden bg-violet-200"
                    >
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
                      <Link href="https://github.com/honk0128">
                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                          GIT으로 이동
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p
                    className="leading-relaxed text-xl mb-4 h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden bg-violet-200"
                  >
                    <br />
                    <br />
                    [Back-End] Web Developer
                    <br />
                    <br />
                    사용하는 언어: HTML5, CSS3, JavaScript, Next.js, Python,
                    MongoDB....
                    <br />
                    <br />
                    목표: 많은 경험을 쌓고 백엔드 개발에 숙달되어 원하는 회사에
                    취업하고 싶습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
