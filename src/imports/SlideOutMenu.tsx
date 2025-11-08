import svgPaths from "./svg-b3u1t5ois5";
import logoImage from "figma:asset/3eada838a8a55b948f7379c648ac717c0e7f47c9.png";

function Frame1000003793() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <img 
        src={logoImage} 
        alt="Haven Communities" 
        className="h-auto w-[78.75px] brightness-0 saturate-100" 
        style={{ filter: 'invert(40%) sepia(96%) saturate(2748%) hue-rotate(204deg) brightness(96%) contrast(91%)' }}
      />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <Frame1000003793 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[16px] grow items-start min-h-px min-w-px pb-0 pt-[24px] px-0 relative shrink-0" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function XClose() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="x-close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="x-close">
          <path d="M15 5L5 15M5 5L15 15" id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCloseX() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[10px] right-[16px] rounded-[8px] top-[12px]" data-name="Button close X">
      <XClose />
    </div>
  );
}

function SlideOutMenuHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="_Slide out menu header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[16px] py-0 relative w-full">
          <Content />
          <ButtonCloseX />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344054] text-[16px] text-nowrap whitespace-pre">About Us</p>
    </div>
  );
}

function NavItemBase() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344054] text-[16px] text-nowrap whitespace-pre">Projects</p>
    </div>
  );
}

function NavItemBase1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344054] text-[16px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function NavItemBase2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344054] text-[16px] text-nowrap whitespace-pre">Blog</p>
    </div>
  );
}

function NavItemBase3() {
  return (
    <div className="bg-[rgba(239,244,255,0)] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[16px] py-0 relative w-full">
          <NavItemBase />
          <NavItemBase1 />
          <NavItemBase2 />
          <NavItemBase3 />
        </div>
      </div>
    </div>
  );
}

function Panel() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[24px] grow h-full items-center min-h-px min-w-px overflow-clip relative shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] shrink-0" data-name="Panel">
      <SlideOutMenuHeader />
      <Navigation />
    </div>
  );
}

export default function SlideOutMenu() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[rgba(0,53,158,0.1)] relative size-full" data-name="Slide out menu">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[23px] pr-0 py-0 relative size-full">
          <Panel />
        </div>
      </div>
    </div>
  );
}