import svgPaths from "./svg-hm4bcg2fuh";

function Group() {
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
      <Group />
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
      <p className="font-['Avenir:Heavy',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#155eef] text-[30px] w-full">Admin</p>
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

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Page header">
            <Content2 />
          </div>
          <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Track and manage your Users</p>
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

function Users1() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="users-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="users-01">
          <path d={svgPaths.p3dbade00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Users1 />
    </div>
  );
}

function ChangeAndText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Change and text">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[16.667px]" data-name="trend-up-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]" style={{ "--stroke-0": "rgba(23, 178, 106, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                <path d={svgPaths.pffdf00} id="Icon" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center text-nowrap whitespace-pre">20%</p>
      </div>
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">vs last month</p>
    </div>
  );
}

function NumberAndBadge() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="basis-0 font-['Avenir:Heavy',sans-serif] grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">2,420</p>
      <ChangeAndText />
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Newsletter count</p>
      <NumberAndBadge />
    </div>
  );
}

function MetricItem() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Metric item">
      <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <FeaturedIcon />
          <HeadingAndNumber />
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="users-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="users-01">
          <path d={svgPaths.p3dbade00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Users />
    </div>
  );
}

function ChangeAndText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Change and text">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="_Change">
        <div className="overflow-clip relative shrink-0 size-[16.667px]" data-name="trend-up-01">
          <div className="absolute inset-[29.17%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-12%_-6%]" style={{ "--stroke-0": "rgba(23, 178, 106, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                <path d={svgPaths.pffdf00} id="Icon" stroke="var(--stroke-0, #17B26A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#067647] text-[14px] text-center text-nowrap whitespace-pre">20%</p>
      </div>
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">vs last month</p>
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="basis-0 font-['Avenir:Heavy',sans-serif] grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">2,420</p>
      <ChangeAndText1 />
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Get in Touch count</p>
      <NumberAndBadge1 />
    </div>
  );
}

function MetricItem1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Metric item">
      <div aria-hidden="true" className="absolute border border-[#00359e] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <FeaturedIcon1 />
          <HeadingAndNumber1 />
        </div>
      </div>
    </div>
  );
}

function MetricGroup() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Metric group">
      <MetricItem />
      <MetricItem1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
          <MetricGroup />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Section">
      <Container2 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[10px] shrink-0 w-[1312px]" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="basis-0 grow h-[36px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] text-nowrap whitespace-pre">Newsletter</p>
          </div>
        </div>
      </div>
      <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px not-italic relative self-stretch shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#101828] text-[18px] w-full">Get in Touch</p>
      <p className="font-['Avenir:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Manage your enquiries</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-[#155eef] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="download-02">
            <div className="absolute inset-[12.5%]" data-name="Icon">
              <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path d={svgPaths.p1d790970} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Download all</p>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText1 />
      <Actions />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search-lg">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.56%]" style={{ "--stroke-0": "rgba(102, 112, 133, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p3190da80} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#667085] text-[16px] text-nowrap whitespace-pre">Search</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Search for user</p>
      <Input />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Filters">
      <button className="box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start overflow-visible p-0 relative shrink-0 w-[360px]" data-name="Input dropdown">
        <InputWithLabel />
      </button>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end justify-between p-[20px] relative w-full">
          <Filters />
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(52,64,84,0)] text-nowrap whitespace-pre">Clear all</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="content-stretch flex flex-col h-[110px] items-start relative shrink-0 w-full" data-name="Filters bar">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none" />
      <Content5 />
    </div>
  );
}

function CheckboxBase() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox />
          <TextAndSupportingText2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[6px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase1 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox1 />
          <TextAndSupportingText3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[6px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase2 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox2 />
          <TextAndSupportingText4 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[6px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">4</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase3 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox3 />
          <TextAndSupportingText5 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[6px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">5</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase4 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox4 />
          <TextAndSupportingText6 />
        </div>
      </div>
    </div>
  );
}

function CheckboxBase5() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div className="overflow-clip relative rounded-[inherit] size-[20px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[6px] not-italic text-[#475467] text-[12px] top-0 w-[7px]">6</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase5 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">John</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <Checkbox5 />
          <TextAndSupportingText7 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
              <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">First Name</p>
            </div>
          </div>
        </div>
      </div>
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      {[...Array(2).keys()].map((_, i) => (
        <TableCell5 key={i} />
      ))}
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">Doe</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <TextAndSupportingText8 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
              <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Last Name</p>
            </div>
          </div>
        </div>
      </div>
      {[...Array(7).keys()].map((_, i) => (
        <TableCell6 key={i} />
      ))}
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]" data-name="Column">
      <TableHeaderCell />
      {[...Array(7).keys()].map((_, i) => (
        <TableCell7 key={i} />
      ))}
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Phone Number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">08036271937</p>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]" data-name="Column">
      <TableHeaderCell1 />
      {[...Array(7).keys()].map((_, i) => (
        <TableCell8 key={i} />
      ))}
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[44px] items-center px-[24px] py-[12px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
            <p className="font-['Avenir:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[72px] items-center px-[24px] py-[16px] relative w-full">
          <p className="font-['Avenir:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-[354px]">Lorem ipsum dolor sit amet consectetur. Sagittis tortor eget ipsum pellentesque et libero suscipit. Purus at tortor purus id.</p>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[402px]" data-name="Column">
      <TableHeaderCell2 />
      {[...Array(7).keys()].map((_, i) => (
        <TableCell9 key={i} />
      ))}
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Previous</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Next</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <FiltersBar />
        <Content6 />
        <div className="relative shrink-0 w-full" data-name="Pagination">
          <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center justify-between pb-[16px] pt-[12px] px-[24px] relative w-full">
              <p className="font-['Avenir:Heavy',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">Page 1 of 10</p>
              <Actions1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[32px] py-0 relative w-full">
          <Table1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[791px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[791px] items-center px-[32px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1312px]" data-name="Section header">
            <Content3 />
          </div>
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[791px] items-center relative shrink-0 w-full" data-name="Section">
      <Container4 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[32px] grow h-[875px] items-center min-h-px min-w-px pb-[48px] pt-[32px] px-0 relative shrink-0" data-name="Main">
      <HorizontalTabs />
      <Section1 />
    </div>
  );
}

function Admin() {
  return (
    <div className="bg-white content-stretch flex h-[875px] items-start relative shrink-0 w-[1440px]" data-name="Admin">
      <Main />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[906px] items-center relative shrink-0 w-[1440px]" data-name="Section">
      <Admin />
    </div>
  );
}

function Main1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[32px] grow h-[1380px] items-center min-h-px min-w-px pb-[48px] pt-0 px-0 relative shrink-0" data-name="Main">
      <Frame />
      <HeaderSection />
      <Section />
      <Section2 />
    </div>
  );
}

export default function Admin1() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Admin">
      <Main1 />
    </div>
  );
}