import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>CHUMP / Thiqah</h1>

      <p style={{ opacity: 0.8 }}>
        Web MVP demo for IT & management.  
        This is a real Next.js app — database & magic-link login coming next.
      </p>

      <div
        style={{
          marginTop: 24,
          padding: 16,
          border: "1px solid #ddd",
          borderRadius: 12,
          background: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Planned MVP Modules</h2>
        <ul>
          <li>Certificates + Grade + Quarterly Inspection</li>
          <li>Monthly Installments + Receipt Upload</li>
          <li>Fit & Fix Service Requests + Timeline</li>
          <li>Support Tickets + Attachments</li>
          <li>Admin Dispatch + Notifications</li>
        </ul>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/demo">Open Demo Login →</Link>
      </div>
    </div>
  );
}
