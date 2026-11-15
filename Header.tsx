// src/components/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white border-b border-[#e2e8f0] shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold">
          L
        </div>
        <div>
          <h1 className="text-sm font-bold text-[#0f172a]">LINEUP HUB</h1>
          <p className="text-xs text-gray-500">Guest 모드</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 text-gray-600 hover:text-[#0f172a]" aria-label="알림">
          🔔
        </button>
        <button className="p-2 text-gray-600 hover:text-[#0f172a]" aria-label="설정">
          ⚙️
        </button>
      </div>
    </header>
  );
}
