import React from "react";
import { Team, Player } from "../types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Team | Player | null;
  type: "team" | "player" | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, type }) => {
  if (!isOpen || !data || !type) return null;

  const renderTeamContent = (team: Team) => (
    <div className="p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <img
              src={team.logo}
              alt={`${team.name} Logo`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-3xl font-bold">{team.name}</h3>
              <p className="text-gray-500">{team.location}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{team.description}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">경기 정보</h4>
          <p>
            <strong>날짜/시간:</strong> {team.date} {team.time}
          </p>
          <p>
            <strong>경기 유형:</strong> {team.gameType}
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">모집 현황</h4>
          <div className="flex flex-wrap gap-2">
            {team.positions.map((position) => (
              <span
                key={position}
                className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full"
              >
                {position}
              </span>
            ))}
          </div>
          <p className="mt-2">
            <strong>모집 인원:</strong> {team.required}명
          </p>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button className="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
          신청하기
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition">
          채팅하기
        </button>
      </div>
    </div>
  );

  const renderPlayerContent = (player: Player) => (
    <div className="p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <img
            src={player.photo}
            alt={`${player.name} Photo`}
            className="w-20 h-20 rounded-full mr-5"
          />
          <div>
            <h3 className="text-3xl font-bold">{player.name}</h3>
            <p className="text-gray-500">
              {player.hand} / 경력 {player.experience}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">선수 정보</h4>
          <p>
            <strong>주 포지션:</strong> {player.position}
          </p>
          <p>
            <strong>활동 지역:</strong> {player.region}
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-semibold mb-2">자기소개</h4>
          <p>{player.intro}</p>
        </div>
      </div>
      <div className="mt-8">
        <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
          메시지 보내기
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto modal-backdrop"
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all relative"
          onClick={(e) => e.stopPropagation()}
        >
          {type === "team" && renderTeamContent(data as Team)}
          {type === "player" && renderPlayerContent(data as Player)}
        </div>
      </div>
    </div>
  );
};

export default Modal;


