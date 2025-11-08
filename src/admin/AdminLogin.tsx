import { useState } from 'react';
import svgPathsDesktop from "../imports/svg-7u8mfco8ir";
import svgPathsMobile from "../imports/svg-5lzinfg8le";

function LogoGroup({ isMobile }: { isMobile: boolean }) {
  const svgPaths = isMobile ? svgPathsMobile : svgPathsDesktop;
  const dimensions = isMobile ? { width: "48.49px", height: "21.72px", viewBox: "0 0 49 22" } : { width: "64.653px", height: "28.96px", viewBox: "0 0 65 29" };
  
  return (
    <div className={isMobile ? "h-[21.72px] relative shrink-0 w-[48.49px]" : "h-[28.96px] relative shrink-0 w-[64.653px]"}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={dimensions.viewBox}>
        <g id="Group 1000003696">
          <path d={isMobile ? svgPaths.pc3bdb80 : svgPaths.pad81670} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={isMobile ? svgPaths.p14e48780 : svgPaths.p3a1de800} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function LogoFrame({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return (
      <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
        <LogoGroup isMobile={true} />
        <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
        <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
      </div>
    );
  }
  
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[140px]">
      <LogoGroup isMobile={false} />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[32px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[11px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Header({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Header">
      <LogoFrame isMobile={isMobile} />
      <div className={`content-stretch flex flex-col items-start not-italic relative shrink-0 text-center w-full ${isMobile ? 'gap-[8px]' : 'gap-[12px]'}`} data-name="Text and supporting text">
        <p className={`font-['Avenir:Heavy',sans-serif] relative shrink-0 text-[#181d27] w-full ${isMobile ? 'leading-[32px] text-[24px]' : 'leading-[38px] text-[30px]'}`}>Admin Login</p>
        <p className="font-['Avenir:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">Kindly enter the details below</p>
      </div>
    </div>
  );
}

interface AdminLoginProps {
  onLoginSuccess?: (token: string) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and window resize
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // Example API call structure:
      // const response = await fetch('/api/admin/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success - replace with actual response handling
      const mockToken = 'mock_admin_token_' + Date.now();
      
      if (onLoginSuccess) {
        onLoginSuccess(mockToken);
      }
      
      // Store token in localStorage (or use your preferred method)
      localStorage.setItem('adminToken', mockToken);
      
      console.log('Login successful', { email, token: mockToken });
      
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isMobile) {
    return (
      <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center px-0 py-[48px] relative size-full" data-name="Forgot password">
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative w-full">
              <Header isMobile={true} />
              
              <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
                  {/* Email Field */}
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
                    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
                      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email Address</p>
                    </div>
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
                      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#717680]"
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
                    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
                      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Password</p>
                    </div>
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
                      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#717680]"
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <p className="font-['Avenir:Regular',sans-serif] leading-[20px] text-[14px] text-red-600 w-full text-center">
                    {error}
                  </p>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#155eef] relative rounded-[8px] shrink-0 w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  data-name="Buttons/Button"
                >
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                      <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Logging in...</p>
                          </div>
                        ) : (
                          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Login</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white relative size-full" data-name="Forgot password">
      <div className="flex flex-col items-center min-h-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center min-h-inherit pb-[48px] pt-[96px] px-[32px] relative size-full">
          <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col items-center max-w-inherit size-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] items-center max-w-inherit px-[32px] py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[360px] relative shrink-0 w-full" data-name="Content">
                  <Header isMobile={false} />
                  
                  <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Content">
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
                      {/* Email Field */}
                      <div className="box-border content-stretch flex flex-col gap-[6px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Input field">
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
                          <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
                            <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email Address</p>
                          </div>
                          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter your email"
                                  className="basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#717680]"
                                  disabled={isLoading}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Password Field */}
                      <div className="box-border content-stretch flex flex-col gap-[6px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Input field">
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
                          <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
                            <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Password</p>
                          </div>
                          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                                <input
                                  type="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Enter your password"
                                  className="basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d27] text-[16px] bg-transparent border-none outline-none w-full placeholder:text-[#717680]"
                                  disabled={isLoading}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="font-['Avenir:Regular',sans-serif] leading-[20px] text-[14px] text-red-600 w-full text-center">
                        {error}
                      </p>
                    )}

                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-[#155eef] relative rounded-[8px] shrink-0 w-full disabled:opacity-70 disabled:cursor-not-allowed"
                      data-name="Buttons/Button"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                          <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
                            {isLoading ? (
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Logging in...</p>
                              </div>
                            ) : (
                              <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Login</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
