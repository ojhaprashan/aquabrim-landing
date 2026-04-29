'use client'
import React from 'react';
import Link from 'next/link';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';

const LoginPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <div className="login-area pt-100 pb-100" style={{ background: '#f4f7f9', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="login-wrapper" style={{ background: '#fff', padding: '50px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <div className="login-logo text-center mb-40">
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>Sign In</h2>
                    <p style={{ color: '#666' }}>Please enter your credentials to login</p>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email Address</label>
                      <input 
                        type="email" 
                        className="form-control"
                        placeholder="Enter your email" 
                        style={{ padding: '12px 15px', borderRadius: '8px' }}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Password</label>
                      <input 
                        type="password" 
                        className="form-control"
                        placeholder="Enter your password" 
                        style={{ padding: '12px 15px', borderRadius: '8px' }}
                        required
                      />
                    </div>
                    <div className="login-meta mb-4 d-flex align-items-center justify-content-between">
                      <div className="remember-me">
                        <input type="checkbox" id="remember" className="form-check-input" />
                        <label htmlFor="remember" className="form-check-label ms-2" style={{ color: '#666', cursor: 'pointer' }}>Remember Me</label>
                      </div>
                      <Link href="#" style={{ color: '#006CD0', fontWeight: '600', textDecoration: 'none' }}>Forgot Password?</Link>
                    </div>
                    <div className="login-btn mb-3">
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100"
                        style={{ 
                          padding: '14px', 
                          borderRadius: '8px', 
                          background: '#006CD0', 
                          borderColor: '#006CD0',
                          fontWeight: '700', 
                          fontSize: '16px'
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="login-footer text-center mt-4">
                      <p style={{ color: '#666' }}>Don't have an account? <Link href="/contact" style={{ color: '#006CD0', fontWeight: '600', textDecoration: 'none' }}>Contact Support</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default LoginPage;
