function Header({ children }) {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto py-6 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </div>
    </header>
  );
}

export default Header;
