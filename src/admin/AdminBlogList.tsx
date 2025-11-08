import { useState } from 'react';
import svgPaths from "../imports/svg-pn5n5h9mf6";
import img1 from "figma:asset/69c2d48ba81567d28893e15cd0baf517c39f52ee.png";
import img2 from "figma:asset/12e57dc8c26ffbd65d754a3814aa245e717c32a7.png";
import img3 from "figma:asset/e2d07def1dbd591c5182a37dfedc9ff110ae94d9.png";
import img4 from "figma:asset/0f4f2fcb6049962790ac0a2810925489622b792c.png";
import img5 from "figma:asset/9f4ea61beb99ae8c2da093d59eccf06f640e117f.png";
import img6 from "figma:asset/ec3b79fff1564d645f4f2bda89407b5d61d9afd9.png";
import img7 from "figma:asset/54e0943ca661c94f801320e0a56b7ad7c9f5f2c3.png";
import img8 from "figma:asset/ba1ddf4cdff400161fdff3d4a651265bb53152a4.png";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
}

interface AdminBlogListProps {
  onCreateNew?: () => void;
  onEditPost?: (id: string) => void;
  onLogout?: () => void;
}

// Logo Component
function LogoGroup() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <LogoGroup />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

export default function AdminBlogList({ onCreateNew, onEditPost, onLogout }: AdminBlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with API call
  const blogPosts: BlogPost[] = [
    { id: '1', title: 'Lorem ipsum dolor sit amet consectetur. Facilisis et ut duis parturient.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Netus malesuada eu lectus posuere eu nec turpis pharetra. Egestas tellus at duis sed natoque vitae sapien. Dictum.', category: 'Homes', author: 'Olivia Rhye', publishedAt: '20 Jan 2025', imageUrl: img1 },
    { id: '2', title: 'Lorem ipsum dolor sit amet consectetur. Phasellus sodales aliquam.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Mus tortor cursus in at lacus sagittis tristique massa egestas. Vitae et sagittis nisl arcu convallis sagittis duis arcu massa.', category: 'Homes', author: 'Phoenix Baker', publishedAt: '19 Jan 2025', imageUrl: img2 },
    { id: '3', title: 'Lorem ipsum dolor sit amet consectetur. Dictum tempus fermentum.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Dictumst convallis dui enim aliquet. Nibh vestibulum adipiscing quis elit habitant. Neque est amet convallis donec faucibus.', category: 'Investment', author: 'Lana Steiner', publishedAt: '18 Jan 2025', imageUrl: img3 },
    { id: '4', title: 'Lorem ipsum dolor sit amet consectetur. Urna sagittis euismod nisi.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Cursus gravida ipsum suspendisse auctor. Donec ultrices vestibulum vestibulum quam odio scelerisque neque dui. In urna.', category: 'Construction', author: 'Alec Whitten', publishedAt: '17 Jan 2025', imageUrl: img4 },
    { id: '5', title: 'Lorem ipsum dolor sit amet consectetur. Eu tincidunt habitant dolor.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Id diam dignissim vel tempor scelerisque.', category: 'Land', author: 'Demi Wilkinson', publishedAt: '16 Jan 2025', imageUrl: img5 },
    { id: '6', title: 'Lorem ipsum dolor sit amet consectetur. Aenean rhoncus sit.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Consequat habitant eget porta varius.', category: 'Land', author: 'Candice Wu', publishedAt: '15 Jan 2025', imageUrl: img6 },
    { id: '7', title: 'Lorem ipsum dolor sit amet consectetur. Amet lacus fringilla enim ut.', excerpt: 'Lorem ipsum dolor sit amet consectetur. A dui enim enim at. Phasellus eget eget.', category: 'Investment', author: 'Natali Craig', publishedAt: '14 Jan 2025', imageUrl: img7 },
    { id: '8', title: 'Lorem ipsum dolor sit amet consectetur. Interdum vitae mattis sed.', excerpt: 'Lorem ipsum dolor sit amet consectetur. Faucibus maecenas nec potenti facilisis nunc fringilla ut vivamus elementum. Mi malesuada purus pretium sed integer sit.', category: 'Construction', author: 'Drew Cano', publishedAt: '13 Jan 2025', imageUrl: img8 },
  ];

  const totalPages = 10;

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    if (onLogout) {
      onLogout();
    }
  };

  const handleCreateNew = () => {
    if (onCreateNew) {
      onCreateNew();
    }
  };

  const handleEditPost = (id: string) => {
    if (onEditPost) {
      onEditPost(id);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // TODO: Fetch data for new page
    console.log('Loading page:', page);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-[1440px]">
        <div className="h-[112px] relative shrink-0 w-full">
          <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]">
              <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                <LogoFrame />
                <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                  <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                    <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[#475467] text-[16px] text-nowrap whitespace-pre">Admin</p>
                  </button>
                  <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                    <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic text-[#475467] text-[16px] text-nowrap whitespace-pre">Blog</p>
                  </button>
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[76px]">
                    <button className="box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-0 relative shrink-0">
                      <div className="bg-[#f2f4f7] relative rounded-[200px] shrink-0 size-[40px]">
                        <div className="absolute inset-0 opacity-[0.08] rounded-[200px]">
                          <div aria-hidden="true" className="absolute border-[0.75px] border-black border-solid inset-0 pointer-events-none rounded-[200px]" />
                        </div>
                        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#475467] text-[16px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[40px]">JS</p>
                      </div>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="overflow-clip relative shrink-0 size-[24px]"
                    >
                      <div className="absolute inset-[14.09%_12.5%]">
                        <div className="absolute inset-[-5.8%_-5.56%]" style={{ "--stroke-0": "rgba(232, 61, 61, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d={svgPaths.p4b81600} stroke="var(--stroke-0, #E83D3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center pb-[48px] pt-[32px] px-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[20px] items-start ml-0 mt-0 relative w-[1376px]">
                  <p className="font-['Avenir:Heavy',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#155eef] text-[30px] w-full">Publish a blog</p>
                </div>
              </div>
              <p className="font-['Avenir:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#475467] text-[16px] w-[min-content]">Publish a blog for your users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center pb-[96px] pt-0 px-0 relative shrink-0 w-full">
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
              <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full">
                {blogPosts.map((post) => (
                  <div 
                    key={post.id}
                    onClick={() => handleEditPost(post.id)}
                    className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={post.imageUrl} />
                      <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]">
                        <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
                          <div className="size-full">
                            <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
                              <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre">
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">{post.author}</p>
                                  <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">{post.publishedAt}</p>
                                </div>
                                <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">{post.category}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">{post.title}</p>
                        <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">{post.excerpt}</p>
                      </div>
                      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0">
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[29.167%]">
                            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                                <path d={svgPaths.p3c881b00} stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add New Blog Card */}
                <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[472px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[592px]">
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
                  <button 
                    onClick={handleCreateNew}
                    className="bg-[#155eef] h-[64px] relative rounded-[8px] shrink-0 w-full"
                  >
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center justify-center px-[18px] py-[10px] relative w-full">
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Add New Blog</p>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[20.833%]">
                            <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p1b67fa00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                  </button>
                </div>
              </div>

              {/* Pagination */}
              <div className="box-border content-stretch flex gap-[12px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                  <button 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 disabled:opacity-50"
                  >
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[20.833%]">
                        <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d={svgPaths.p3ba8b580} stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">Previous</p>
                  </button>
                </div>
                
                <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                  {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                      disabled={typeof page !== 'number'}
                      className={`overflow-clip relative rounded-[20px] shrink-0 size-[40px] ${currentPage === page ? 'bg-gray-50' : ''}`}
                    >
                      <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0">
                        <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre ${currentPage === page ? 'text-[#182230]' : 'text-[#475467]'}`}>{page}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0">
                  <button 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 disabled:opacity-50"
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">Next</p>
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[20.833%]">
                        <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d={svgPaths.p19aed710} stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
