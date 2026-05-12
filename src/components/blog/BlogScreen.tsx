'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import images
import blog_img_1 from "@/assets/images/resource/blog-inner1.jpg";
import blog_img_2 from "@/assets/images/resource/blog-inner2.jpg";
import blog_img_3 from "@/assets/images/resource/blog-inner3.jpg";
import blog_thumb_1 from "@/assets/images/resource/blog1.png";
import blog_thumb_2 from "@/assets/images/resource/blog2.png";
import blog_thumb_3 from "@/assets/images/resource/blog3.png";

const categories = [
  { id: 'all', name: 'All Posts', count: 24 },
  { id: 'automation', name: 'Water Automation', count: 8 },
  { id: 'conservation', name: 'Water Conservation', count: 6 },
  { id: 'updates', name: 'Product Updates', count: 5 },
  { id: 'insights', name: 'Industry Insights', count: 3 },
  { id: 'guides', name: 'Tips & Guides', count: 2 },
];

const blogPosts = [
  {
    id: 1,
    category: 'Water Automation',
    catId: 'automation',
    date: '10 May 2025',
    readTime: '5 min read',
    title: 'Why Smart Water Level Controllers Are Essential for Every Home',
    description: 'Save water, prevent overflow, and ensure uninterrupted supply with smart automation.',
    img: blog_img_1,
  },
  {
    id: 2,
    category: 'Product Updates',
    catId: 'updates',
    date: '06 May 2025',
    readTime: '4 min read',
    title: 'Introducing iBot 4G – Smarter, Faster & More Reliable',
    description: 'Our latest innovation comes with 4G connectivity, real-time alerts, and advanced safety.',
    img: blog_img_2,
  },
  {
    id: 3,
    category: 'Water Conservation',
    catId: 'conservation',
    date: '02 May 2025',
    readTime: '6 min read',
    title: '10 Simple Ways to Conserve Water and Reduce Waste',
    description: 'Small changes can make a big difference. Start your journey towards a water-secure future.',
    img: blog_img_3,
  },
  {
    id: 4,
    category: 'Industry Insights',
    catId: 'insights',
    date: '28 Apr 2025',
    readTime: '5 min read',
    title: 'Water Management Solutions for Apartments & Societies',
    description: 'How automation ensures fair usage, reduces wastage, and simplifies water management.',
    img: blog_thumb_1,
  },
  {
    id: 5,
    category: 'Water Automation',
    catId: 'automation',
    date: '24 Apr 2025',
    readTime: '4 min read',
    title: 'How Industrial Units Benefit from Smart Water Automation',
    description: 'Increase efficiency, reduce downtime, and optimize water usage with intelligent systems.',
    img: blog_thumb_2,
  },
  {
    id: 6,
    category: 'Tips & Guides',
    catId: 'guides',
    date: '20 Apr 2025',
    readTime: '3 min read',
    title: 'Dry Run Protection: Why It Can Save Your Motor & Money',
    description: 'Understand how dry run protection works and why it is crucial for your pumps and motors.',
    img: blog_thumb_3,
  },
];

const BlogScreen = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.catId === activeCategory);

  return (
    <section className="blog-screen-section py-5 bg-white">
      <div className="container">
        {/* Top Category Chips */}
        <div className="category-chips-wrapper mb-5">
          <div className="d-flex flex-nowrap gap-2 gap-md-3 overflow-auto pb-2 scrollbar-hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`btn rounded-pill px-3 px-md-4 py-2 fw-semibold transition-all category-chip ${activeCategory === cat.id ? 'btn-primary shadow-sm' : 'btn-outline-light text-dark border-light-subtle'}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{ whiteSpace: 'nowrap' }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-5">
          {/* Main Content: Blog Grid */}
          <div className="col-lg-9 order-2 order-lg-1">
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="col-md-6 col-xl-4 wow fadeInUp">
                  <div className="blog-card h-100 bg-white rounded-4 shadow-sm overflow-hidden transition-all hover-shadow-lg">
                    <div className="blog-img-wrapper position-relative" style={{ height: '220px' }}>
                      <Image 
                        src={post.img} 
                        alt={post.title} 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                      <span className="badge bg-primary position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-2" style={{ fontSize: '12px' }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="blog-content p-4">
                      <div className="blog-meta text-muted small mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h5 className="fw-bold mb-3" style={{ fontSize: '18px', lineHeight: '1.4' }}>
                        <Link href="/blog-details" className="text-dark text-decoration-none hover-text-primary">
                          {post.title}
                        </Link>
                      </h5>
                      <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                        {post.description}
                      </p>
                      <Link href="/blog-details" className="text-primary fw-bold d-flex align-items-center gap-2 text-decoration-none">
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination-wrapper mt-5 d-flex justify-content-center">
              <nav aria-label="Page navigation">
                <ul className="pagination gap-2">
                  <li className="page-item disabled">
                    <a className="page-link rounded-3 border-0 bg-light text-muted" href="#"><i className="bi bi-chevron-left"></i></a>
                  </li>
                  <li className="page-item active"><a className="page-link rounded-3 border-0" href="#">1</a></li>
                  <li className="page-item"><a className="page-link rounded-3 border-0 bg-light text-dark" href="#">2</a></li>
                  <li className="page-item"><a className="page-link rounded-3 border-0 bg-light text-dark" href="#">3</a></li>
                  <li className="page-item"><a className="page-link rounded-3 border-0 bg-light text-dark" href="#">4</a></li>
                  <li className="page-item disabled"><span className="page-link border-0 bg-transparent text-dark">...</span></li>
                  <li className="page-item"><a className="page-link rounded-3 border-0 bg-light text-dark" href="#">8</a></li>
                  <li className="page-item">
                    <a className="page-link rounded-3 border-0 bg-light text-dark" href="#"><i className="bi bi-chevron-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3 order-1 order-lg-2">
            <div className="sidebar sticky-top" style={{ top: '100px' }}>
              {/* Search */}
              <div className="sidebar-widget mb-5 p-4 bg-white rounded-4 shadow-sm border border-light">
                <h6 className="fw-bold mb-3">Search Blogs</h6>
                <div className="position-relative">
                  <input 
                    type="text" 
                    className="form-control border-light-subtle rounded-3 py-2 ps-3 pe-5" 
                    placeholder="Search for blogs..." 
                  />
                  <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget mb-5 p-4 bg-white rounded-4 shadow-sm border border-light">
                <h6 className="fw-bold mb-4">Categories</h6>
                <div className="category-list">
                  {categories.map((cat) => (
                    <div key={cat.id} className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <i className={`bi ${cat.id === activeCategory ? 'bi-folder-fill text-primary' : 'bi-folder text-muted'}`}></i>
                        <span 
                          className={`small fw-semibold cursor-pointer ${cat.id === activeCategory ? 'text-primary' : 'text-dark'}`}
                          onClick={() => setActiveCategory(cat.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          {cat.name}
                        </span>
                      </div>
                      <span className="badge bg-light text-muted rounded-pill" style={{ fontSize: '10px' }}>({cat.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Post */}
              <div className="sidebar-widget mb-5 p-4 bg-white rounded-4 shadow-sm border border-light">
                <h6 className="fw-bold mb-4">Featured Post</h6>
                <div className="featured-post-card">
                  <div className="rounded-3 overflow-hidden mb-3" style={{ height: '140px' }}>
                    <Image src={blog_img_2} alt="Featured" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <span className="badge bg-primary-subtle text-primary mb-2" style={{ fontSize: '10px' }}>Product Updates</span>
                  <div className="text-muted small mb-2">15 Apr 2025 • 4 min read</div>
                  <h6 className="fw-bold mb-2" style={{ fontSize: '15px', lineHeight: '1.4' }}>Understanding the Aquabrim Matrix Panel</h6>
                  <p className="text-muted small mb-3">A complete overview of features, benefits, and real-world applications.</p>
                  <Link href="/blog-details" className="text-primary small fw-bold text-decoration-none">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Stay Updated */}
              <div className="sidebar-widget p-4 bg-white rounded-4 shadow-sm border border-light text-center">
                <div className="icon-box mx-auto mb-3 bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-envelope-fill text-primary fs-4"></i>
                </div>
                <h6 className="fw-bold mb-2">Stay Updated</h6>
                <p className="text-muted small mb-4">Subscribe to our newsletter and get the latest insights and updates.</p>
                <div className="mb-3">
                  <input type="email" className="form-control border-light-subtle rounded-3 text-center" placeholder="Enter your email" />
                </div>
                <button className="btn btn-primary w-100 rounded-3 fw-bold">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .blog-screen-section {
          min-height: 100vh;
        }
        .hover-shadow-lg:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1) !important;
        }
        .hover-text-primary:hover {
          color: #006CD0 !important;
        }
        .page-link {
          transition: all 0.3s ease;
        }
        .page-item.active .page-link {
          background-color: #006CD0;
          color: white;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::-webkit-scrollbar {
          height: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }
        @media (max-width: 991px) {
          .sidebar {
            position: static !important;
            margin-top: 50px;
          }
          .category-chip {
            font-size: 13px !important;
            padding: 6px 16px !important;
          }
        }
      `}} />
    </section>
  );
};

export default BlogScreen;
