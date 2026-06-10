import { SkeletonCard, SkeletonText, SkeletonAvatar, SkeletonTable, SkeletonList } from './components'
import './App.css'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="demo-section">
      <h2>{title}</h2>
      <div className="demo-content">{children}</div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>react-loading-skeleton</h1>
        <p>Zero-dependency skeleton loading components for React</p>
        <a
          href="https://github.com/long260398/react-loading-skeleton"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </header>

      <main className="app-main">
        <Section title="Avatar">
          <SkeletonAvatar size={56} count={4} />
        </Section>

        <Section title="Text">
          <div style={{ maxWidth: 480 }}>
            <SkeletonText lines={4} />
          </div>
        </Section>

        <Section title="Card">
          <SkeletonCard count={3} />
        </Section>

        <Section title="List">
          <div style={{ maxWidth: 480 }}>
            <SkeletonList count={4} />
          </div>
        </Section>

        <Section title="Table">
          <SkeletonTable rows={5} columns={4} />
        </Section>
      </main>
    </div>
  )
}

export default App
