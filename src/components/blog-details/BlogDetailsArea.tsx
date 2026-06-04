

import React from 'react';
import Image from 'next/image';
import BlogSidebar from '../blog/BlogSidebar';

import blog_thumb_1 from "@/assets/images/resource/blog-inner1.jpg";
import blog_thumb_2 from "@/assets/images/resource/blog-details.png";
import SocialLinks from '../common/SocialLinks';
import CommentsForm from '../forms/CommentsForm';

const blog_details_content = {
  author: "Endith Smith",
  date: "Aug 1, 2023",
  title: "Energy Department Research Will Help Eagles Coexist with Wind Energy Deployment",
  sm_des_1: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dotoreg fugiat nullaariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  sm_des_2: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam",
  feature_list: [
    "Enhance your home's app",
    "More functional and simple",
    "Post Format Audio Blogs",
    "A Beautiful Sunday Morning",
    "In Mattis Scelerisque Magna",
    "Bibendum Sed Libero",
    "Pellentesque Mauris Nunc",
  ],
  title_2: "Energy Department Research Will Help Eagles",
  sm_des_3: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dotoreg fugiat nullaariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  quote: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam",
};

const { author, date, title, sm_des_1, sm_des_2, feature_list, title_2, sm_des_3, quote } = blog_details_content;

const comments = [
  {
    img: "/assets/images/resource/user1.png",
    name: "Richard Smith",
    date: "September 19, 2021",
    text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat",
    replies: [
      {
        img: "/assets/images/resource/user2.png",
        name: "Laura Johnson",
        date: "April 20, 2022",
        text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      },
    ],
  },
  {
    img: "/assets/images/resource/user3.png",
    name: "Richard Smith",
    date: "Jun 30, 2022",
    text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat.",
    replies: [],
  },
];

type CommentT = (typeof comments)[number]['replies'][number] & { replies?: any[] };

const CommentBox = ({ c, inner = false }: { c: CommentT; inner?: boolean }) => (
  <div className={`flex gap-4 ${inner ? '' : ''}`}>
    <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-[#f1f5f9]">
      <img src={c.img} alt="user image" className="h-full w-full object-cover" />
    </div>
    <div className="flex-1">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h6 className="mb-0.5 font-bold text-[#1e293b]">{c.name}</h6>
          <span className="text-[0.8rem] text-[#94a3b8]">{c.date}</span>
        </div>
        <a href="#" className="text-[0.85rem] font-semibold text-[#006CD0] no-underline hover:underline">Reply</a>
      </div>
      <p className="mt-2 text-[0.95rem] leading-[1.7] text-[#64748b]">{c.text}</p>
    </div>
  </div>
);

const BlogDetailsArea = () => {
  return (
    <section className="bg-white py-12">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Main article */}
          <div className="lg:col-span-8">
            <div className="mb-6 overflow-hidden rounded-2xl">
              <Image src={blog_thumb_1} style={{ height: "auto" }} alt="image-title" className="w-full" />
            </div>

            <div className="mb-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem] text-[#6c757d]">
              <span className="flex items-center gap-2"><i className="bi bi-person-fill text-[#006CD0]"></i>{author}</span>
              <span className="flex items-center gap-2"><i className="bi bi-calendar-month text-[#006CD0]"></i>{date}</span>
            </div>

            <h4 className="mb-4 text-[1.6rem] font-bold leading-snug text-[#0f172a] sm:text-[2rem]">
              <a href="#" className="text-inherit no-underline">{title}</a>
            </h4>

            <p className="mb-4 text-[1rem] leading-[1.8] text-[#64748b]">{sm_des_1}</p>
            <p className="mb-4 text-[1rem] leading-[1.8] text-[#64748b]">{sm_des_2}</p>

            <div className="my-6 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <Image src={blog_thumb_2} style={{ height: "auto" }} alt="image-title" className="w-full" />
              </div>
              <div>
                <ul className="m-0 list-none p-0">
                  {feature_list.map((item, i) => (
                    <li key={i} className={`mb-2.5 flex items-center gap-2 text-[0.95rem] ${i === 1 ? 'font-bold text-[#006CD0]' : 'text-[#475569]'}`}>
                      <i className="bi bi-check2-circle text-[#006CD0]"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h5 className="mb-3 mt-2 text-[1.25rem] font-bold text-[#0f172a]">{title_2}</h5>
            <p className="mb-4 text-[1rem] leading-[1.8] text-[#64748b]">{sm_des_3}</p>

            <blockquote className="my-6 rounded-xl border-l-4 border-solid border-[#006CD0] bg-[#f8fafc] p-5 text-[1.05rem] italic leading-[1.7] text-[#475569]">
              <p className="m-0">{quote}</p>
            </blockquote>

            <h5 className="mb-3 mt-2 text-[1.25rem] font-bold text-[#0f172a]">{title_2}</h5>
            <p className="mb-4 text-[1rem] leading-[1.8] text-[#64748b]">{sm_des_3}</p>

            {/* Share / comment count */}
            <div className="my-8 flex flex-wrap items-center justify-between gap-4 border-y border-solid border-[#e9ecef] py-4">
              <div className="flex items-center gap-3">
                <h6 className="m-0 font-bold text-[#0f172a]">Share :</h6>
                <SocialLinks />
              </div>
              <div className="flex items-center gap-2 text-[#475569]">
                <i className="bi bi-chat-dots text-[#006CD0]"></i>
                <span>Comment (03)</span>
              </div>
            </div>

            {/* Recent Comments */}
            <div>
              <h5 className="mb-6 text-[1.4rem] font-bold text-[#0f172a]">Recent Comments</h5>
              <ul className="m-0 list-none space-y-6 p-0 pb-8">
                {comments.map((c, i) => (
                  <li key={i}>
                    <CommentBox c={c} />
                    {c.replies && c.replies.length > 0 && (
                      <ul className="ml-8 mt-6 list-none space-y-6 border-l border-solid border-[#f1f5f9] pl-6 sm:ml-12">
                        {c.replies.map((r, ri) => (
                          <li key={ri}>
                            <CommentBox c={r} inner />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Leave A Comment */}
            <div>
              <h4 className="mb-6 text-[1.4rem] font-bold text-[#0f172a]">Leave A Comment</h4>
              <CommentsForm />
            </div>
          </div>

          <BlogSidebar />

        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
