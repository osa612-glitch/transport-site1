export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 50 }}>Transport Company</h1>

      <p style={{ fontSize: 20, opacity: 0.7 }}>
        We transport cars, bikes, boats and heavy equipment worldwide.
      </p>

      <div style={{ marginTop: 30 }}>
        <h2>Track your cargo</h2>
        <input placeholder="Enter tracking number" style={{ padding: 10, fontSize: 16 }} />
        <button style={{ marginLeft: 10, padding: 10 }}>Search</button>
      </div>

      <div style={{ marginTop: 50 }}>
        <h2>Services</h2>
        <ul>
          <li>Car transport</li>
          <li>Motorcycle shipping</li>
          <li>Boat transport</li>
          <li>Heavy machinery</li>
        </ul>
      </div>
    </div>
  );
}
