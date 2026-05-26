'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { faq_data, FaqItem } from '@/data/faq_data';
import CtaBanner from '../common/CtaBanner';

const FaqArea = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState<number | null>(1); // Expand first item by default

  const categoriesList = [
    { id: 'all', label: 'All Questions', icon: 'bi-grid' },
    { id: 'products', label: 'Products', icon: 'bi-box-seam' },
    { id: 'installation', label: 'Installation', icon: 'bi-tools' },
    { id: 'usage', label: 'Usage', icon: 'bi-play-circle' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: 'bi-exclamation-triangle' },
    { id: 'warranty', label: 'Warranty & Support', icon: 'bi-shield-check' }
  ];

  const getCount = (categoryId: string) => {
    if (categoryId === 'all') return faq_data.length;
    return faq_data.filter(item => item.category === categoryId).length;
  };

  const filteredFaqs = faq_data.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Automatically expand first item of newly filtered list if the current active item is not in the filtered list
  useEffect(() => {
    if (filteredFaqs.length > 0 && !filteredFaqs.some(item => item.id === activeId)) {
      setActiveId(filteredFaqs[0].id);
    }
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <div className="faq-section-wrapper" style={{ backgroundColor: '#fafbfe', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          
          {/* Header Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="search-bar-container shadow-sm bg-white rounded-pill p-1 d-flex align-items-center border" style={{ borderColor: '#e2e8f0' }}>
                <i className="bi bi-search fs-5 text-muted ms-4"></i>
                <input 
                  type="text" 
                  className="form-control border-0 bg-transparent px-3 py-3 shadow-none" 
                  placeholder="Search for answers..." 
                  style={{ fontSize: '1rem', color: '#1e293b' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="btn border-0 text-muted me-3" onClick={() => setSearchQuery('')}>
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Left Sidebar (Desktop Viewport) */}
            <div className="col-lg-4 d-none d-lg-block">
              <div className="sidebar-sticky" style={{ position: 'sticky', top: '100px' }}>
                
                {/* Categories Widget */}
                <div className="categories-widget p-4 rounded-4 bg-white border mb-4" style={{ borderColor: '#e2e8f0' }}>
                  <h4 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.25rem' }}>Categories</h4>
                  <div className="d-flex flex-column gap-2">
                    {categoriesList.map((cat) => {
                      const isActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          className={`btn border-0 w-100 d-flex align-items-center justify-content-between py-3 px-4 rounded-3 text-start transition-all ${
                            isActive 
                              ? 'bg-primary bg-opacity-10 text-primary fw-bold' 
                              : 'text-secondary hover-bg-light'
                          }`}
                          style={{
                            backgroundColor: isActive ? 'rgba(0, 108, 208, 0.08)' : 'transparent',
                            color: isActive ? '#006CD0' : '#475569',
                            fontSize: '0.95rem'
                          }}
                          onClick={() => setSelectedCategory(cat.id)}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <i className={`bi ${cat.icon} fs-5 ${isActive ? 'text-primary' : 'text-muted'}`}></i>
                            <span>{cat.label}</span>
                          </div>
                          <span 
                            className={`badge rounded-pill px-2.5 py-1 ${isActive ? 'bg-primary text-white' : 'bg-light text-muted'}`}
                            style={{ 
                              fontSize: '0.8rem',
                              backgroundColor: isActive ? '#006CD0' : '#f1f5f9',
                              fontWeight: '600'
                            }}
                          >
                            {String(getCount(cat.id)).padStart(2, '0')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>



              </div>
            </div>

            {/* Mobile Viewport Categories Dropdown */}
            <div className="col-12 d-lg-none mb-3">
              <div className="p-3 bg-white border rounded-4" style={{ borderColor: '#e2e8f0' }}>
                <label className="fw-bold mb-2 text-dark" style={{ fontSize: '0.95rem' }}>Categories</label>
                <div className="position-relative">
                  <select 
                    className="form-select border rounded-3 py-3 px-3 shadow-none bg-light text-dark fw-semibold"
                    style={{ borderColor: '#cbd5e1', fontSize: '0.95rem', appearance: 'none' }}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categoriesList.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({String(getCount(cat.id)).padStart(2, '0')})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion items */}
            <div className="col-lg-8">
              {filteredFaqs.length > 0 ? (
                <div className="faq-accordion-list d-flex flex-column gap-3">
                  {filteredFaqs.map((item) => {
                    const isExpanded = activeId === item.id;
                    return (
                      <div 
                        key={item.id} 
                        className="faq-card bg-white rounded-3 border p-4 shadow-sm transition-all duration-300"
                        style={{ 
                          borderColor: isExpanded ? '#006CD0' : '#e2e8f0',
                          boxShadow: isExpanded ? '0 10px 30px rgba(0, 108, 208, 0.06)' : '0 2px 8px rgba(0,0,0,0.01)'
                        }}
                      >
                        <button 
                          className="w-100 d-flex align-items-center justify-content-between text-start border-0 bg-transparent p-0 pb-1"
                          onClick={() => setActiveId(isExpanded ? null : item.id)}
                        >
                          <span className="fw-bold text-dark pe-3" style={{ fontSize: '1.05rem', color: '#0f172a' }}>
                            {item.question}
                          </span>
                          <div 
                            className="toggle-icon-box rounded-circle d-flex align-items-center justify-content-center transition-all flex-shrink-0"
                            style={{ 
                              width: '32px', 
                              height: '32px', 
                              backgroundColor: isExpanded ? '#006CD0' : '#f1f5f9',
                              color: isExpanded ? '#ffffff' : '#006CD0'
                            }}
                          >
                            <i className={`bi ${isExpanded ? 'bi-dash' : 'bi-plus'} fs-5 fw-bold`}></i>
                          </div>
                        </button>
                        
                        <div 
                          className="faq-answer-wrapper"
                          style={{
                            maxHeight: isExpanded ? '300px' : '0px',
                            opacity: isExpanded ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                            marginTop: isExpanded ? '1rem' : '0rem'
                          }}
                        >
                          <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#475569' }}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-4 border p-5 text-center shadow-sm" style={{ borderColor: '#e2e8f0' }}>
                  <div className="icon-box bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-search fs-2 text-muted"></i>
                  </div>
                  <h4 className="fw-bold mb-2 text-dark">No questions found</h4>
                  <p className="text-muted mb-0">
                    We couldn't find any results matching "{searchQuery}". Try adjusting your keywords or category.
                  </p>
                </div>
              )}



            </div>
          </div>

        </div>
      </div>

      {/* Corporate CTA Banner */}
      <div className="faq-cta-banner-wrapper py-5 bg-white">
        <CtaBanner
          title="Need More Information?"
          subtitle="Find answers related to products and installation."
          btnText="Contact Team"
          btnLink="/contact"
          icon="bi-question-circle-fill"
          btnIcon="bi-headset"
        />
      </div>

      <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f8fafc !important;
          color: #1e293b !important;
        }
        .hover-lift {
          transition: all 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 108, 208, 0.15);
        }
      `}</style>
    </>
  );
};

export default FaqArea;