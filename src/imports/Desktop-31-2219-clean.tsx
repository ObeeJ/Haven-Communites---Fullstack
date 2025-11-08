import svgPaths from "./svg-16jlx6s1lj";
import imgHeroHeaderSection from "figma:asset/e3d1019dbfdb098d8c7bbbde56133652b3f42017.png";
import imgAvatar from "figma:asset/98445bc012cdfdd831846828cb4c4f887f38925d.png";
import imgAvatar1 from "figma:asset/208f27328cc76b16a5f2b9566cc87af5adcf3983.png";
import imgAvatar2 from "figma:asset/f616bdf74826655ce23dd443ed3b5dc09aec80d7.png";
import imgContent1 from "figma:asset/26d2fceb73e66695fbe106bfc5490e82c6f2f378.png";
import logoImage from "figma:asset/3eada838a8a55b948f7379c648ac717c0e7f47c9.png";
import TestimonialSectionImport from "./TestimonialSection-34-5442";
import FeaturesSectionImport from "./FeaturesSection";

function Frame1000003793() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <img src={logoImage} alt="Haven Communities" className="h-auto w-[105px]" />
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Dropdown header navigation trigger">
      <ButtonsButton />
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">What We Offer</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Dropdown header navigation trigger">
      <ButtonsButton1 />
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Dropdown header navigation trigger">
      <ButtonsButton2 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger />
      <DropdownHeaderNavigationTrigger1 />
      <DropdownHeaderNavigationTrigger2 />
    </div>
  );
}

function LogoAndNav() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Logo and nav">
      <Frame1000003793 />
      <Navigation />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex items-center justify-between max-w-inherit px-[32px] py-0 relative w-full">
          <LogoAndNav />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function DropdownHeaderNavigation() {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[3]" data-name="Dropdown header navigation">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[72px] left-0 right-0 top-0" />
      <Header />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[60px] not-italic relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-full">Crafting spaces, cultivating communities</p>
    </div>
  );
}

function CompanyAndQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-white w-full">Scroll Down</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d={svgPaths.p3a380f00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextAndAction() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center pb-[4px] pt-[12px] px-0 relative shrink-0" data-name="Text and action">
      <CompanyAndQuote />
      <ChevronDown />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-end relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-white w-full">We are in the service of creating communities where people feel safe, loved and protected.</p>
      <TextAndAction />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[48px] items-end justify-center left-0 p-[64px] top-[120px] w-[50%]" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[563px] relative shrink-0 w-full z-[2]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[563px] left-0 right-0 top-0" />
      <Content />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[3]">
      <DropdownHeaderNavigation />
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="content-stretch flex flex-col h-[683px] isolate items-center overflow-clip relative shrink-0 w-full z-[11]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function HeadingAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[768px] not-italic relative shrink-0 text-center w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Wall of love</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">Hear first-hand from our incredible community of customers.</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_31_2251)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_31_2251)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_2251">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_31_2251">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function StarsAndQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stars and quote">
      <Stars />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[16px] w-[min-content]">
        <span>{`As an entrepreneur I've always looked for safe and reliable ways of diversifying my portfolio. `}</span>
        <span className="font-['Avenir:Heavy',_sans-serif] text-[#155eef]">Haven</span>
        <span>{` has provided a balanced and healthy mix to my portfolio. Now i engage in Land Banking and I also plan on building on one in the future.`}</span>
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[200px]">
        <div className="absolute bg-[#e9dcbb] inset-0 rounded-[200px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[200px] size-full" src={imgAvatar} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[200px]" />
    </div>
  );
}

function VerifiedTick1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Verified tick">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_31_2290)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_31_2290">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextAndVerifiedTick1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text and verified tick">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">Kehinde</p>
      <VerifiedTick1 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <TextAndVerifiedTick1 />
    </div>
  );
}

function AvatarLabelGroup1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar label group">
      <Avatar1 />
      <TextAndSupportingText4 />
    </div>
  );
}

function Content10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[384px]" data-name="Content">
      <StarsAndQuote />
      <AvatarLabelGroup1 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[384px]" data-name="_Testimonial">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
      <Content10 />
    </div>
  );
}

function StarIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_31_2326)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_31_2326)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_2326">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_31_2326">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <StarIcon5 key={i} />
      ))}
    </div>
  );
}

function StarsAndQuote2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stars and quote">
      <Stars2 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-[334px]">
        <span>{`I have always longed for a community of like minded individuals. A place where I can call home, where I can always go back to after the days hustle and bustle. And most importantly a place where I can feel safe and raise a family. `}</span>
        <span className="font-['Avenir:Heavy',_sans-serif] text-[#155eef]">Haven</span>
        <span>{` has provided that for me.`}</span>
      </p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[200px]">
        <div className="absolute bg-[#c7d1b0] inset-0 rounded-[200px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[200px] size-full" src={imgAvatar1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[200px]" />
    </div>
  );
}

function VerifiedTick2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Verified tick">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_31_2290)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_31_2290">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextAndVerifiedTick2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text and verified tick">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">Tunde</p>
      <VerifiedTick2 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <TextAndVerifiedTick2 />
    </div>
  );
}

function AvatarLabelGroup2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar label group">
      <Avatar2 />
      <TextAndSupportingText5 />
    </div>
  );
}

function Content11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[384px]" data-name="Content">
      <StarsAndQuote2 />
      <AvatarLabelGroup2 />
    </div>
  );
}

function Testimonial1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[384px]" data-name="_Testimonial">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
      <Content11 />
    </div>
  );
}

function StarIcon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_31_2364)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_31_2364)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_31_2364">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_31_2364">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <StarIcon15 key={i} />
      ))}
    </div>
  );
}

function StarsAndQuote3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stars and quote">
      <Stars3 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[16px] w-[min-content]">
        <span>{`I love my job but I desire a life without constant work and financial worries. I believe real estate is the most reliable asset class to Invest in and `}</span>
        <span className="font-['Avenir:Heavy',_sans-serif] text-[#155eef]">Haven</span>
        <span>{` has made the process easy and seamless. I have hope for my future and I'm excited for what is to come.`}</span>
      </p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[200px]">
        <div className="absolute bg-[#e5ddce] inset-0 rounded-[200px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[200px] size-full" src={imgAvatar2} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[200px]" />
    </div>
  );
}

function VerifiedTick3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Verified tick">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_31_2290)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_31_2290">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextAndVerifiedTick3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text and verified tick">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">Felicia</p>
      <VerifiedTick3 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <TextAndVerifiedTick3 />
    </div>
  );
}

function AvatarLabelGroup3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Avatar label group">
      <Avatar3 />
      <TextAndSupportingText6 />
    </div>
  );
}

function Content12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[384px]" data-name="Content">
      <StarsAndQuote3 />
      <AvatarLabelGroup3 />
    </div>
  );
}

function Testimonial2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[384px]" data-name="_Testimonial">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
      <Content12 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Testimonials">
      <Testimonial />
      <Testimonial1 />
      <Testimonial2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip px-0 py-[96px] relative shrink-0 w-full z-[8]" data-name="Testimonial section">
      <Container6 />
      <Container7 />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="bg-white h-px relative shrink-0 w-full" data-name="Section divider">
      <div className="absolute bg-neutral-200 h-px left-0 right-0 top-0" />
    </div>
  );
}

function HeadingAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[560px] not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Interested in joining a community?</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[20px] text-white w-full">Our team of experts are ready to listen to you and offer you a solution that's tailored to your specific needs.</p>
    </div>
  );
}

function CompanyAndQuote5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Talk to Sales</p>
    </div>
  );
}

function TextAndAction5() {
  return (
    <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[12px] h-[64px] items-center justify-center px-[20px] py-[24px] relative rounded-[234px] shrink-0 w-[264px]" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[234px]" />
      <CompanyAndQuote5 />
    </div>
  );
}

function Content11b() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[48px] items-start justify-center left-0 p-[64px] top-[83px] w-[608px]" data-name="Content">
      <HeadingAndSupportingText4 />
      <TextAndAction5 />
    </div>
  );
}

function Content12b() {
  return (
    <div className="basis-0 grow h-[480px] min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[480px] left-0 rounded-[24px] top-0 w-[1216px]" />
      <Content11b />
    </div>
  );
}

function Content13() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip relative rounded-[24px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-[1216px]" data-name="Content">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgContent1} />
      <Content12b />
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center max-w-inherit size-full">
        <div className="box-border content-stretch flex items-center justify-center max-w-inherit px-[32px] py-0 relative w-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip px-0 py-[96px] relative shrink-0 w-full z-[3]" data-name="CTA section">
      <Container8 />
    </div>
  );
}

function Frame1000003794() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <img src={logoImage} alt="Haven Communities" className="h-auto w-[105px]" />
    </div>
  );
}

function ButtonsButton8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton8 />
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">What We Offer</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton9 />
    </div>
  );
}

function ButtonsButton10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact Us</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton10 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
    </div>
  );
}

function LogoAndLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Logo and links">
      <Frame1000003794 />
      <FooterLinks />
    </div>
  );
}

function HeadingAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[16px] text-white w-full">Join our newsletter</p>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[16px] text-white w-full">We'll send you updates about our latest offers and news.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-[360px]" data-name="Input">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#959ba1] text-[16px] text-nowrap whitespace-pre">Enter your email</p>
    </div>
  );
}

function InputFieldInputField() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip pl-[14px] pr-[8px] py-[10px] relative rounded-[8px] shrink-0 w-[360px]" data-name="Input field/Input field">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Input />
    </div>
  );
}

function CompanyAndQuote6() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function TextAndAction6() {
  return (
    <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[9px] h-[44px] items-center justify-center px-[15px] py-[18px] relative rounded-[175.5px] shrink-0 w-[115px]" data-name="Text and action">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[175.5px]" />
      <CompanyAndQuote6 />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="_Email capture">
      <InputFieldInputField />
      <TextAndAction6 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[491px]" data-name="_Newsletter">
      <HeadingAndSupportingText5 />
      <EmailCapture />
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
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social icon">
          <path d={svgPaths.p2c36be40} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social icon">
          <path d={svgPaths.p144eea00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Social icons">
      <SocialIcon1 />
      <SocialIcon2 />
      <SocialIcon3 />
    </div>
  );
}

function Frame1000003769() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame 1000003769">
      <Newsletter />
      <SocialIcons />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <LogoAndLinks />
      <Frame1000003769 />
    </div>
  );
}

function Container9() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function ButtonsButton11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton11 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Footer links">
      <FooterLink3 />
    </div>
  );
}

function Content16() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
      <FooterLinks1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[48px] pt-[64px] px-0 relative shrink-0 w-full z-[1]" data-name="Footer">
      <Container9 />
      <Container10 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
      <HeroHeaderSection />
      <TestimonialSectionImport />
      <FeaturesSectionImport />
      <TestimonialSection1 />
      <SectionDivider />
      <CtaSection />
      <Footer />
    </div>
  );
}
