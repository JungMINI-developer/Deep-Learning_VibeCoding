import React, { useState, useEffect } from "react";
import { Team, FilterState } from "../types";
import { teamData } from "../data/mockData";

interface TeamListProps {
  onTeamClick: (team: Team) => void;
  isLoggedIn: boolean;
}

const TeamList: React.FC<TeamListProps> = ({ onTeamClick, isLoggedIn }) => {
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(teamData);
  const [filters, setFilters] = useState<FilterState["recruiting"]>({
    date: "",
    region: "",
    position: "",
  });

  useEffect(() => {
    const filtered = teamData.filter((team) => {
      const dateMatch = !filters.date || team.date === filters.date;
      const regionMatch =
        !filters.region || team.location.includes(filters.region);
      const positionMatch =
        !filters.position || team.positions.includes(filters.position);
      return dateMatch && regionMatch && positionMatch;
    });
    setFilteredTeams(filtered);
  }, [filters]);

  const handleFilterChange = (
    key: keyof FilterState["recruiting"],
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleTeamClick = (team: Team) => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }
    onTeamClick(team);
  };

  return (
    <div>
      <section className="mb-8 p-6 bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">참여할 팀을 찾아보세요!</h2>
        <p className="text-gray-600 mb-6">
          원하는 날짜, 지역, 포지션을 선택하여 가장 적합한 팀을 찾아보세요.
          사회인 야구의 즐거움을 함께 나눌 팀이 당신을 기다립니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="date"
            value={filters.date}
            onChange={(e) => handleFilterChange("date", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filters.region}
            onChange={(e) => handleFilterChange("region", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">모든 지역</option>
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
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              onClick={() => handleTeamClick(team)}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transition duration-300 card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src={team.logo}
                    alt={`${team.name} Logo`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="text-xl font-bold">{team.name}</h3>
                </div>
                <p className="text-gray-600 mb-1">
                  📅 {team.date} {team.time}
                </p>
                <p className="text-gray-600 mb-4">📍 {team.location}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {team.positions.map((position) => (
                    <span
                      key={position}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {position}
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-gray-700">
                  {team.required}명
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamList;


