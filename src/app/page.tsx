export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      padding: '20px',
      direction: 'rtl'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '20px',
        textAlign: 'center',
        background: 'linear-gradient(90deg, #e94560, #ff6b6b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        🎨 Be.Chance
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        textAlign: 'center',
        maxWidth: '600px',
        lineHeight: '1.8',
        opacity: 0.8,
        marginBottom: '40px'
      }}>
        یک دلار بده، هنر تصادفی بگیر!
        <br />
        هر خرید = یک تصویر منحصربه‌فرد + شانس قرعه‌کشی
      </p>

      {/* آمار */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          padding: '20px 30px',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', fontWeight: 'bold'}}>۰</div>
          <div style={{fontSize: '0.8rem', opacity: 0.5}}>تصویر فروخته</div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          padding: '20px 30px',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#4ade80'}}>$۰</div>
          <div style={{fontSize: '0.8rem', opacity: 0.5}}>جایزه</div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          padding: '20px 30px',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#facc15'}}>---</div>
          <div style={{fontSize: '0.8rem', opacity: 0.5}}>قرعه‌کشی</div>
        </div>
      </div>

      {/* دکمه اصلی */}
      <button style={{
        padding: '18px 40px',
        fontSize: '1.2rem',
        background: 'linear-gradient(90deg, #a855f7, #ec4899, #f97316)',
        border: 'none',
        borderRadius: '16px',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 10px 30px rgba(168,85,247,0.4)',
        marginBottom: '40px',
        width: '100%',
        maxWidth: '400px'
      }}>
        🎲 خرید تصویر تصادفی - فقط ۱ دلار
      </button>

      {/* کارت‌ها */}
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '800px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          minWidth: '200px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🖼️</div>
          <h3 style={{margin: '0 0 10px 0'}}>تصویر تصادفی</h3>
          <p style={{opacity: 0.6, margin: 0}}>هر تصویر منحصربه‌فرد</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          minWidth: '200px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🎰</div>
          <h3 style={{margin: '0 0 10px 0'}}>قرعه‌کشی</h3>
          <p style={{opacity: 0.6, margin: 0}}>۵۰٪ جایزه نقدی</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          minWidth: '200px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{fontSize: '2.5rem', marginBottom: '10px'}}>🏪</div>
          <h3 style={{margin: '0 0 10px 0'}}>بازار</h3>
          <p style={{opacity: 0.6, margin: 0}}>خرید و فروش تصاویر</p>
        </div>
      </div>

      <footer style={{
        marginTop: '60px',
        opacity: 0.3,
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        © 2024 Be.Chance - تمامی حقوق محفوظ است
      </footer>
    </main>
  )
}
