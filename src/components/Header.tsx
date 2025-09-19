import React from "react";
import { AppState } from "../types";

interface HeaderProps {
  appState: AppState;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onNavClick: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  appState,
  onLoginClick,
  onLogoutClick,
  onNavClick,
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200">
        <a href="#" className="text-2xl font-bold text-blue-600">
          ⚾ 야구용병
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#recruiting"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("recruiting");
            }}
            className={`nav-link ${
              appState.currentPage === "recruiting"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            팀 찾기
          </a>
          <a
            href="#seeking"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("seeking");
            }}
            className={`nav-link ${
              appState.currentPage === "seeking"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            선수 찾기
          </a>
          <a
            href="#mypage"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("mypage");
            }}
            className={`nav-link ${
              appState.currentPage === "mypage"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            마이페이지
          </a>
        </div>
        {!appState.loggedIn ? (
          <button
            onClick={onLoginClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            로그인
          </button>
        ) : (
          <div className="flex items-center space-x-3">
            <span className="font-semibold">{appState.user?.name}님</span>
            <button
              onClick={onLogoutClick}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              로그아웃
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


