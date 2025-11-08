import svgPaths from "./svg-li38j8ic3n";

function Group() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p13c6a600} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p3704b580} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px]">
      <Group />
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[18px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[6.188px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
          <Frame1 />
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Nav menu button">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu-01">
              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Icon">
                <div className="absolute inset-[-8.33%_-5.56%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
                    <path d="M1 7H19M1 1H19M1 13H19" id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation />
    </div>
  );
}

function DropdownHeaderNavigation1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Frame />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">Track and manage your users</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Page header">
            <Content />
          </div>
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

function FeaturedIcon() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border border-[#d1e0ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Users />
    </div>
  );
}

function NumberAndBadge() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">2,420</p>
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Total number of users</p>
      <NumberAndBadge />
    </div>
  );
}

function MetricItem() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Metric item">
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

function Building() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="building-07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="building-07">
          <path d={svgPaths.p12238580} id="Icon" stroke="var(--stroke-0, #039855)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-[#ecfdf3] relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div aria-hidden="true" className="absolute border border-[#d1fadf] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Building />
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[#155eef] text-[36px] tracking-[-0.72px]">37</p>
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] w-full">Total number of properties</p>
      <NumberAndBadge1 />
    </div>
  );
}

function MetricItem1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Metric item">
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
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[343px]" data-name="Metric group">
      <MetricItem />
      <MetricItem1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[32px] py-0 relative shrink-0 w-[375px]" data-name="Container">
      <MetricGroup />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Profile</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content1 />
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

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Horizontal tabs">
            <button className="basis-0 box-border content-stretch cursor-pointer flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-visible p-0 relative shrink-0" data-name="Input dropdown">
              <InputWithLabel />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header section">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function HeaderSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header section">
      <HeaderSection />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#101828] text-[18px] w-full">Newsletter</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-[187px]">Manage your Newsletter</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Section header">
      <Content2 />
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
        <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
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
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-nowrap whitespace-pre">Email</p>
          </div>
        </div>
      </div>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">Johndoe@gmail.com</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[72px] items-center px-[24px] py-[16px] relative shrink-0 w-[343px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Checkbox />
      <TextAndSupportingText2 />
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <TableHeaderCell />
      {[...Array(8).keys()].map((_, i) => (
        <TableCell key={i} />
      ))}
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Content3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
          <SectionHeader />
          <Table />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Container4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Section />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Section">
      <Section1 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#fcfcfd] box-border content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[32px] px-0 relative shrink-0 w-full" data-name="Main">
      <HeaderSection1 />
      <Section2 />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#fcfcfd] content-stretch flex flex-col items-start relative size-full" data-name="Mobile">
      <DropdownHeaderNavigation1 />
      <Main />
    </div>
  );
}