import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-9gqd1xhwdw";
import imgImage from "figma:asset/4f1ed71a8e5456f8b8cf9bc696ca9afe262f2ec0.png";
import imgImageMobile from "figma:asset/944300956d68a2c588e5fa327cca344e00b046d7.png";
import { motion } from "motion/react";

function BackgroundOverlay() {
  return <div className="absolute bg-[rgba(21,94,239,0.2)] inset-0 opacity-70" data-name="Background overlay" />;
}

function BackgroundOverlay1() {
  return (
    <div className="absolute backdrop-blur backdrop-filter inset-0" data-name="Background overlay">
      <BackgroundOverlay />
    </div>
  );
}

function XClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x-close">
          <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function XCloseMobile({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x-close">
          <path d="M18 6L6 18M6 6L18 18" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseX({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[24px] rounded-[8px] size-[44px] top-[24px] cursor-pointer hover:bg-black/10 transition-colors z-10" 
      data-name="Button close X"
    >
      <XClose />
    </button>
  );
}

function ButtonCloseXMobile({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[8px] rounded-[8px] size-[44px] top-[8px] cursor-pointer hover:bg-black/10 transition-colors" 
      data-name="Button close X"
    >
      <XCloseMobile />
    </button>
  );
}

function ButtonsButtonLoadingIcon() {
  return (
    <motion.div
      className="relative shrink-0 size-[20px]"
      data-name="Buttons/Button loading icon"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Buttons/Button loading icon">
          <path d={svgPaths.p39161900} id="Background" opacity="0.3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4660fb4} id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </motion.div>
  );
}

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      console.log('Subscribing email:', email);
      
      // Simulate API call - backend will handle this
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // After successful submission, close the modal
      setIsLoading(false);
      onClose();
      
      // Store that user has subscribed (so modal doesn't show again)
      localStorage.setItem('hasSubscribed', 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
      data-name="Modal"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[32px] md:p-[16px] relative size-full">
          <BackgroundOverlay1 />
          
          {/* Desktop Layout */}
          <div className="hidden md:block max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center justify-center max-w-inherit size-full">
              <div className="box-border content-stretch flex items-center justify-center max-w-inherit px-[32px] py-0 relative w-full">
                <div className="bg-neutral-50 content-stretch flex items-center overflow-clip relative rounded-[24px] shrink-0 max-w-[1095px] w-full" data-name="Content">
                  {/* Image Section */}
                  <div className="basis-0 grow h-[480px] min-h-px min-w-px relative shrink-0" data-name="Image">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
                    <ButtonCloseX onClick={onClose} />
                  </div>
                  
                  {/* Content Section */}
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
                    <div className="flex flex-col justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[48px] items-start justify-center p-[64px] relative w-full">
                        {/* Heading */}
                        <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Stay in the know</p>
                          <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews.</p>
                        </div>
                        
                        {/* Email Form */}
                        <form onSubmit={handleSubmit} className="content-stretch flex gap-[16px] items-start max-w-[480px] relative shrink-0 w-full" data-name="Email capture">
                          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input field">
                            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
                              <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
                                <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
                                    <input
                                      type="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="Enter your email"
                                      disabled={isLoading}
                                      className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px] bg-transparent border-none outline-none placeholder:text-[#717680] w-full disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] w-full">
                              <span>{`We care about your data in our `}</span>
                              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#155eef]">privacy policy</span>.
                            </p>
                          </div>
                          
                          <button
                            type="submit"
                            disabled={!email || isLoading}
                            className={`relative rounded-[234px] shrink-0 min-h-[48px] transition-all ${(email || isLoading) ? 'bg-[#155eef]' : 'bg-transparent'} ${(email && !isLoading) ? 'cursor-pointer hover:bg-[#1250d4]' : 'cursor-not-allowed'}`}
                            data-name="Buttons/Button"
                          >
                            <div className="box-border content-stretch flex gap-[6px] items-center justify-center min-h-inherit overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
                              {isLoading && <ButtonsButtonLoadingIcon />}
                              <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
                                <p className={`font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${(email || isLoading) ? 'text-white' : 'text-[#a4a7ae]'}`}>Subscribe</p>
                              </div>
                            </div>
                            {(email || isLoading) ? (
                              <>
                                <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                                <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                              </>
                            ) : (
                              <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden relative shrink-0 w-full" data-name="Mobile Container">
            <div className="bg-neutral-50 content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Content">
              {/* Image */}
              <div className="h-[208px] relative shrink-0 w-full" data-name="Content">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageMobile} />
                <ButtonCloseXMobile onClick={onClose} />
              </div>
              
              {/* Text and Form */}
              <div className="relative shrink-0 w-full" data-name="Text and actions">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
                    {/* Heading */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
                      <p className="font-['Avenir:Medium',_sans-serif] leading-[38px] relative shrink-0 text-[#181d27] text-[24px] w-full">Stay in the know</p>
                      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] relative shrink-0 text-[#535862] text-[18px] w-full">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews.</p>
                    </div>
                    
                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
                          <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
                            <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter your email"
                                  disabled={isLoading}
                                  className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px] bg-transparent border-none outline-none placeholder:text-[#717680] w-full disabled:opacity-50"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] w-full">
                          <span>{`Read about our `}</span>
                          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline cursor-pointer hover:text-[#155eef]">privacy policy</span>.
                        </p>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={!email || isLoading}
                        className={`relative rounded-[234px] shrink-0 w-full min-h-[48px] transition-all ${(email || isLoading) ? 'bg-[#155eef]' : 'bg-transparent'} ${(email && !isLoading) ? 'cursor-pointer hover:bg-[#1250d4]' : 'cursor-not-allowed'}`}
                        data-name="Buttons/Button"
                      >
                        <div className="flex flex-row items-center justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
                            {isLoading && <ButtonsButtonLoadingIcon />}
                            <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
                              <p className={`font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${(email || isLoading) ? 'text-white' : 'text-[#a4a7ae]'}`}>Subscribe</p>
                            </div>
                          </div>
                        </div>
                        {(email || isLoading) ? (
                          <>
                            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          </>
                        ) : (
                          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
