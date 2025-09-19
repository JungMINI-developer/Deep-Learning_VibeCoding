import React, { useState } from "react";

const MyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"applications" | "offers">(
    "applications"
  );

  return (
    <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
      <div className="flex items-center space-x-6 mb-8">
        <img
          src="https://placehold.co/128x128/e0e7ff/3730a3?text=USER"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          alt="User Profile"
        />
        <div>
          <h2 className="text-3xl font-bold">김야구</h2>
          <p className="text-gray-600 mt-1">포지션: 투수, 내야수</p>
          <button className="mt-4 text-sm text-blue-600 font-semibold hover:underline">
            프로필 수정
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "applications"
                ? "tab-active"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("applications")}
          >
            나의 용병 활동
          </button>
          <button
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "offers"
                ? "tab-active"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("offers")}
          >
            받은 제안 내역
          </button>
        </nav>
      </div>

      <div className="mt-6 space-y-4">
        {activeTab === "applications" && (
          <>
            <div className="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">용인 블루윙즈</p>
                <p className="text-sm text-gray-500">2025-09-13 (토) 13:00</p>
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                신청 완료
              </span>
            </div>
            <div className="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">수원 파이러츠</p>
                <p className="text-sm text-gray-500">2025-09-14 (일) 09:00</p>
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                결과 대기
              </span>
            </div>
          </>
        )}

        {activeTab === "offers" && (
          <div className="p-4 border rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">성남 스톰</p>
              <p className="text-sm text-gray-500">2025-09-20 (토) 10:00</p>
            </div>
            <div className="flex space-x-2">
              <button className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
                수락
              </button>
              <button className="text-sm font-medium text-gray-700 bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300">
                거절
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPage;
