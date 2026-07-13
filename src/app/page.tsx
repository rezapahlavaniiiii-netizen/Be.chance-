export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-6">
      
      {/* لوگو و عنوان */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
          🎨 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Be.Chance</span>
        </h1>
        <p className="text-xl text-white/70 max-w-md mx-auto leading-relaxed">
          یک دلار بده، هنر تصادفی بگیر!
          <br />
          هر خرید = یک تصویر منحصربه‌فرد + شانس قرعه‌کشی
        </p>
      </div>

      {/* آمار */}
      <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-white">۰</div>
          <div className="text-xs text-white/50">تصویر فروخته</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-green-400">$۰</div>
          <div className="text-xs text-white/50">جایزه</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">---</div>
          <div className="text-xs text-white/50">قرعه‌کشی</div>
        </div>
      </div>

      {/* دکمه اصلی */}
      <button className="w-full max-w-md px-8 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-xl font-bold rounded-2xl shadow-lg shadow-purple-500/30 mb-10 active:scale-95 transition-transform">
        🎲 خرید تصویر تصادفی - فقط ۱ دلار
      </button>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
          <div className="text-4xl mb-3">🖼️</div>
          <h3 className="text-lg font-bold text-white mb-1">تصویر تصادفی</h3>
          <p className="text-sm text-white/50">هر تصویر منحصربه‌فرد</p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
          <div className="text-4xl mb-3">🎰</div>
          <h3 className="text-lg font-bold text-white mb-1">قرعه‌کشی</h3>
          <p className="text-sm text-white/50">۵۰٪ جایزه نقدی</p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
          <div className="text-4xl mb-3">🏪</div>
          <h3 className="text-lg font-bold text-white mb-1">بازار</h3>
          <p className="text-sm text-white/50">خرید و فروش تصاویر</p>
        </div>
      </div>

      {/* فوتر */}
      <footer className="mt-10 text-white/30 text-sm">
        © 2024 Be.Chance - تمامی حقوق محفوظ است
      </footer>
    </main>
  )
}
