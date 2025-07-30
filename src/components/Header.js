function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">📊</div>
        StockPilot
      </div>

      <nav className="nav">
        <a href="#a" className="nav-link active">
          Dashboard
        </a>
        <a href="#a" className="nav-link">
          Products
        </a>
        <a href="#a" className="nav-link">
          Orders
        </a>
        <a href="#a" className="nav-link">
          Reports
        </a>
      </nav>

      <div className="header-actions">
        <div className="notification-icon">🔔</div>
        <div className="user-avatar">A</div>
      </div>
    </header>
  );
}

export default Header;
