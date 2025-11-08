import svgPaths from "./svg-5lzinfg8le";

function Group() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.pc3bdb80} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[32px] relative shrink-0 text-[#181d27] text-[24px] w-full">Admin Login</p>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">Kindly enter the details below</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Header">
      <Frame />
      <TextAndSupportingText />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email Address</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">••••••••</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper />
      <Input />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Password</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">••••••••</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper1 />
      <Input1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <button className="box-border content-stretch flex flex-col gap-[6px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Input field">
        <InputWithLabel />
      </button>
      <button className="box-border content-stretch flex flex-col gap-[6px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Input field">
        <InputWithLabel1 />
      </button>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Login</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Form />
      <div className="bg-[#155eef] relative rounded-[8px] shrink-0 w-full" data-name="Buttons/Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
            <TextPadding />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[16px] py-0 relative w-full">
          <Header />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

export default function ForgotPassword() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center px-0 py-[48px] relative size-full" data-name="Forgot password">
      <Container />
    </div>
  );
}