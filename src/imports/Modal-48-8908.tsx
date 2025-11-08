import svgPaths from "./svg-l7qb5u6lfo";

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

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Get in Touch</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full">Provide contact details for a callback</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[20px] px-[16px] relative w-full">
          <TextAndSupportingText />
        </div>
      </div>
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

function ButtonsButtonCloseX() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[8px] size-[44px] top-[12px]" data-name="Buttons/Button close X">
      <XClose />
    </div>
  );
}

function PaddingBottom() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Padding bottom" />;
}

function ModalHeader() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_Modal header">
      <Content />
      <ButtonsButtonCloseX />
      <PaddingBottom />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">First Name</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter first name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content1 />
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

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
      <InputWithLabel />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Last Name</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter last name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
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

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Select">
      <InputWithLabel1 />
    </div>
  );
}

function LabelWrapper2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Email</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter email</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper2 />
      <Input2 />
    </div>
  );
}

function Select1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Select">
      <InputWithLabel2 />
    </div>
  );
}

function LabelWrapper3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Phone Number</p>
    </div>
  );
}

function Ng() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="NG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_10358)" id="NG">
          <path d={svgPaths.p25566600} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p229d0d80} fill="var(--fill-0, #6DA544)" id="Vector_2" />
            <path d={svgPaths.p248f9000} fill="var(--fill-0, #6DA544)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_10358">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Ng />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#b2b2b2] text-[16px] text-nowrap whitespace-pre">Enter phone number</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper3 />
      <Input3 />
    </div>
  );
}

function Select2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Select">
      <InputWithLabel3 />
    </div>
  );
}

function LabelWrapper4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Description</p>
    </div>
  );
}

function ResizeHandle() {
  return (
    <div className="absolute bottom-[6px] right-[6px] size-[12px]" data-name="Resize handle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Resize handle">
          <path d="M10 2L2 10" id="Vector" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" />
          <path d="M11 7L7 11" id="Vector_2" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Input4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[14px] py-[12px] relative size-full">
          <p className="basis-0 font-['Avenir:Regular',_sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#717680] text-[16px]">Write a brief description...</p>
          <ResizeHandle />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="Input with label">
      <LabelWrapper4 />
      <Input4 />
    </div>
  );
}

function TextareaInputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[152px] isolate items-start relative shrink-0 w-full" data-name="Textarea input field">
      <InputWithLabel4 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <InputField />
      <Select />
      <Select1 />
      <Select2 />
      <TextareaInputField />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center px-[16px] py-0 relative w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap whitespace-pre">Submit</p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-0 px-[16px] relative w-full">
          <ButtonsButton />
        </div>
      </div>
    </div>
  );
}

function ModalActions() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-0 relative shrink-0 w-full" data-name="_Modal actions">
      <Content6 />
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] shrink-0 w-full" data-name="Modal">
      <ModalHeader />
      <Content5 />
      <ModalActions />
    </div>
  );
}

export default function Modal1() {
  return (
    <div className="relative size-full" data-name="Modal">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end pb-[64px] pt-[16px] px-[16px] relative size-full">
          <BackgroundOverlay1 />
          <Modal />
        </div>
      </div>
    </div>
  );
}