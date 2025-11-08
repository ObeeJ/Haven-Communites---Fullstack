import svgPaths from "./svg-vj3farkuie";
import imgImage from "figma:asset/2e216a667b6c8f15de9b963a967f9c53aaac940e.png";
import imgBlogPostCard from "figma:asset/ded0a5ed5bfb07fb361f264ea0c88b184e32a36a.png";
import imgImage1 from "figma:asset/43c7799234d275b8b57ca1b26235659d44d23dba.png";
import imgImage2 from "figma:asset/1df45d321d94faf7238fbcae0c4f616df9019203.png";

function Group1000003696() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p2cbdef00} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p19f24700} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px]">
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[18px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[6.188px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu-01">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
          <Frame1000003793 />
          <NavMenuButton1 />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 />
    </div>
  );
}

function DropdownHeaderNavigation1() {
  return (
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header1 />
    </div>
  );
}

function Frame1000003772() {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation1 />
    </div>
  );
}

function DropdownHeaderNavigation2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]" data-name="Dropdown header navigation">
      <Frame1000003772 />
    </div>
  );
}

function MarkerPin02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-02">
          <g id="Icon">
            <path d={svgPaths.p27e0c880} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p38d04800} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <MarkerPin02 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre">Ogun State</p>
    </div>
  );
}

function DetailsWrap() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Details wrap">
      <TextAndIcon />
    </div>
  );
}

function Details() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-between relative shrink-0 w-full" data-name="Details">
      <DetailsWrap />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181d27] text-[24px] tracking-[-0.48px] w-full">Eden Court</p>
      <Details />
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

function BlogPostCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 size-[240px]" data-name="Blog post card">
      <Image />
    </div>
  );
}

function Image1() {
  return <div className="rounded-[16px] shrink-0 size-[240px]" data-name="Image" />;
}

function BlogPostCard1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative rounded-[8px] shrink-0 size-[240px]" data-name="Blog post card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgBlogPostCard} />
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[240px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
    </div>
  );
}

function BlogPostCard2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 size-[240px]" data-name="Blog post card">
      <Image2 />
    </div>
  );
}

function Posts() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Posts">
      <BlogPostCard />
      <BlogPostCard1 />
      <BlogPostCard2 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-left">
          <path d={svgPaths.p11678e00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow() {
  return (
    <div
      className="box-border flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 cursor-pointer transition-colors hover:bg-gray-50"
      data-name="_Testiomonial carousel arrow"
      style={{ width: '48px', height: '48px', border: '1px solid #E9EAEB' }}
    >
      <ArrowLeft />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-left">
          <path d={svgPaths.p11678e00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow1() {
  return (
    <div
      className="box-border flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 cursor-pointer transition-colors hover:bg-gray-50"
      data-name="_Testiomonial carousel arrow"
      style={{ width: '48px', height: '48px', border: '1px solid #E9EAEB' }}
    >
      <ArrowRight />
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Arrows">
      <TestiomonialCarouselArrow />
      <TestiomonialCarouselArrow1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
      <Posts />
      <Arrows />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[48px] px-[16px] relative w-full">
          <HeadingAndSubheading />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[545px] isolate items-center overflow-clip relative shrink-0 w-[375px]" data-name="Hero header section">
      <DropdownHeaderNavigation2 />
      <Container2 />
    </div>
  );
}

function TextAndParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Text and paragraph">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[#181d27] w-full">Description</p>
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] w-full">
        <p className="mb-[16px]">Lorem ipsum dolor sit amet consectetur. Sed at interdum pellentesque egestas viverra. Gravida auctor eget mattis enim mi. Quis volutpat adipiscing quis ullamcorper tincidunt ac euismod consectetur aenean. Est dui natoque sed viverra at. Integer id gravida nascetur ut quis. Ut dapibus purus eget sagittis convallis. Leo quam scelerisque ligula lectus a. In sed sem ut at tellus at id. Accumsan mollis aliquet ipsum risus eu eu. Volutpat purus dignissim quis purus metus. Platea ipsum dis sit et phasellus in volutpat tempor.</p>
        <p>Nunc scelerisque tincidunt est nunc eu integer feugiat viverra. Non diam sed quisque justo.</p>
      </div>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#155eef] text-[14px] text-nowrap whitespace-pre">Read more</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <TextAndParagraph />
      <ButtonsButton />
    </div>
  );
}

function HeaderAndAbout() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header and about">
      <About />
    </div>
  );
}

function Compost24Dp434343Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="compost_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_34_46169)" id="compost_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p2cced800} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_46169">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Compost24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Serene Environment</p>
    </div>
  );
}

function LabelAndText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label and text">
      <ButtonsButton1 />
    </div>
  );
}

function Gate24DpE3E3E3Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gate_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gate_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p32e8b700} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Gate24DpE3E3E3Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Gate House</p>
    </div>
  );
}

function LabelAndText2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label and text">
      <ButtonsButton2 />
    </div>
  );
}

function Frame1000003783() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <LabelAndText1 />
      <LabelAndText2 />
    </div>
  );
}

function Fence24Dp434343Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="fence_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="fence_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p1354a0f0} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Fence24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] w-[135px]">Modern Perimeter Fencing</p>
    </div>
  );
}

function LabelAndText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label and text">
      <ButtonsButton3 />
    </div>
  );
}

function Water24Dp434343Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="water_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="water_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p2a07ba00} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Water24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] w-[135px]">Good Drainage System</p>
    </div>
  );
}

function LabelAndText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label and text">
      <ButtonsButton4 />
    </div>
  );
}

function Frame1000003786() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <LabelAndText3 />
      <LabelAndText4 />
    </div>
  );
}

function Landscape24Dp434343Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="landscape_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="landscape_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p316a9900} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Landscape24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">100% Dry Land</p>
    </div>
  );
}

function LabelAndText5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label and text">
      <ButtonsButton5 />
    </div>
  );
}

function Frame1000003787() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <LabelAndText5 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Purchase</p>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="bg-[#155eef] h-[48px] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Download Brochure</p>
    </div>
  );
}

function ButtonsButton7() {
  return (
    <div className="h-[48px] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[48px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame1000003792() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <ButtonsButton6 />
      <ButtonsButton7 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Details">
      <Frame1000003783 />
      <Frame1000003786 />
      <Frame1000003787 />
      <Frame1000003792 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
          <HeaderAndAbout />
          <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-full">Features</p>
          <Details1 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[64px] px-0 relative shrink-0 w-full" data-name="Section">
      <Container3 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">You might be intrested</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[4]" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function Dropdown() {
  return <div className="absolute content-stretch flex flex-col items-start right-0 top-0 z-[2]" data-name="Dropdown" />;
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full" data-name="Section header">
      <Content2 />
      <Dropdown />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#ecfdf3] bottom-[8px] box-border content-stretch flex gap-[2px] items-center left-[8px] pl-[6px] pr-[8px] py-[2px] rounded-[16px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#067647] text-[12px] text-center text-nowrap whitespace-pre">Available</p>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[208px] relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      <div className="h-[208px] overflow-clip relative rounded-[inherit] w-full">
        <Badge />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextAndCategory() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and category">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-full">Eden Court</p>
    </div>
  );
}

function TextAndButton() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text and button">
      <TextAndCategory />
    </div>
  );
}

function MarkerPin3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-02">
          <g id="Icon">
            <path d={svgPaths.p27e0c880} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p38d04800} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndIcon2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <MarkerPin3 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre">Ajebo, Ogun State</p>
    </div>
  );
}

function DetailsWrap1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Details wrap">
      <TextAndIcon2 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-between relative shrink-0 w-full" data-name="Details">
      <DetailsWrap1 />
    </div>
  );
}

function ChevronRightDouble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-right-double">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right-double">
          <path d={svgPaths.p3b57f380} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[13px] text-nowrap whitespace-pre">More Details</p>
      <ChevronRightDouble />
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating">
      <TextAndSupportingText1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndButton />
      <Details2 />
      <Rating />
    </div>
  );
}

function ListingSearchResultDesktop() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[360px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="_Listing search result desktop">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Image3 />
      <Content3 />
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Projects">
      {[...Array(3).keys()].map((_, i) => (
        <ListingSearchResultDesktop key={i} />
      ))}
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section">
      <SectionHeader />
      <Projects />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[64px] relative w-full">
          <Section1 />
        </div>
      </div>
    </div>
  );
}

function BlogPageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[6]" data-name="Blog page header">
      <HeroHeaderSection />
      <Section />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
        <g id="Container">
          <path clipRule="evenodd" d="M359 1H16V0H359V1Z" fill="var(--fill-0, #E9EAEB)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[5]" data-name="–––– Section divider ––––">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
        <g id="Container">
          <path clipRule="evenodd" d="M359 1H16V0H359V1Z" fill="var(--fill-0, #E9EAEB)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function SectionDivider1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[3]" data-name="–––– Section divider ––––">
      <Container6 />
    </div>
  );
}

function Group1000003697() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p2cbdef00} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p19f24700} fill="var(--fill-0, white)" id="Vector 1" />
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

function Content6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 />
    </div>
  );
}

function Frame1000003768() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content6 />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
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
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
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

function ButtonsButton10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
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

function ButtonsButton12() {
  return <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip shrink-0" data-name="Buttons/Button" />;
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton12 />
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

function Content7() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
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
          <Content8 />
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

function TextPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton13() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding2 />
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
      <ButtonsButton13 />
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

function Content9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container8 />
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

function Group3() {
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
      <Group3 />
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

function FooterLinks2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0">Terms</p>
      <p className="relative shrink-0">Privacy</p>
      <p className="relative shrink-0">Cookies</p>
    </div>
  );
}

function Frame1000003771() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
      <FooterLinks2 />
      <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container7 />
      <Frame1000003770 />
      <Container9 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <BlogPageHeader />
      <SectionDivider />
      <SectionDivider1 />
      <Footer />
    </div>
  );
}