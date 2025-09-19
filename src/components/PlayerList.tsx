import React, { useState, useEffect } from "react";
import { Player, FilterState } from "../types";
import { playerData } from "../data/mockData";

interface PlayerListProps {
  onPlayerClick: (player: Player) => void;
  isLoggedIn: boolean;
}

const PlayerList: React.FC<PlayerListProps> = ({
  onPlayerClick,
  isLoggedIn,
}) => {
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>(playerData);
  const [filters, setFilters] = useState<FilterState["seeking"]>({
    region: "",
    position: "",
    name: "",
  });

  useEffect(() => {
    const filtered = playerData.filter((player) => {
      const regionMatch =
        !filters.region || player.region.includes(filters.region);
      const positionMatch =
        !filters.position || player.position === filters.position;
      const nameMatch =
        !filters.name ||
        player.name.toLowerCase().includes(filters.name.toLowerCase());
      return regionMatch && positionMatch && nameMatch;
    });
    setFilteredPlayers(filtered);
  }, [filters]);

  const handleFilterChange = (
    key: keyof FilterState["seeking"],
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handlePlayerClick = (player: Player) => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }
    onPlayerClick(player);
  };

  return (
    <div>
      <section className="mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">
          우리 팀에 필요한 용병을 영입하세요!
        </h2>
        <p className="text-gray-600 mb-6">
          실력과 열정을 갖춘 선수들이 대기하고 있습니다. 포지션과 경력 정보를
          확인하고 우리 팀의 승리를 이끌 최고의 용병을 찾아보세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.region}
            onChange={(e) => handleFilterChange("region", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">모든 활동 지역</option>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
            <option>대전</option>
          </select>
          <select
            value={filters.position}
            onChange={(e) => handleFilterChange("position", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">모든 포지션</option>
            <option>투수</option>
            <option>포수</option>
            <option>내야수</option>
            <option>외야수</option>
          </select>
          <input
            type="text"
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
            placeholder="선수 이름 검색"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transition duration-300 card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-start mb-4">
                  <img
                    src={player.photo}
                    alt={`${player.name} Photo`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{player.name}</h3>
                    <p className="text-gray-500 text-sm">{player.hand}</p>
                    <p className="text-gray-500 text-sm">
                      활동지역: {player.region}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold mb-2">
                  {player.position}
                </p>
                <p className="text-gray-600">경력: {player.experience}</p>
              </div>
              <div className="text-right pt-4 mt-4 border-t border-gray-100">
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  프로필 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlayerList;


