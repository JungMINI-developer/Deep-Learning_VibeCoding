import React, { useState } from "react";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center bg-yellow-400 text-black py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition">
          <span className="mr-2">🟡</span> 카카오로 시작하기
        </button>
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition">
          <img
            src="https://placehold.co/20x20/ffffff/000000?text=G"
            className="mr-2"
            alt="Google Icon"
          />
          Google로 시작하기
        </button>
      </div>
      <div className="my-6 flex items-center text-xs text-gray-400">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3">또는</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;


