import svgPaths from "./svg-200r3l9sdk";
import imgImage from "figma:asset/2e216a667b6c8f15de9b963a967f9c53aaac940e.png";
import imgBlogPostCard from "figma:asset/ded0a5ed5bfb07fb361f264ea0c88b184e32a36a.png";
import imgImage1 from "figma:asset/43c7799234d275b8b57ca1b26235659d44d23dba.png";
import imgImage2 from "figma:asset/1df45d321d94faf7238fbcae0c4f616df9019203.png";
import Logo from "../components/Logo";

function Group1000003696() {
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

function Frame1000003793() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">About Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton2 />
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Projects</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton3 />
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton4 />
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Blog</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger />
      <DropdownHeaderNavigationTrigger1 />
      <DropdownHeaderNavigationTrigger2 />
      <ButtonsButton5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Logo />
      <Navigation1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Container">
      <Content2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 />
    </div>
  );
}

function DropdownHeaderNavigation1() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Header1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[112px] items-start left-0 right-0 top-0">
      <DropdownHeaderNavigation1 />
    </div>
  );
}

function DropdownHeaderNavigation2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full">
      <DropdownHeaderNavigation2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-[1440px] z-[2]">
      <Frame4 />
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
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre">Ogun State</p>
    </div>
  );
}

function Frame1000003781() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1152px]">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#181d27] text-[36px] w-[861px]">Eden Court</p>
      <TextAndIcon />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[579px] items-start min-w-[320px] relative shrink-0 w-[846px]" data-name="Blog post card">
      <Image />
    </div>
  );
}

function Image1() {
  return <div className="h-[274px] rounded-[16px] shrink-0 w-[273px]" data-name="Image" />;
}

function BlogPostCard1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 size-[274px]" data-name="Blog post card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlogPostCard} />
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[274px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function BlogPostCard2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] h-[274px] items-start relative shrink-0" data-name="Blog post card">
      <Image2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[579px] items-start justify-center relative shrink-0" data-name="Column">
      <BlogPostCard1 />
      <BlogPostCard2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1152px]" data-name="Content">
      <BlogPostCard />
      <Column />
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Frame1000003781 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative shrink-0 w-full z-[1]" data-name="Section">
      <Container2 />
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[844px] isolate items-center overflow-clip relative shrink-0 w-[1440px]" data-name="Hero header section">
      <Frame5 />
      <Section />
    </div>
  );
}

function TextAndParagraph() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Text and paragraph">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[#181d27] w-full">Description</p>
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] w-full">
        <p className="mb-[16px]">Lorem ipsum dolor sit amet consectetur. Elementum aliquet consequat vulputate condimentum dui in sit velit. Tellus euismod egestas amet at erat placerat adipiscing. Eget in adipiscing aenean viverra tempus. Amet sed lectus id ut. Volutpat commodo non mauris egestas volutpat purus quam. Dictum tellus massa felis congue potenti. Ac quam scelerisque rutrum dui suspendisse in tincidunt hendrerit odio.</p>
        <p>Id odio cursus vulputate fermentum vitae neque pretium. Odio varius in bibendum pulvinar enim imperdiet consequat. Sed urna pulvinar morbi ullamcorper. Lectus magna.</p>
      </div>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#155eef] text-[14px] text-nowrap whitespace-pre">Read more</p>
    </div>
  );
}

function About() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start max-w-[640px] min-h-px min-w-[480px] relative shrink-0" data-name="About">
      <TextAndParagraph />
      <ButtonsButton6 />
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

function ButtonsButton7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Gate24DpE3E3E3Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Gate House</p>
    </div>
  );
}

function LabelAndText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Label and text">
      <ButtonsButton7 />
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

function ButtonsButton8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Fence24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Modern Perimeter Fencing</p>
    </div>
  );
}

function LabelAndText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Label and text">
      <ButtonsButton8 />
    </div>
  );
}

function Frame1000003782() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <LabelAndText />
      <LabelAndText1 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start max-w-[400px] min-w-[400px] relative shrink-0 w-full" data-name="Details">
      <Frame1000003782 />
    </div>
  );
}

function Compost24Dp434343Fill1Wght400Grad0Opsz242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="compost_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_34_46207)" id="compost_24dp_434343_FILL1_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p2cced800} fill="var(--fill-0, #155EEF)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_46207">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Compost24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Serene Enviroment</p>
    </div>
  );
}

function LabelAndText2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Label and text">
      <ButtonsButton9 />
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

function ButtonsButton10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Water24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">Good Drainage System</p>
    </div>
  );
}

function LabelAndText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Label and text">
      <ButtonsButton10 />
    </div>
  );
}

function Frame1000003783() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <LabelAndText2 />
      <LabelAndText3 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start max-w-[400px] min-w-[400px] relative shrink-0 w-full" data-name="Details">
      <Frame1000003783 />
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

function ButtonsButton11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <Landscape24Dp434343Fill1Wght400Grad0Opsz242 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] text-nowrap whitespace-pre">100% Dry Land</p>
    </div>
  );
}

function LabelAndText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-[160px] relative shrink-0" data-name="Label and text">
      <ButtonsButton11 />
    </div>
  );
}

function Frame1000003784() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <LabelAndText4 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start max-w-[400px] min-w-[400px] relative shrink-0 w-full" data-name="Details">
      <Frame1000003784 />
    </div>
  );
}

function TextAndParagraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text and paragraph">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-full">Features</p>
      <Details />
      <Details1 />
      <Details2 />
    </div>
  );
}

function TextPadding7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Purchase</p>
    </div>
  );
}

function ButtonsButton12() {
  return (
    <div className="bg-[#155eef] h-[48px] relative rounded-[234px] shrink-0 w-[224px]" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] h-[48px] items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit] w-[224px]">
        <TextPadding7 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextPadding8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Download Brochure</p>
    </div>
  );
}

function ButtonsButton13() {
  return (
    <div className="h-[48px] relative rounded-[234px] shrink-0 w-[224px]" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] h-[48px] items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit] w-[224px]">
        <TextPadding8 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame1000003791() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <ButtonsButton12 />
      <ButtonsButton13 />
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[400px]" data-name="About">
      <TextAndParagraph1 />
      <Frame1000003791 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-start flex flex-wrap gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <About />
      <About1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Container3 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">You might be intrested</p>
    </div>
  );
}

function DotsVertical1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="dots-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dots-vertical">
          <g id="Icon">
            <path d={svgPaths.p39a1e780} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p11974af0} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p133c1580} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Dropdown">
      <DotsVertical1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[3]" data-name="Content">
      <TextAndSupportingText1 />
      <Dropdown1 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full" data-name="Section header">
      <Content6 />
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

function TextAndIcon1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <MarkerPin3 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre">Ajebo, Ogun State</p>
    </div>
  );
}

function DetailsWrap() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Details wrap">
      <TextAndIcon1 />
    </div>
  );
}

function Details3() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-between relative shrink-0 w-full" data-name="Details">
      <DetailsWrap />
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

function TextAndSupportingText2() {
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
      <TextAndSupportingText2 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndButton />
      <Details3 />
      <Rating />
    </div>
  );
}

function ListingSearchResultDesktop() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[360px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="_Listing search result desktop">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Image3 />
      <Content7 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      {[...Array(3).keys()].map((_, i) => (
        <ListingSearchResultDesktop key={i} />
      ))}
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[32px] py-0 relative w-full">
          <SectionHeader1 />
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Container4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative shrink-0 w-full" data-name="Section">
      <Container5 />
    </div>
  );
}

function BlogPageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[6]" data-name="Blog page header">
      <HeroHeaderSection />
      <Section3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-px relative shrink-0 w-[1280px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
        <g id="Container">
          <path clipRule="evenodd" d="M1248 1H32V0H1248V1Z" fill="var(--fill-0, #E9EAEB)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[5]" data-name="–––– Section divider ––––">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-px relative shrink-0 w-[1280px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
        <g id="Container">
          <path clipRule="evenodd" d="M1248 1H32V0H1248V1Z" fill="var(--fill-0, #E9EAEB)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function SectionDivider1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[3]" data-name="–––– Section divider ––––">
      <Container7 />
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

function ButtonsButton14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton14 />
    </div>
  );
}

function ButtonsButton15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton15 />
    </div>
  );
}

function ButtonsButton16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton16 />
    </div>
  );
}

function ButtonsButton17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton17 />
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

function Content12() {
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
          <Content12 />
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

function TextPadding9() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton18() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <TextPadding9 />
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
      <ButtonsButton18 />
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

function Content13() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <LogoAndLinks />
      <Frame1000003769 />
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content13 />
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

function Content14() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
      <FooterLinks1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[48px] pt-[64px] px-0 relative shrink-0 w-[1440px] z-[1]" data-name="Footer">
      <Container8 />
      <Container9 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
      <BlogPageHeader />
      <SectionDivider />
      <SectionDivider1 />
      <Footer />
    </div>
  );
}