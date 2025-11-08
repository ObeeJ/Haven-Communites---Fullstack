import svgPathsMobile from "../imports/svg-372wlbscow";
import svgPathsDesktop from "../imports/svg-0bgnbpslh2";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgImageMobile from "figma:asset/20669da9ba435e07fba3a4bc32247280cb0b5900.png";
import imgImageMobile1 from "figma:asset/3a95aabc944d1d0860bcf4007d6cb3c4292653b5.png";
import imgImageDesktop from "figma:asset/0164ba3b1976ad1ab82d20102d9f32730fc8c6fb.png";
import imgImageDesktop1 from "figma:asset/6a0f78d573110e8831ecfb44ca95157a1cf2d390.png";
import imgContent from "figma:asset/26d2fceb73e66695fbe106bfc5490e82c6f2f378.png";
import imgLogo from "figma:asset/4c0c1c283fcc7dd61b5d7f5a36fc13a3d2f5e6d1.png";

// Mobile Components
function Group1000003696Mobile() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPathsMobile.p36958300} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPathsMobile.pdb80000} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793Mobile({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px] cursor-pointer" 
      onClick={onClick}
    >
      <img src={imgLogo} alt="Haven Communities" className="w-[78.75px] h-auto" />
    </div>
  );
}

function Menu2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu-01">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavMenuButton1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Nav menu button">
      <Menu2 />
    </div>
  );
}

// Desktop Components
function Group1000003696Desktop() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPathsDesktop.p27cf2e80} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPathsDesktop.p14e48780} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793Desktop({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px] cursor-pointer" 
      onClick={onClick}
    >
      <img src={imgLogo} alt="Haven Communities" className="w-[105px] h-auto" />
    </div>
  );
}

function CoinsHand() {
  return (
    <div className="absolute left-[12px] md:left-[10px] size-[24px] md:size-[20px] top-[12px] md:top-[10px]" data-name="coins-hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="coins-hand">
          <path d={svgPathsDesktop.p3c298b00} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Award03() {
  return (
    <div className="absolute left-[12px] md:left-[10px] size-[24px] md:size-[20px] top-[12px] md:top-[10px]" data-name="award-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="award-03">
          <path d={svgPathsDesktop.p4d74e00} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Scales02() {
  return (
    <div className="absolute left-[12px] md:left-[10px] size-[24px] md:size-[20px] top-[12px] md:top-[10px]" data-name="scales-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="scales-02">
          <path d={svgPathsDesktop.pa811900} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon({ pathData, clipPath }: { pathData: string; clipPath?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {clipPath ? (
          <>
            <g clipPath={`url(#${clipPath})`} id="Social icon">
              <path clipRule="evenodd" d={pathData} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </g>
            <defs>
              <clipPath id={clipPath}>
                <rect fill="white" height="24" width="24" />
              </clipPath>
            </defs>
          </>
        ) : (
          <g id="Social icon">
            <path clipRule="evenodd" d={pathData} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </g>
        )}
      </svg>
    </div>
  );
}

interface AboutProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative w-full min-h-screen">
      {/* Hero Header Section */}
      <div className="content-stretch flex flex-col h-[476px] md:h-[683px] isolate items-center overflow-clip relative shrink-0 w-full z-10" data-name="Hero header section">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden h-[72px] relative shrink-0 w-full z-[2]">
          <div className="absolute h-[72px] left-0 right-0 top-0">
            <div className="absolute bg-[rgba(0,0,0,0.4)] h-[72px] left-0 top-0 w-full" />
            <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
                    <Frame1000003793Mobile onClick={() => onNavigate?.('home')} />
                    <NavMenuButton1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block h-[80px] relative shrink-0 w-full z-[2]">
          <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full">
            <div className="h-[112px] relative shrink-0 w-full">
              <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0">
                <div className="content-stretch flex items-center justify-between relative shrink-0 max-w-[1320px] w-full mx-auto px-[32px]">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <Frame1000003793Desktop onClick={() => onNavigate?.('home')} />
                    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 cursor-pointer" onClick={() => onNavigate?.('about')}>
                        <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 cursor-pointer" onClick={() => onNavigate?.('projects')}>
                        <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Projects</p>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 cursor-pointer" onClick={() => onNavigate?.('contact')}>
                        <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
                      </div>
                      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer" onClick={() => onNavigate?.('blog')}>Blog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Mobile */}
        <div className="md:hidden h-[404px] relative shrink-0 w-full z-[1]">
          <div className="absolute bg-[rgba(0,0,0,0.4)] h-[404px] left-0 top-0 w-full" />
          <div className="absolute content-stretch flex flex-col gap-[40px] h-[312px] items-center left-1/2 top-[46px] translate-x-[-50%] w-[343px]">
            <div className="content-stretch flex flex-col gap-[32px] h-[276px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Contact Us</p>
                </div>
                <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-white w-full">{`We're a customer-focused real estate company dedicated to streamlining every step of your property pursuit. From acquiring a new land or a new home to securing a lucrative asset or forging new alliances, we provide a wide array of opportunities to help you achieve your goals. Our purpose is to make your real estate purchase straightforward, enjoyable, and seamless from start to finish.`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Desktop */}
        <div className="hidden md:block h-[603px] relative shrink-0 w-full z-[1]">
          <div className="absolute bg-[rgba(0,0,0,0.4)] h-[683px] left-0 top-0 w-full" />
          <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[80px] px-[32px] py-0 top-[151px] w-[1280px]">
            <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-white w-[565px]">
                <p className="font-['Avenir:Heavy',_sans-serif] leading-[60px] relative shrink-0 text-[48px] tracking-[-0.96px] w-full">About Us</p>
                <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] relative shrink-0 text-[20px] w-full">{`We're a customer-focused real estate company dedicated to streamlining every step of your property pursuit. From acquiring a new land or a new home to securing a lucrative asset or forging new alliances, we provide a wide array of opportunities to help you achieve your goals. Our purpose is to make your real estate purchase straightforward, enjoyable, and seamless from start to finish.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center overflow-clip px-0 py-[64px] md:py-[96px] relative shrink-0 w-full z-[8]">
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center max-w-inherit size-full">
            <div className="box-border content-center flex flex-wrap gap-[32px] md:gap-[64px] items-center justify-center max-w-inherit px-[16px] md:px-[32px] py-0 relative w-full">
              {/* Text Content */}
              <div className="basis-0 content-stretch flex flex-col gap-[32px] md:gap-[48px] grow items-start min-h-px min-w-[320px] md:min-w-[480px] relative shrink-0">
                <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full">
                  <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] md:leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[30px] md:text-[36px] tracking-[-0.72px] w-full">Our Mission</p>
                </div>
                <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] md:leading-[28px] not-italic relative shrink-0 text-[#535862] text-[16px] md:text-[18px] w-full">
                      <p className="mb-[16px] md:mb-[18px]">{`We are on a mission of creating beautiful and lush communities where our residents can feel safe, raise a family and live a meaningful and purposeful life. We do this by providing infrastructures like perimeter fencing for our lands, a gate house, good drainage system, good road network, constant electricity and 24/7 security. `}</p>
                      <p>We also provide wealth creating opportunities to our community like lands that are located in strategic areas and can serve as land banking investments for our clients which creates wealth for them in the future. We believe that everyone should own a piece of the earth and we have made it accessible to everyone by streamlining the process of acquiring it.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="basis-0 grow h-[240px] md:h-[576px] min-h-px min-w-[320px] md:min-w-[480px] relative rounded-[8px] md:rounded-[12px] shrink-0">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] md:rounded-[12px] size-full" src={imgImageMobile} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center overflow-clip px-0 py-[64px] md:py-[96px] relative shrink-0 w-full z-[7]">
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center max-w-inherit size-full">
            <div className="box-border content-center flex flex-wrap md:flex-wrap-reverse gap-[32px] md:gap-[64px] items-center justify-center max-w-inherit px-[16px] md:px-[32px] py-0 relative w-full">
              {/* Image - First on mobile, second on desktop */}
              <div className="basis-0 grow h-[240px] md:h-[576px] min-h-px min-w-[320px] md:min-w-[480px] relative rounded-[8px] md:rounded-[12px] shrink-0 md:order-first">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] md:rounded-[12px] size-full" src={imgImageMobile1} />
              </div>
              {/* Text Content - Second on mobile, first on desktop */}
              <div className="basis-0 content-stretch flex flex-col gap-[32px] md:gap-[48px] grow items-start min-h-px min-w-[320px] md:min-w-[480px] relative shrink-0 md:order-last">
                <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full">
                  <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] md:leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[30px] md:text-[36px] tracking-[-0.72px] w-full">Our Vision</p>
                </div>
                <div className="content-stretch flex flex-col items-start max-w-[720px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] md:leading-[28px] not-italic relative shrink-0 text-[#535862] text-[16px] md:text-[18px] w-full">
                      <p className="mb-[16px] md:mb-[18px]">{`Our vision is to be the largest home builder in the country. We want solve the country's housing deficit problem by building as many affordable homes as possible, thereby creating a world where each individual can have a home to call theirs. `}</p>
                      <p>We want to create communities that people can feel safe in, raise their families and be happy. We want to build a self sustainable ecosystem and community where amenities that is needed to survive, live and be happy will be provided for by the community. Amenities like good drainage systems, uninterrupted power supply, central waste system, shopping centers and malls, restaurants, farmers markets, schools, hospitals and so on. We want to create a haven for people. We want to create Heaven on earth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[6]">
        <div className="h-px relative shrink-0 w-full max-w-[1280px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <g id="Container"></g>
          </svg>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center overflow-clip px-0 py-[64px] md:py-[96px] relative shrink-0 w-full z-[4]">
        {/* Header */}
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[16px] md:px-[32px] py-0 relative w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[20px] items-center max-w-[768px] relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] md:leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[30px] md:text-[36px] text-center tracking-[-0.72px] w-full">Our Core Values</p>
                  </div>
                  <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] md:leading-[30px] not-italic relative shrink-0 text-[#535862] text-[18px] md:text-[20px] text-center w-full">Our shared values keep us connected and guide us as one team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[16px] md:px-[32px] py-0 relative w-full">
              <div className="content-start flex flex-col md:flex-row gap-[40px] md:gap-[32px] items-start relative shrink-0 w-full">
                {/* Value 1 */}
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-[320px] relative shrink-0">
                  <div className="bg-white relative rounded-[8px] md:rounded-[10px] shrink-0 size-[40px] md:size-[48px]">
                    <div className="overflow-clip relative rounded-[inherit] size-[40px] md:size-[48px]">
                      <CoinsHand />
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                    <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full">
                    <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Value</p>
                    <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We are committed to helping people settle down in a conducive community and also helping people find the right investment to help them grow their wealth.</p>
                  </div>
                </div>

                {/* Excellence */}
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-[320px] relative shrink-0">
                  <div className="bg-white relative rounded-[8px] md:rounded-[10px] shrink-0 size-[40px] md:size-[48px]">
                    <div className="overflow-clip relative rounded-[inherit] size-[40px] md:size-[48px]">
                      <Award03 />
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                    <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full">
                    <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Excellence</p>
                    <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We pursue excellence to the highest degree. We provide the best quality of product and service to our clients.</p>
                  </div>
                </div>

                {/* Integrity */}
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center min-h-px min-w-[320px] relative shrink-0">
                  <div className="bg-white relative rounded-[8px] md:rounded-[10px] shrink-0 size-[40px] md:size-[48px]">
                    <div className="overflow-clip relative rounded-[inherit] size-[40px] md:size-[48px]">
                      <Scales02 />
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                    <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] md:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full">
                    <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Integrity</p>
                    <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We display unparalleled transparency in our dealings with our customers, thereby establishing trust and confidence in our brand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center justify-center overflow-clip px-0 py-[64px] md:py-[96px] relative shrink-0 w-full z-[3]">
        {/* Mobile CTA */}
        <div className="md:hidden relative shrink-0 w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex items-start px-[16px] py-0 relative w-full">
              <div className="h-[274px] overflow-clip relative rounded-[16px] shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgContent} />
                <div className="absolute bg-[rgba(0,0,0,0.4)] h-[274px] left-0 rounded-[16px] top-0 w-full" />
                <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[40px] right-[24px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-white w-full">
                    <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] relative shrink-0 text-[23px] w-full">Be a part of our community</p>
                    <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Are you looking to buy land, build a home or invest with us?</p>
                  </div>
                  <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[9px] h-[48px] items-center justify-center px-[15px] py-[18px] relative rounded-[175.5px] shrink-0 w-[164px]">
                    <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[175.5px]" />
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Talk to Sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block max-w-[1280px] relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center max-w-inherit size-full">
            <div className="box-border content-stretch flex items-center justify-center max-w-inherit px-[32px] py-0 relative w-full">
              <div className="box-border content-stretch flex items-center overflow-clip relative rounded-[24px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-[1216px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgContent} />
                <div className="basis-0 grow h-[480px] min-h-px min-w-px relative shrink-0">
                  <div className="absolute bg-[rgba(0,0,0,0.4)] h-[480px] left-0 rounded-[24px] top-0 w-full" />
                  <div className="absolute box-border content-stretch flex flex-col gap-[48px] items-start justify-center left-0 p-[64px] top-[83px] w-[608px]">
                    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-white w-full">
                      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] min-w-full relative shrink-0 text-[36px] tracking-[-0.72px] w-[min-content]">{`Be a part of our community `}</p>
                      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[20px] w-[542px]">Are you looking to buy land, build a home or invest with us?</p>
                    </div>
                    <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[12px] h-[64px] items-center justify-center px-[20px] py-[24px] relative rounded-[234px] shrink-0 w-[264px]">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[234px]" />
                      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Talk to Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center overflow-clip pb-[48px] pt-[48px] md:pt-[64px] px-0 relative shrink-0 w-full z-[1]">
        {/* Footer Content */}
        <div className="max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start max-w-inherit px-[16px] md:px-[32px] py-0 relative w-full">
              {/* Mobile Footer */}
              <div className="md:hidden content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <Frame1000003793Mobile onClick={() => onNavigate?.('home')} />
                </div>
                <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
              </div>

              {/* Desktop Footer - Logo and Links */}
              <div className="hidden md:flex content-start flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[560px] relative shrink-0">
                  <Frame1000003793Desktop onClick={() => onNavigate?.('home')} />
                  <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[545px]">Crafting spaces, cultivating communities.</p>
                  <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('about')}>About Us</p>
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('projects')}>Project</p>
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('contact')}>Contact</p>
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('blog')}>Blog</p>
                  </div>
                </div>

                {/* Newsletter - Desktop */}
                <div className="content-stretch flex flex-col h-[202.72px] items-end justify-between relative shrink-0 w-[359px]">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]">
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                              <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter your email</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#00359e] relative rounded-[234px] shrink-0">
                        <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                          <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
                        </div>
                        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                    <SocialIcon pathData={svgPathsDesktop.p1f8d8b00} />
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Group">
                          <path d={svgPathsDesktop.p2ccee40} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <SocialIcon pathData={svgPathsDesktop.p2334f790} clipPath="clip0_4_21514" />
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g clipPath="url(#clip0_4_21511)" id="Social icon">
                          <g id="Vector">
                            <path d={svgPathsDesktop.p3bfce500} fill="var(--fill-0, white)" />
                            <path d={svgPathsDesktop.p90dcd40} fill="var(--fill-0, white)" />
                            <path d={svgPathsDesktop.p36893400} fill="var(--fill-0, white)" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_4_21511">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Social icon">
                          <path d={svgPathsDesktop.p396b2062} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <SocialIcon pathData={svgPathsDesktop.p2e42b500} clipPath="clip0_4_21523" />
                    <SocialIcon pathData={svgPathsDesktop.p3a36a3c0} clipPath="clip0_4_21505" />
                  </div>
                </div>
              </div>

              {/* Mobile Footer Links */}
              <div className="md:hidden content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-px items-start min-h-px min-w-[96px] relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[60px] items-start min-h-px min-w-[96px] relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Newsletter */}
        <div className="md:hidden max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[16px] py-0 relative w-full">
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="bg-white relative rounded-[234px] shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
                            <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter your email</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                            <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
                        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons & Footer Bottom - Mobile */}
        <div className="md:hidden max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[16px] py-0 relative w-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <SocialIcon pathData={svgPathsMobile.p1f8d8b00} />
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Group">
                        <path d={svgPathsMobile.p2ccee40} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <SocialIcon pathData={svgPathsMobile.p2334f790} clipPath="clip0_4_21514" />
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g clipPath="url(#clip0_4_21511)" id="Social icon">
                        <g id="Vector">
                          <path d={svgPathsMobile.p3bfce500} fill="var(--fill-0, white)" />
                          <path d={svgPathsMobile.p90dcd40} fill="var(--fill-0, white)" />
                          <path d={svgPathsMobile.p36893400} fill="var(--fill-0, white)" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_4_21511">
                          <rect fill="white" height="24" width="24" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Social icon">
                        <path d={svgPathsMobile.p396b2062} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <SocialIcon pathData={svgPathsMobile.p2e42b500} clipPath="clip0_4_21523" />
                  <SocialIcon pathData={svgPathsMobile.p3a36a3c0} clipPath="clip0_4_21505" />
                </div>
                <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 text-[16px] text-nowrap whitespace-pre">
                    <p className="relative shrink-0">Terms</p>
                    <p className="relative shrink-0">Privacy</p>
                    <p className="relative shrink-0">Cookies</p>
                  </div>
                  <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Desktop */}
        <div className="hidden md:block max-w-[1280px] relative shrink-0 w-full">
          <div className="max-w-inherit size-full">
            <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
              <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
                <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
                <div className="content-stretch flex font-['Avenir:Medium',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
                  <p className="relative shrink-0">Terms</p>
                  <p className="relative shrink-0">Privacy</p>
                  <p className="relative shrink-0">Cookies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}