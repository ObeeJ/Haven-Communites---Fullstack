import svgPaths from "./svg-wrggyxonhz";
import imgImage from "figma:asset/4f1ed71a8e5456f8b8cf9bc696ca9afe262f2ec0.png";

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

function ButtonCloseX() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[-523px] rounded-[8px] size-[44px] top-[24px]" data-name="Button close X">
      <XClose />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow h-[480px] min-h-px min-w-px relative shrink-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      <ButtonCloseX />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Stay in the know</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">sonoikijeremiah54@gmail.com</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <Content />
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
      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#535862] text-[0px] text-[14px] w-full">
        <span>{`We care about your data in our `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">privacy policy</span>.
      </p>
    </div>
  );
}

function ButtonsButtonLoadingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Buttons/Button loading icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Buttons/Button loading icon">
          <path d={svgPaths.p39161900} id="Background" opacity="0.3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4660fb4} id="Line" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
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

function ButtonsButton() {
  return (
    <div className="bg-[#155eef] min-h-[48px] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center min-h-inherit overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
        <ButtonsButtonLoadingIcon />
        <TextPadding />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[480px] relative shrink-0 w-full" data-name="Email capture">
      <InputField />
      <ButtonsButton />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start justify-center p-[64px] relative w-full">
          <HeadingAndSupportingText />
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-neutral-50 content-stretch flex items-center overflow-clip relative rounded-[24px] shrink-0 w-[1095px]" data-name="Content">
      <Image />
      <Content1 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center max-w-inherit size-full">
        <div className="box-border content-stretch flex items-center justify-center max-w-inherit px-[32px] py-0 relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="relative size-full" data-name="Modal">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[32px] relative size-full">
          <BackgroundOverlay1 />
          <Container />
        </div>
      </div>
    </div>
  );
}