import { useState, useEffect } from 'react';
import svgPathsDesktop from "../imports/svg-rruih2q2rx";
import svgPathsMobile from "../imports/svg-li38j8ic3n";

// Logo Component
function LogoGroup({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return (
      <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
          <g id="Group 1000003696">
            <path d={svgPathsMobile.p13c6a600} fill="var(--fill-0, #155EEF)" id="Vector 2" />
            <path d={svgPathsMobile.p3704b580} fill="var(--fill-0, #155EEF)" id="Vector 1" />
          </g>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPathsDesktop.p27cf2e80} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPathsDesktop.p14e48780} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function LogoFrame({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return (
      <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px]">
        <LogoGroup isMobile={true} />
        <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[18px] w-[min-content]">H A V E N</p>
        <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[6.188px] text-center w-[min-content]">C O M M U N I T I E S</p>
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <LogoGroup isMobile={false} />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

interface AdminDashboardProps {
  onLogout?: () => void;
}

interface NewsletterData {
  id: string;
  email: string;
}

interface ContactData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<'newsletter' | 'contact'>('newsletter');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with API calls
  const [newsletterData] = useState<NewsletterData[]>([
    { id: '1', email: 'Johndoe@gmail.com' },
    { id: '2', email: 'Johndoe@gmail.com' },
    { id: '3', email: 'Johndoe@gmail.com' },
    { id: '4', email: 'Johndoe@gmail.com' },
    { id: '5', email: 'Johndoe@gmail.com' },
    { id: '6', email: 'Johndoe@gmail.com' },
    { id: '7', email: 'Johndoe@gmail.com' },
  ]);

  const [contactData] = useState<ContactData[]>([
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '2', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '3', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '4', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '5', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '6', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
    { id: '7', firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', phone: '08036271937', description: 'Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.' },
  ]);

  const newsletterCount = 2420;
  const contactCount = 2420;
  const totalPages = 10;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    if (onLogout) {
      onLogout();
    }
  };

  const handleDownloadAll = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement actual download logic
      // const data = activeTab === 'newsletter' ? newsletterData : contactData;
      // const csv = convertToCSV(data);
      // downloadCSV(csv, `${activeTab}_data.csv`);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Downloading all data for:', activeTab);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    // TODO: Implement API call with search query
    console.log('Searching for:', query);
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    // TODO: Implement API call with new page number
  };

  if (isMobile) {
    return (
      <div className="bg-[#fcfcfd] content-stretch flex flex-col items-start relative size-full">
        {/* Header */}
        <div className="h-[72px] relative shrink-0 w-full">
          <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
                  <LogoFrame isMobile={true} />
                  <button 
                    onClick={handleLogout}
                    className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0"
                  >
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                        <div className="absolute inset-[-8.33%_-5.56%]" style={{ "--stroke-0": "rgba(232, 61, 61, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
                            <path d="M1 7H19M1 1H19M1 13H19" stroke="var(--stroke-0, #E83D3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

        {/* Main Content */}
        <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[32px] px-0 relative shrink-0 w-full">
          {/* Header Section */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-['Avenir:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">Track and manage your users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[32px] py-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[343px]">
                {/* Newsletter Count Card */}
                <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
                      <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]">
                        <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                        <div className="absolute left-[12px] size-[24px] top-[12px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="users-01">
                              <path d={svgPathsMobile.p3dbade00} stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Total number of users</p>
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">{newsletterCount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Count Card */}
                <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
                      <div className="bg-[#ecfdf3] relative rounded-[10px] shrink-0 size-[48px]">
                        <div aria-hidden="true" className="absolute border border-[#d1fadf] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                        <div className="absolute left-[12px] size-[24px] top-[12px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g id="building-07">
                              <path d={svgPathsMobile.p12238580} stroke="var(--stroke-0, #039855)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Total number of properties</p>
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">37</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
                    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                          <p className="font-['Avenir:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full">Newsletter</p>
                        </div>
                        <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-[187px]">Manage your Newsletter</p>
                      </div>
                      <button 
                        onClick={handleDownloadAll}
                        disabled={isLoading}
                        className="bg-[#155eef] relative rounded-[8px] shrink-0 disabled:opacity-70"
                      >
                        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                          <div className="overflow-clip relative shrink-0 size-[20px]">
                            <div className="absolute inset-[12.5%]">
                              <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                                  <path d={svgPathsMobile.p1d790970} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Download all</p>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <div className="bg-white content-stretch flex items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="bg-white h-[44px] relative shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center size-full">
                                <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Email</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {newsletterData.map((item, index) => (
                              <div key={item.id} className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative shrink-0 w-[343px]">
                                <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]">
                                  <div className="overflow-clip relative rounded-[inherit] size-[20px]">
                                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">{index + 1}</p>
                                  </div>
                                  <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">{item.email}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="bg-white content-stretch flex items-start relative size-full">
      <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[32px] grow h-[1380px] items-center min-h-px min-w-px pb-[48px] pt-0 px-0 relative shrink-0">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-[1440px]">
          <div className="h-[112px] relative shrink-0 w-full">
            <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <LogoFrame isMobile={false} />
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                    <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0">
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] text-nowrap whitespace-pre">Admin</p>
                      </div>
                    </button>
                    <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0">
                      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0">
                        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] text-nowrap whitespace-pre">Blog</p>
                      </div>
                    </button>
                    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[76px]">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                        <button className="box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-0 relative shrink-0">
                          <div className="bg-[#f2f4f7] relative rounded-[200px] shrink-0 size-[40px]">
                            <div className="absolute inset-0 opacity-[0.08] rounded-[200px]">
                              <div aria-hidden="true" className="absolute border-[0.75px] border-black border-solid inset-0 pointer-events-none rounded-[200px]" />
                            </div>
                            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#475467] text-[16px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[40px]">JS</p>
                          </div>
                        </button>
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="overflow-clip relative shrink-0 size-[24px]"
                      >
                        <div className="absolute inset-[14.09%_12.5%]">
                          <div className="absolute inset-[-5.8%_-5.56%]" style={{ "--stroke-0": "rgba(232, 61, 61, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path d={svgPathsDesktop.p4b81600} stroke="var(--stroke-0, #E83D3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

        {/* Title Section */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                      <p className="font-['Avenir:Heavy',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#155eef] text-[30px] w-full">Admin</p>
                    </div>
                  </div>
                </div>
                <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Track and manage your Users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                  {/* Newsletter Count */}
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
                        <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]">
                          <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                          <div className="absolute left-[12px] size-[24px] top-[12px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="users-01">
                                <path d={svgPathsDesktop.p3dbade00} stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Newsletter count</p>
                          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                            <p className="basis-0 font-['Avenir:Heavy',sans-serif] grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">{newsletterCount.toLocaleString()}</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[16.667px]">
                                  <div className="absolute inset-[29.17%_8.33%]">
                                    <div className="absolute inset-[-12%_-6%]" style={{ "--stroke-0": "rgba(23, 178, 106, 1)" } as React.CSSProperties}>
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                                        <path d={svgPathsDesktop.pffdf00} stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center text-nowrap whitespace-pre">20%</p>
                              </div>
                              <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">vs last month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Get in Touch Count */}
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
                        <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]">
                          <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                          <div className="absolute left-[12px] size-[24px] top-[12px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="users-01">
                                <path d={svgPathsDesktop.p3dbade00} stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Get in Touch count</p>
                          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                            <p className="basis-0 font-['Avenir:Heavy',sans-serif] grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">{contactCount.toLocaleString()}</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[16.667px]">
                                  <div className="absolute inset-[29.17%_8.33%]">
                                    <div className="absolute inset-[-12%_-6%]" style={{ "--stroke-0": "rgba(23, 178, 106, 1)" } as React.CSSProperties}>
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                                        <path d={svgPathsDesktop.pffdf00} stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center text-nowrap whitespace-pre">20%</p>
                              </div>
                              <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">vs last month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="content-stretch flex flex-col gap-[24px] h-[906px] items-center relative shrink-0 w-[1440px]">
          <div className="bg-white content-stretch flex h-[875px] items-start relative shrink-0 w-[1440px]">
            <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[32px] grow h-[875px] items-center min-h-px min-w-px pb-[48px] pt-[32px] px-0 relative shrink-0">
              {/* Tabs */}
              <div className="bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[1312px]">
                <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <button 
                  onClick={() => setActiveTab('newsletter')}
                  className={`basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0 ${activeTab === 'newsletter' ? 'bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]' : ''}`}
                >
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative w-full">
                      <p className={`font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${activeTab === 'newsletter' ? 'text-[#344054]' : 'text-[#667085]'}`}>Newsletter</p>
                    </div>
                  </div>
                </button>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0 ${activeTab === 'contact' ? 'bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]' : ''}`}
                >
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative w-full">
                      <p className={`font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${activeTab === 'contact' ? 'text-[#344054]' : 'text-[#667085]'}`}>Contact Us</p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Table Content */}
              <div className="content-stretch flex flex-col gap-[24px] h-[791px] items-center relative shrink-0 w-full">
                <div className="h-[791px] relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[24px] h-[791px] items-center px-[32px] py-0 relative w-full">
                      {/* Section Header */}
                      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1312px]">
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px not-italic relative self-stretch shrink-0">
                            <p className="font-['Avenir:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[18px] w-full">
                              {activeTab === 'newsletter' ? 'Newsletter' : 'Get in Touch'}
                            </p>
                            <p className="font-['Avenir:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">
                              {activeTab === 'newsletter' ? 'Manage your Newsletter' : 'Manage your enquiries'}
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                            <button 
                              onClick={handleDownloadAll}
                              disabled={isLoading}
                              className="bg-[#155eef] relative rounded-[8px] shrink-0 disabled:opacity-70"
                            >
                              <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                                <div className="overflow-clip relative shrink-0 size-[20px]">
                                  <div className="absolute inset-[12.5%]">
                                    <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                                        <path d={svgPathsDesktop.p1d790970} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                                  {isLoading ? 'Downloading...' : 'Download all'}
                                </p>
                              </div>
                              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Table */}
                      <div className="relative shrink-0 w-full">
                        <div className="size-full">
                          <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
                            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                                {/* Filters Bar */}
                                <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full">
                                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none" />
                                  <div className="relative rounded-[8px] shrink-0 w-full">
                                    <div className="flex flex-row items-end size-full">
                                      <div className="box-border content-stretch flex items-end justify-between p-[20px] relative w-full">
                                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                                          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[360px]">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">
                                              {activeTab === 'newsletter' ? 'Search for Email' : 'Search for user'}
                                            </p>
                                            <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                                              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                                <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                                                    <div className="overflow-clip relative shrink-0 size-[20px]">
                                                      <div className="absolute inset-[12.5%]">
                                                        <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": "rgba(102, 112, 133, 1)" } as React.CSSProperties}>
                                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                                                            <path d={svgPathsDesktop.p3190da80} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <input
                                                      type="text"
                                                      value={searchQuery}
                                                      onChange={(e) => handleSearch(e.target.value)}
                                                      placeholder="Search"
                                                      className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#667085] text-[16px] bg-transparent border-none outline-none flex-1"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Table Data */}
                                {activeTab === 'newsletter' ? (
                                  <div className="bg-white content-stretch flex items-start relative shrink-0 w-full">
                                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                      {/* Header */}
                                      <div className="h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Email</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Rows */}
                                      {newsletterData.map((item, index) => (
                                        <div key={item.id} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <div className="content-stretch flex items-center justify-center relative shrink-0">
                                                <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]">
                                                  <div className="overflow-clip relative rounded-[inherit] size-[20px]">
                                                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">{index + 1}</p>
                                                  </div>
                                                  <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                                </div>
                                              </div>
                                              <div className="content-stretch flex flex-col items-start relative shrink-0">
                                                <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">{item.email}</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="bg-white content-stretch flex items-start relative shrink-0 w-full">
                                    {/* First Name Column */}
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]">
                                      <div className="h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">First Name</p>
                                          </div>
                                        </div>
                                      </div>
                                      {contactData.map((item, index) => (
                                        <div key={`fname-${item.id}`} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]">
                                                <div className="overflow-clip relative rounded-[inherit] size-[20px]">
                                                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">{index + 1}</p>
                                                </div>
                                                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                              </div>
                                              <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">{item.firstName}</p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Last Name Column */}
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]">
                                      <div className="h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Last Name</p>
                                          </div>
                                        </div>
                                      </div>
                                      {contactData.map((item) => (
                                        <div key={`lname-${item.id}`} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">{item.lastName}</p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Email Column */}
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]">
                                      <div className="bg-white h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Email</p>
                                          </div>
                                        </div>
                                      </div>
                                      {contactData.map((item) => (
                                        <div key={`email-${item.id}`} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">{item.email}</p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Phone Number Column */}
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]">
                                      <div className="bg-white h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Phone Number</p>
                                          </div>
                                        </div>
                                      </div>
                                      {contactData.map((item) => (
                                        <div key={`phone-${item.id}`} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">{item.phone}</p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                    {/* Description Column */}
                                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[402px]">
                                      <div className="bg-white h-[44px] relative shrink-0 w-full">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                        <div className="flex flex-row items-center size-full">
                                          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Description</p>
                                          </div>
                                        </div>
                                      </div>
                                      {contactData.map((item) => (
                                        <div key={`desc-${item.id}`} className="h-[72px] relative shrink-0 w-full">
                                          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                                          <div className="flex flex-row items-center size-full">
                                            <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
                                              <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-[354px]">{item.description}</p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Pagination */}
                                <div className="relative shrink-0 w-full">
                                  <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
                                  <div className="flex flex-row items-center size-full">
                                    <div className="box-border content-stretch flex items-center justify-between pb-[16px] pt-[12px] px-[24px] relative w-full">
                                      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">
                                        Page {currentPage} of {totalPages}
                                      </p>
                                      <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                                        <button 
                                          onClick={() => handlePageChange('prev')}
                                          disabled={currentPage === 1}
                                          className="bg-white relative rounded-[8px] shrink-0 disabled:opacity-50"
                                        >
                                          <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Previous</p>
                                          </div>
                                          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                                        </button>
                                        <button 
                                          onClick={() => handlePageChange('next')}
                                          disabled={currentPage === totalPages}
                                          className="bg-white relative rounded-[8px] shrink-0 disabled:opacity-50"
                                        >
                                          <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
                                            <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Next</p>
                                          </div>
                                          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
