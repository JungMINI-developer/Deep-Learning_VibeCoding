import React, { useState } from "react";
import { AppState, Team, Player } from "./types";
import Header from "./components/Header";
import Login from "./components/Login";
import TeamList from "./components/TeamList";
import PlayerList from "./components/PlayerList";
import MyPage from "./components/MyPage";
import Modal from "./components/Modal";

function App() {
  const [appState, setAppState] = useState<AppState>({
    loggedIn: false,
    currentPage: "recruiting",
    user: null,
  });

  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    data: Team | Player | null;
    type: "team" | "player" | null;
  }>({
    isOpen: false,
    data: null,
    type: null,
  });

  const handleLogin = (email: string, password: string) => {
    // 실제 로그인 로직은 여기에 구현
    setAppState({
      loggedIn: true,
      currentPage: "recruiting",
      user: { name: "김야구" },
    });
  };

  const handleLogout = () => {
    setAppState({
      loggedIn: false,
      currentPage: "recruiting",
      user: null,
    });
  };

  const handleNavClick = (page: string) => {
    if (page === "mypage" && !appState.loggedIn) {
      alert("로그인이 필요합니다.");
      setAppState((prev) => ({ ...prev, currentPage: "login" }));
      return;
    }
    setAppState((prev) => ({
      ...prev,
      currentPage: page as AppState["currentPage"],
    }));
  };

  const handleLoginClick = () => {
    setAppState((prev) => ({ ...prev, currentPage: "login" }));
  };

  const handleTeamClick = (team: Team) => {
    setModalData({
      isOpen: true,
      data: team,
      type: "team",
    });
  };

  const handlePlayerClick = (player: Player) => {
    setModalData({
      isOpen: true,
      data: player,
      type: "player",
    });
  };

  const handleModalClose = () => {
    setModalData({
      isOpen: false,
      data: null,
      type: null,
    });
  };

  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case "login":
        return <Login onLogin={handleLogin} />;
      case "recruiting":
        return (
          <TeamList
            onTeamClick={handleTeamClick}
            isLoggedIn={appState.loggedIn}
          />
        );
      case "seeking":
        return (
          <PlayerList
            onPlayerClick={handlePlayerClick}
            isLoggedIn={appState.loggedIn}
          />
        );
      case "mypage":
        return <MyPage />;
      default:
        return (
          <TeamList
            onTeamClick={handleTeamClick}
            isLoggedIn={appState.loggedIn}
          />
        );
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Header
          appState={appState}
          onLoginClick={handleLoginClick}
          onLogoutClick={handleLogout}
          onNavClick={handleNavClick}
        />
        <main className="p-4 md:p-8">{renderCurrentPage()}</main>
        <Modal
          isOpen={modalData.isOpen}
          onClose={handleModalClose}
          data={modalData.data}
          type={modalData.type}
        />
      </div>
    </div>
  );
}

export default App;
