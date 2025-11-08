import svgPaths from "./svg-372wlbscow";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgImage from "figma:asset/63f7b0a7e6f43ac2774f3994b8ceef0a6913d94b.png";
import imgImage1 from "figma:asset/9e92d20da46f1a726afb17008bddcecff0f54604.png";
import imgContent from "figma:asset/26d2fceb73e66695fbe106bfc5490e82c6f2f378.png";

function Group1000003696() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p36958300} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.pdb80000} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px] cursor-pointer" onClick={onClick}>
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[6.188px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
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

function Container1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
          <Frame1000003793 onClick={() => onNavigate?.('home')} />
          <NavMenuButton1 />
        </div>
      </div>
    </div>
  );
}

function Header1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame1000003772({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]" data-name="Dropdown header navigation">
      <Frame1000003772 onNavigate={onNavigate} />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Contact Us</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-white w-full">{`We're a customer-focused real estate company dedicated to streamlining every step of your property pursuit. From acquiring a new land or a new home to securing a lucrative asset or forging new alliances, we provide a wide array of opportunities to help you achieve your goals. Our purpose is to make your real estate purchase straightforward, enjoyable, and seamless from start to finish.`}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[276px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[312px] items-center left-1/2 top-[46px] translate-x-[-50%] w-[343px]" data-name="Content">
      <Content1 />
    </div>
  );
}

function Frame1000003773() {
  return (
    <div className="h-[404px] relative shrink-0 w-[375px] z-[1]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[404px] left-0 top-0 w-[375px]" />
      <Content2 />
    </div>
  );
}

function HeroHeaderSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col h-[476px] isolate items-center overflow-clip relative shrink-0 w-[375px] z-10" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <DropdownHeaderNavigation2 onNavigate={onNavigate} />
      <Frame1000003773 />
    </div>
  );
}

function HeadingAndSubheading1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#181d27] text-[30px] w-full">Our Mission</p>
    </div>
  );
}

function ContentItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">
        <p className="mb-[16px]">{`We are on a mission of creating beautiful and lush communities where our residents can feel safe, raise a family and live a meaningful and purposeful life. We do this by providing infrastructures like perimeter fencing for our lands, a gate house, good drainage system, good road network, constant electricity and 24/7 security. `}</p>
        <p>We also provide wealth creating opportunities to our community like lands that are located in strategic areas and can serve as land banking investments for our clients which creates wealth for them in the future. We believe that everyone should own a piece of the earth and we have made it accessible to everyone by streamlining the process of acquiring it.</p>
      </div>
    </div>
  );
}

function RichText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich text">
      <ContentItem />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSubheading1 />
      <RichText />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Image />
        </div>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-[375px] z-[8]" data-name="Content section">
      <Container2 />
      <Container3 />
    </div>
  );
}

function HeadingAndSubheading2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#181d27] text-[30px] w-full">Our Vision</p>
    </div>
  );
}

function ContentItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">
        <p className="mb-[16px]">{`Our vision is to be the largest home builder in the country. We want solve the country’s housing deficit problem by building as many affordable homes as possible, thereby creating a world where each individual can have a home to call theirs. `}</p>
        <p>We want to create communities that people can feel safe in, raise their families and be happy. We want to build a self sustainable ecosystem and community where amenities that is needed to survive, live and be happy will be provided for by the community. Amenities like good drainage systems, uninterrupted power supply, central waste system, shopping centers and malls, restaurants, farmers markets, schools, hospitals and so on. We want to create a haven for people. We want to create Heaven on earth.</p>
      </div>
    </div>
  );
}

function RichText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich text">
      <ContentItem1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSubheading2 />
      <RichText1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-[375px] z-[7]" data-name="Content section">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
        <g id="Container"></g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[6]" data-name="–––– Section divider ––––">
      <Container6 />
    </div>
  );
}

function HeadingAndSubheading3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#181d27] text-[30px] text-center w-full">Our Core Values</p>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading3 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] text-center w-full">Our shared values keep us connected and guide us as a team.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function CoinsHand() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="coins-hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_63191)" id="coins-hand">
          <path d={svgPaths.p3e5f92c0} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_63191">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[40px]">
        <CoinsHand />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Value</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We are committed to helping people settle down in a conducive community and also helping people find the right investment to help them grow their wealth.</p>
    </div>
  );
}

function FeatureText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon />
      <TextAndSupportingText />
    </div>
  );
}

function Award03() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="award-03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="award-03">
          <path d={svgPaths.p64eef00} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[40px]">
        <Award03 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Excellence</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We pursue excellence to the highest degree. We provide the best quality of product and service to our clients.</p>
    </div>
  );
}

function FeatureText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon1 />
      <TextAndSupportingText1 />
    </div>
  );
}

function Scales02() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="scales-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="scales-02">
          <path d={svgPaths.p598db80} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[40px]">
        <Scales02 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Integrity</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We display unparalleled transparency in our dealings with our customers, thereby establishing trust and confidence in our brand.</p>
    </div>
  );
}

function FeatureText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon2 />
      <TextAndSupportingText2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <FeatureText />
      <FeatureText1 />
      <FeatureText2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-full z-[4]" data-name="Features section">
      <Container7 />
      <Container8 />
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[110px] items-start not-italic relative shrink-0 text-white w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] relative shrink-0 text-[23px] w-[310px]">Be a part of our community</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Are you looking to buy land, build a home or invest with us?</p>
    </div>
  );
}

function CompanyAndQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Talk to Sales</p>
    </div>
  );
}

function TextAndAction() {
  return (
    <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[9px] h-[48px] items-center justify-center px-[15px] py-[18px] relative rounded-[175.5px] shrink-0 w-[164px]" data-name="Text and action">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[175.5px]" />
      <CompanyAndQuote />
    </div>
  );
}

function Frame1000003790() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[40px] w-[295px]">
      <HeadingAndSupportingText2 />
      <TextAndAction />
    </div>
  );
}

function Content7() {
  return (
    <div className="h-[274px] overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Content">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgContent} />
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[274px] left-0 rounded-[16px] top-0 w-[343px]" />
      <Frame1000003790 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-0 relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-start overflow-clip px-0 py-[64px] relative shrink-0 w-[375px] z-[3]" data-name="CTA section">
      <Container9 />
    </div>
  );
}

function Group1000003697() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p36958300} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.pdb80000} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003794() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px]">
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[6.188px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 />
    </div>
  );
}

function Frame1000003768() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content8 />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton />
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton1 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks />
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton2 />
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton3 />
    </div>
  );
}

function ButtonsButton4() {
  return <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip shrink-0" data-name="Buttons/Button" />;
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton4 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink2 />
      <FooterLink3 />
      <FooterLink4 />
    </div>
  );
}

function FooterLinksColumn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[60px] items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks1 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 />
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter your email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
      <InputWithLabel />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField />
      <ButtonsButton5 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Newsletter">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
      <EmailCapture />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container11 />
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social icon">
          <path clipRule="evenodd" d={svgPaths.p1f8d8b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Group">
        <path d={svgPaths.p2ccee40} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </svg>
  );
}

function SocialIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
      <Group />
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_21514)" id="Social icon">
          <path d={svgPaths.p2334f790} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_21514">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_21511)" id="Social icon">
          <g id="Vector">
            <path d={svgPaths.p3bfce500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p90dcd40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36893400} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_21511">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social icon">
          <path d={svgPaths.p396b2062} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_21523)" id="Social icon">
          <path clipRule="evenodd" d={svgPaths.p2e42b500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_21523">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_4_21505)" id="Social icon">
          <path clipRule="evenodd" d={svgPaths.p3a36a3c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_21505">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Social icons">
      <SocialIcon />
      <SocialIcon1 />
      <SocialIcon2 />
      <SocialIcon3 />
      <SocialIcon4 />
      <SocialIcon5 />
      <SocialIcon6 />
    </div>
  );
}

function FooterLinks2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('termsOfService')}>Terms</p>
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('privacyPolicy')}>Privacy</p>
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('cookiesPolicy')}>Cookies</p>
    </div>
  );
}

function Frame1000003771({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
      <FooterLinks2 onNavigate={onNavigate} />
      <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
    </div>
  );
}

function Content12({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 onNavigate={onNavigate} />
    </div>
  );
}

function Container12({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content12 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container10 />
      <Frame1000003770 />
      <Container12 onNavigate={onNavigate} />
    </div>
  );
}

export default function Mobile({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <HeroHeaderSection onNavigate={onNavigate} />
      <ContentSection />
      <ContentSection1 />
      <SectionDivider />
      <FeaturesSection />
      <CtaSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}