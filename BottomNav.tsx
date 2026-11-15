// src/components/BottomNav.tsx
'use client';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e2e8f0] flex justify-around py-2 shadow-lg">
      <a href="/" className="flex flex-col items-center text-xs text-[#0f172a] font-medium">
        <span>🏠</span>
        <span>홈</span>
      </a>
      <a href="/pledges" className="flex flex-col items-center text-xs text-gray-500 hover:text-[#0f172a]">
        <span>📜</span>
        <span>공약</span>
      </a>
      <a href="/archive" className="flex flex-col items-center text-xs text-gray-500 hover:text-[#0f172a]">
        <span>📁</span>
        <span>아카이브</span>
      </a>
      <a href="/inquiries" className="flex flex-col items-center text-xs text-gray-500 hover:text-[#0f172a]">
        <span>💬</span>
        <span>문의</span>
      </a>
      <a href="/settings" className="flex flex-col items-center text-xs text-gray-500 hover:text-[#0f172a]">
        <span>⚙️</span>
        <span>설정</span>
      </a>
    </nav>
  );
}
