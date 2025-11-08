import svgPaths from "./svg-fcin6jpxpr";
import imgHeroHeaderSection from "figma:asset/e3d1019dbfdb098d8c7bbbde56133652b3f42017.png";
import imgCard from "figma:asset/273e54c9def086e2a9e14d6a9216fe2ba58fcf02.png";
import imgCard1 from "figma:asset/05693c11afbf0b379d5b90d3bfa4c05a01ac5baf.png";
import imgCard2 from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgCard3 from "figma:asset/c8c3910b0bde189c685f51c99681f3fd68c8b6ba.png";
import imgContent from "figma:asset/57a875cbf43f15352e91851211914a72f3de3820.png";
import imgAvatar from "figma:asset/98445bc012cdfdd831846828cb4c4f887f38925d.png";
import imgAvatar1 from "figma:asset/208f27328cc76b16a5f2b9566cc87af5adcf3983.png";
import imgAvatar2 from "figma:asset/f616bdf74826655ce23dd443ed3b5dc09aec80d7.png";
import imgContent1 from "figma:asset/26d2fceb73e66695fbe106bfc5490e82c6f2f378.png";

function Group1000003696() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[8.25px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
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
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton />
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Projects</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton1 />
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton2 />
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger />
      <DropdownHeaderNavigationTrigger1 />
      <DropdownHeaderNavigationTrigger2 />
      <ButtonsButton3 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame1000003793 />
      <Navigation />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Container">
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function DropdownHeaderNavigation() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Header />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-full">
      <DropdownHeaderNavigation />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full z-[2]">
      <Frame2 />
    </div>
  );
}

function Frame1000003788() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[72px] not-italic relative shrink-0 text-[64px] text-white tracking-[-1.28px] w-[850px]">Crafting spaces, cultivating communities</p>
      <div className="h-0 relative shrink-0 w-[1216px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1216 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.5" x2="1216" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-white w-[850px]">We are in the service of creating communities where people feel safe, loved and protected.</p>
    </div>
  );
}

function CompanyAndQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Scroll Down</p>
    </div>
  );
}

function TextAndAction() {
  return (
    <div className="backdrop-blur-[1px] backdrop-filter bg-[rgba(255,255,255,0.3)] box-border content-stretch flex flex-col gap-[12px] h-[64px] items-center justify-center px-[20px] py-[24px] relative rounded-[234px] shrink-0 w-[264px]" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[234px]" />
      <CompanyAndQuote />
    </div>
  );
}

function HeadingAndAction() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Heading and action">
      <Frame1000003788 />
      <TextAndAction />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndAction />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[80px] max-w-[1280px] px-[32px] py-0 top-[120px] w-[1280px]" data-name="Container">
      <HeadingAndSupportingText />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[603px] relative shrink-0 w-full z-[1]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[683px] left-0 top-0 w-full" />
      <Container1 />
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

function HeadingAndSupportingText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start max-w-[768px] min-h-px min-w-[480px] not-italic relative shrink-0" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Our Communities</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">
        <span>{`This is not a home away from home, this is `}</span>
        <span className="font-['Avenir:Heavy',_sans-serif] not-italic">HOME</span>.
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText1 />
    </div>
  );
}

function CompanyAndQuote1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin01 />
    </div>
  );
}

function TextAndAction1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote1 />
          <ButtonsButton4 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard} />
      <TextAndAction1 />
    </div>
  );
}

function CompanyAndQuote2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin2 />
    </div>
  );
}

function TextAndAction2() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote2 />
          <ButtonsButton5 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard1} />
      <TextAndAction2 />
    </div>
  );
}

function CompanyAndQuote3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin3 />
    </div>
  );
}

function TextAndAction3() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote3 />
          <ButtonsButton6 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard2} />
      <TextAndAction3 />
    </div>
  );
}

function CompanyAndQuote4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin4 />
    </div>
  );
}

function TextAndAction4() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote4 />
          <ButtonsButton7 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard3} />
      <TextAndAction4 />
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Case studies">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowLeft />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowRight />
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Arrows">
      <TestiomonialCarouselArrow />
      <TestiomonialCarouselArrow1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
      <CaseStudies />
      <Arrows />
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content1 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip px-0 py-[96px] relative shrink-0 w-full z-10" data-name="Testimonial section">
      <Container2 />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">What we offer our Clients</p>
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#535862] text-[20px] w-full">We offer a wide range of product and services, each tailored to the specific needs of our customers.</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function MarkerPin04() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="marker-pin-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="marker-pin-04">
          <path d={svgPaths.p2e30000} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <MarkerPin04 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Land Banking</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We provide lands for investment opportunities where customers can earn an appreciable ROI.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function FeatureText() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon />
      <Content4 />
    </div>
  );
}

function Globe05() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="globe-05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="marker-pin-04">
          <path d={svgPaths.p2e30000} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <Globe05 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Buy and Build Lands</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We provide lands that customers can buy and build their dream homes on. Infrastructures are already in place.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText1 />
    </div>
  );
}

function FeatureText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon1 />
      <Content5 />
    </div>
  );
}

function Building07() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="building-07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="building-07">
          <path d={svgPaths.p12238580} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <Building07 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Construction</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We engage in construction of homes for our clients. We develop properties that our clients can truly call home.</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText2 />
    </div>
  );
}

function FeatureText2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon2 />
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0" data-name="Content">
      <FeatureText />
      <FeatureText1 />
      <FeatureText2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 grow h-[366px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-neutral-100 inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgContent} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[64px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Content7 />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[96px] pt-[24px] px-0 relative shrink-0 w-full z-[9]" data-name="Features section">
      <Container3 />
      <Container4 />
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

function Container5() {
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

function StarIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_25825)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_17_25825)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_25825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_17_25825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <StarIcon5 key={i} />
      ))}
    </div>
  );
}

function StarsAndQuote1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stars and quote">
      <Stars1 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[16px] w-[min-content]">
        <span>{`As an entrepreneur I’ve always looked for safe and reliable ways of diversifying my portfolio. `}</span>
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
        <g clipPath="url(#clip0_17_25812)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_25812">
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

function AvatarAndText1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar1 />
      <TextAndSupportingText4 />
    </div>
  );
}

function Card5() {
  return (
    <div className="basis-0 bg-neutral-50 grow min-h-px min-w-[360px] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start min-w-inherit p-[32px] relative w-full">
          <StarsAndQuote1 />
          <AvatarAndText1 />
        </div>
      </div>
    </div>
  );
}

function StarIcon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_25825)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_17_25825)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_25825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_17_25825">
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
        <StarIcon10 key={i} />
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
        <g clipPath="url(#clip0_17_25812)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_25812">
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
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">Dare</p>
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

function AvatarAndText2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar2 />
      <TextAndSupportingText5 />
    </div>
  );
}

function Card6() {
  return (
    <div className="basis-0 bg-neutral-50 grow min-h-px min-w-[360px] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start min-w-inherit p-[32px] relative w-full">
          <StarsAndQuote2 />
          <AvatarAndText2 />
        </div>
      </div>
    </div>
  );
}

function StarIcon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_25825)" id="Star icon">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F5F5F5)" id="Star background" />
          <g clipPath="url(#clip1_17_25825)" id="Star">
            <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_25825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
          <clipPath id="clip1_17_25825">
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
        <span>{` has made the process easy and seamless. I have hope for my future and I’m excited for what is to come.`}</span>
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
        <g clipPath="url(#clip0_17_25812)" id="Verified tick">
          <path d={svgPaths.p235ed320} fill="var(--fill-0, #2E90FA)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18655980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_25812">
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
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">Kayode</p>
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

function AvatarAndText3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <Avatar3 />
      <TextAndSupportingText6 />
    </div>
  );
}

function Card7() {
  return (
    <div className="basis-0 bg-neutral-50 grow min-h-px min-w-[360px] relative rounded-[12px] shrink-0" data-name="Card">
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start min-w-inherit p-[32px] relative w-full">
          <StarsAndQuote3 />
          <AvatarAndText3 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003789() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1216px]">
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Cards() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Cards">
      <Frame1000003789 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Cards />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Container5 />
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function TestimonialSection1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[96px] pt-[24px] px-0 relative shrink-0 w-full z-[8]" data-name="Testimonial section">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-px relative shrink-0 w-[1280px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
        <g id="Container"></g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[5]" data-name="–––– Section divider ––––">
      <Container7 />
    </div>
  );
}

function HeadingAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-white w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] min-w-full relative shrink-0 text-[36px] tracking-[-0.72px] w-[min-content]">{`Be a part of our community `}</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[20px] w-[558px]">Are you looking to buy land, build a home or invest with us?</p>
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

function Content11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[48px] items-start justify-center left-0 p-[64px] top-[83px] w-[608px]" data-name="Content">
      <HeadingAndSupportingText4 />
      <TextAndAction5 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 grow h-[480px] min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[480px] left-0 rounded-[24px] top-0 w-[1216px]" />
      <Content11 />
    </div>
  );
}

function Content13() {
  return (
    <div className="box-border content-stretch flex items-center overflow-clip relative rounded-[24px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-[1216px]" data-name="Content">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgContent1} />
      <Content12 />
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

function Group1000003697() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003794() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[8.25px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
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
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
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
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
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

function ButtonsButton11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
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

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
    </div>
  );
}

function LogoAndLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[560px] relative shrink-0" data-name="Logo and links">
      <Frame1000003794 />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[545px]">Crafting spaces, cultivating communities.</p>
      <FooterLinks />
    </div>
  );
}

function Content14() {
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
          <Content14 />
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
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input field">
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

function ButtonsButton12() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <TextPadding />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField />
      <ButtonsButton12 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="Newsletter">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
      <EmailCapture />
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

function Frame1000003769() {
  return (
    <div className="content-stretch flex flex-col h-[202.72px] items-end justify-between relative shrink-0 w-[359px]">
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

function FooterLinks1() {
  return (
    <div className="content-stretch flex font-['Avenir:Medium',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0">Terms</p>
      <p className="relative shrink-0">Privacy</p>
      <p className="relative shrink-0">Cookies</p>
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
      <TestimonialSection />
      <FeaturesSection />
      <TestimonialSection1 />
      <SectionDivider />
      <CtaSection />
      <Footer />
    </div>
  );
}