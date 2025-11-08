import svgPaths from "./svg-2am5f2yyei";

function Group1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1 />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ContrastBorder() {
  return (
    <div className="absolute inset-0 opacity-[0.08] rounded-[200px]" data-name="Contrast border">
      <div aria-hidden="true" className="absolute border-[0.75px] border-black border-solid inset-0 pointer-events-none rounded-[200px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
      <button className="box-border content-stretch cursor-pointer flex flex-col items-start overflow-visible p-0 relative shrink-0" data-name="Dropdown">
        <div className="bg-[#f2f4f7] relative rounded-[200px] shrink-0 size-[40px]" data-name="Avatar">
          <ContrastBorder />
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-1/2 not-italic text-[#475467] text-[16px] text-center top-[calc(50%-12px)] translate-x-[-50%] w-[40px]">JS</p>
        </div>
      </button>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[76px]">
      <Content />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="log-out-03">
        <div className="absolute inset-[14.09%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.8%_-5.56%]" style={{ "--stroke-0": "rgba(232, 61, 61, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p4b81600} id="Icon" stroke="var(--stroke-0, #E83D3D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0" data-name="_Dropdown header navigation trigger">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] text-nowrap whitespace-pre">Admin</p>
        </div>
      </button>
      <button className="box-border content-stretch cursor-pointer flex flex-col items-center overflow-visible p-0 relative shrink-0" data-name="_Dropdown header navigation trigger">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] text-nowrap whitespace-pre">Blog</p>
        </div>
      </button>
      <Frame1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame2 />
      <Navigation />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Container">
      <Content1 />
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-[1440px]">
      <DropdownHeaderNavigation />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] not-italic relative shrink-0 text-[#00359e] text-[30px] w-full">Publish a blog</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[20px] items-start ml-0 mt-0 relative w-[1376px]" data-name="Page header">
      <Content2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <PageHeader />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
          <Group />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#475467] text-[14px] w-[min-content]">Publish a blog for your users</p>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header section">
      <Container1 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center pb-[48px] pt-[32px] px-0 relative shrink-0 w-full" data-name="Main">
      <HeaderSection />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Regular</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(102, 112, 133, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
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

function Icons() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[4px] items-start relative shrink-0" data-name="Icons">
      <button className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]" data-name="_WYSIWYG editor icon">
        <div className="absolute bottom-[31.25%] left-[34.38%] right-[32.03%] top-1/4" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d={svgPaths.pd251900} fill="var(--fill-0, #98A2B3)" id="Icon" />
          </svg>
        </div>
      </button>
      <button className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]" data-name="_WYSIWYG editor icon">
        <div className="absolute bottom-[31.25%] left-[31.25%] right-[31.25%] top-1/4" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p21c6dc00} fill="var(--fill-0, #98A2B3)" id="Icon" />
          </svg>
        </div>
      </button>
      <button className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]" data-name="_WYSIWYG editor icon">
        <div className="absolute inset-[34.38%_18.75%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
            <path d={svgPaths.pe305d80} fill="var(--fill-0, #98A2B3)" id="Icon" />
          </svg>
        </div>
      </button>
      <button className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]" data-name="_WYSIWYG editor icon">
        <div className="absolute inset-[26.56%_21.09%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
            <path d={svgPaths.p1598f00} fill="var(--fill-0, #98A2B3)" id="Icon" />
          </svg>
        </div>
      </button>
      <button className="block overflow-clip relative rounded-[6px] shrink-0 size-[32px]" data-name="_WYSIWYG editor icon">
        <div className="absolute bottom-1/4 left-[21.88%] right-[18.75%] top-1/4" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
            <path d={svgPaths.p10c2e00} fill="var(--fill-0, #98A2B3)" id="Icon" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#00359e] text-[14px] text-nowrap whitespace-pre">Click to upload</p>
      </div>
      <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">or drag and drop</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <Action />
      <p className="font-['Avenir:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-center w-full">SVG, PNG, JPG or GIF (max. 800x400px)</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]" data-name="upload-cloud-02">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
                <path d={svgPaths.p2822b520} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <TextAndSupportingText1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[640px]" data-name="Content">
      <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[200px] relative shrink-0 w-full" data-name="Section label">
        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Cover Photo</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="File upload">
        <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="_File upload base">
          <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[24px] py-[16px] relative w-full">
              <Content4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#98a2b3] text-[16px] text-nowrap">Enter title</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[640px]" data-name="Input with label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Blog Title</p>
      <Input1 />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start max-w-[640px] relative shrink-0 w-[640px]" data-name="Input field">
      <InputWithLabel1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[640px]" data-name="Content">
      <InputField />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[512px]" data-name="WYSIWYG toolbar">
        <button className="basis-0 box-border content-stretch cursor-pointer flex flex-col gap-[8px] grow items-start max-w-[240px] min-h-px min-w-px overflow-visible p-0 relative shrink-0" data-name="Input dropdown">
          <InputWithLabel />
        </button>
        <Icons />
      </div>
      <Content5 />
      <Content7 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <Content8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#98a2b3] text-[16px] text-nowrap whitespace-pre">Select</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content9 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]" style={{ "--stroke-0": "rgba(102, 112, 133, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Blog Category</p>
      <Input2 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[640px]" data-name="Content">
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start max-w-[640px] overflow-visible p-0 relative shrink-0 w-full" data-name="Input dropdown">
        <InputWithLabel2 />
      </button>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[250px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[250px] items-start px-[14px] py-[12px] relative w-full">
          <p className="basis-0 font-['Avenir:Regular',sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px]">Lorem ipsum dolor sit amet consectetur. Interdum arcu donec at lacus elementum et leo. Malesuada risus lobortis tristique sapien porttitor donec eros. Iaculis tortor faucibus ac mi condimentum sodales. Erat dapibus id quis dictum nulla in faucibus. Velit malesuada sagittis imperdiet eget quis. Placerat volutpat.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[154px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Short Description</p>
      <Input3 />
    </div>
  );
}

function TextareaInputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Textarea input field">
      <InputWithLabel3 />
    </div>
  );
}

function ToolbarAndTextInput() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[276px] items-start relative shrink-0 w-full" data-name="Toolbar and text input">
      <TextareaInputField />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[276px] items-start relative shrink-0 w-full" data-name="Content">
      <ToolbarAndTextInput />
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#00359e] text-[14px] text-nowrap whitespace-pre">Click to upload</p>
      </div>
      <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">or drag and drop</p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <Action1 />
      <p className="font-['Avenir:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-center w-full">SVG, PNG, JPG or GIF (max. 800x400px)</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="absolute left-[10px] overflow-clip size-[20px] top-[10px]" data-name="upload-cloud-02">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
                <path d={svgPaths.p2822b520} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <TextAndSupportingText2 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[640px]" data-name="Content">
      <div className="content-stretch flex flex-col items-start max-w-[280px] min-w-[200px] relative shrink-0 w-full" data-name="Section label">
        <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Upload</p>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="File upload">
        <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="_File upload base">
          <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-col items-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[4px] items-center px-[24px] py-[16px] relative w-full">
              <Content12 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[844px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[844px] items-start px-[14px] py-[12px] relative w-full">
          <p className="basis-0 font-['Avenir:Regular',sans-serif] grow h-full leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[16px]">Lorem ipsum dolor sit amet consectetur. Interdum arcu donec at lacus elementum et leo. Malesuada risus lobortis tristique sapien porttitor donec eros. Iaculis tortor faucibus ac mi condimentum sodales. Erat dapibus id quis dictum nulla in faucibus. Velit malesuada sagittis imperdiet eget quis. Placerat volutpat.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[154px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Write here</p>
      <Input4 />
    </div>
  );
}

function TextareaInputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Textarea input field">
      <InputWithLabel4 />
    </div>
  );
}

function ToolbarAndTextInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[276px] items-start relative shrink-0 w-full" data-name="Toolbar and text input">
      <TextareaInputField1 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[925px] items-start relative shrink-0 w-full" data-name="Content">
      <ToolbarAndTextInput1 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Preview</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#155eef] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full" data-name="Content">
      <Actions />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[640px] relative shrink-0 w-full" data-name="Section">
      <Form />
      <Content10 />
      <Content11 />
      <Content13 />
      <Content14 />
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Section footer">
        <Content15 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Section />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Section">
      <Container2 />
    </div>
  );
}

export default function Admin() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Admin">
      <Frame />
      <Main />
      <Section1 />
    </div>
  );
}