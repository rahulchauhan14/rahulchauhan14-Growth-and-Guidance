import Link from 'next/link';
import './resources.css';

export const metadata = {
  title: 'Resources - Growth & Guidance',
  description: 'Financial planning guides, mutual fund basics, and market updates.',
};

const blogPosts = [
  {
    id: 1,
    category: 'Mutual Fund Basics',
    title: 'What are Mutual Funds? A Beginner’s Guide',
    excerpt: 'Understand the core concepts of mutual funds, how they work, and why they are the preferred choice for wealth creation.',
    image: '/images/meeting.png',
    date: 'Oct 12, 2023'
  },
  {
    id: 2,
    category: 'Investment Guides',
    title: 'The Power of Compounding Explained',
    excerpt: 'Albert Einstein called it the 8th wonder of the world. Learn how compounding can turn small SIPs into significant wealth over time.',
    image: '/images/hero.png',
    date: 'Nov 05, 2023'
  },
  {
    id: 3,
    category: 'Financial Planning Tips',
    title: 'How to Plan for Your Retirement',
    excerpt: 'Start early. Discover the strategies to build a robust retirement corpus so you can live your golden years without financial stress.',
    image: '/images/meeting.png',
    date: 'Dec 18, 2023'
  },
  {
    id: 4,
    category: 'Market Updates',
    title: 'Navigating Market Volatility',
    excerpt: 'Markets go up and down. Here’s why staying invested during market corrections is critical for long-term investors.',
    image: '/images/hero.png',
    date: 'Jan 22, 2024'
  }
];

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>Knowledge Center</h1>
          <p>Guides, Tips, and Updates to make you a smarter investor</p>
        </div>
      </div>

      <section className="resources-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href="/contact" className="read-more">Learn More &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="diagonal-bg-light cta-section">
        <div className="container text-center">
          <h2>Need Personalized Advice?</h2>
          <p>Reading is great, but acting is better. Connect with our experts to start your journey.</p>
          <Link href="/contact" className="btn btn-primary mt-4 inline-block">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
}
