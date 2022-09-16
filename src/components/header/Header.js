function cartItems() {
  return [];
}

export default function Header() {
  return (
    <header>
      90s shop
      <nav>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li>
            <a href="/">Home</a>
          </li>
          |
          <li>
            <a href="/cart">Cart ({cartItems().length})</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
