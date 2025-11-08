import svgPaths from "./svg-qa67v6dgjd";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgImage from "figma:asset/69c2d48ba81567d28893e15cd0baf517c39f52ee.png";
import imgImage1 from "figma:asset/12e57dc8c26ffbd65d754a3814aa245e717c32a7.png";
import imgImage2 from "figma:asset/e2d07def1dbd591c5182a37dfedc9ff110ae94d9.png";
import imgImage3 from "figma:asset/0f4f2fcb6049962790ac0a2810925489622b792c.png";
import imgImage4 from "figma:asset/9f4ea61beb99ae8c2da093d59eccf06f640e117f.png";
import imgImage5 from "figma:asset/ec3b79fff1564d645f4f2bda89407b5d61d9afd9.png";

function Group1000003696() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p36958300} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.pdb80000} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px] cursor-pointer" onClick={onClick}>
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[6.188px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu-01">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Container1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
          <Frame1000003793 onClick={() => onNavigate?.('home')} />
          <NavMenuButton1 />
        </div>
      </div>
    </div>
  );
}

function Header1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame1000003772({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]" data-name="Dropdown header navigation">
      <Frame1000003772 onNavigate={onNavigate} />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Resource library</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-white w-full">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
    </div>
  );
}

function Content1() {
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
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <Content1 />
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
      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[0px] text-[14px] text-white w-full">
        <span>{`We care about your data in our `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">privacy policy</span>.
      </p>
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
    <div className="bg-[#155eef] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding />
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
      <ButtonsButton />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[45px] translate-x-[-50%] w-[343px]" data-name="Content">
      <HeadingAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function Frame1000003773() {
  return (
    <div className="h-[404px] relative shrink-0 w-[375px] z-[1]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[404px] left-0 top-0 w-[375px]" />
      <Content2 />
    </div>
  );
}

function HeroHeaderSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-stretch flex flex-col h-[476px] isolate items-center overflow-clip relative shrink-0 w-[375px]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <DropdownHeaderNavigation2 onNavigate={onNavigate} />
      <Frame1000003773 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] text-nowrap whitespace-pre">View all</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function Select() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Select">
      <InputWithLabel1 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Horizontal tabs">
      <Select />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Olivia Rhye</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">20 Jan 2025</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Homes</p>
    </div>
  );
}

function AttributionCard() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard />
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      <BottomPanel />
    </div>
  );
}

function HeadingAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Sed sollicitudin cras pellentesque aliquam in cursus.</p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText />
      <ButtonsButton1 />
    </div>
  );
}

function BlogPostCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Blog post card" onClick={onClick}>
      <Image />
      <Content5 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Phoenix Baker</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">19 Jan 2025</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Construction</p>
    </div>
  );
}

function AttributionCard1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel1() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      <BottomPanel1 />
    </div>
  );
}

function HeadingAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Ac neque fusce congue in et sed tortor nunc.</p>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText1 />
      <ButtonsButton2 />
    </div>
  );
}

function BlogPostCard1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Blog post card" onClick={onClick}>
      <Image1 />
      <Content7 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Lana Steiner</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">18 Jan 2025</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText2 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Homes</p>
    </div>
  );
}

function AttributionCard2() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel2() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      <BottomPanel2 />
    </div>
  );
}

function HeadingAndText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Quam velit eleifend praesent vitae hac eget vulputate.</p>
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight2 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText2 />
      <ButtonsButton3 />
    </div>
  );
}

function BlogPostCard2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Blog post card" onClick={onClick}>
      <Image2 />
      <Content9 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Alec Whitten</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">17 Jan 2025</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText3 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Investment</p>
    </div>
  );
}

function AttributionCard3() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel3() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      <BottomPanel3 />
    </div>
  );
}

function HeadingAndText3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Purus risus leo dis enim sagittis orci pellentesque ut.</p>
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText3 />
      <ButtonsButton4 />
    </div>
  );
}

function BlogPostCard3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Blog post card" onClick={onClick}>
      <Image3 />
      <Content11 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Demi Wilkinson</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">16 Jan 2025</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText4 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard4() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel4() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard4 />
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage4} />
      <BottomPanel4 />
    </div>
  );
}

function HeadingAndText4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Volutpat in donec nullam ante nisl massa fusce.</p>
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight4 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText4 />
      <ButtonsButton5 />
    </div>
  );
}

function BlogPostCard4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Blog post card" onClick={onClick}>
      <Image4 />
      <Content13 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Candice Wu</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">15 Jan 2025</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText5 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard5() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel5() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard5 />
    </div>
  );
}

function Image5() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage5} />
      <BottomPanel5 />
    </div>
  );
}

function HeadingAndText5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Ultrices integer pharetra sodales blandit tellus.</p>
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-up-right">
          <path d={svgPaths.p32dd8280} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight5 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText5 />
      <ButtonsButton6 />
    </div>
  );
}

function BlogPostCard5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Blog post card">
      <Image5 />
      <Content15 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <BlogPostCard />
      <BlogPostCard1 />
      <BlogPostCard2 />
      <BlogPostCard3 />
      <BlogPostCard4 />
      <BlogPostCard5 />
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

function ButtonsButton7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <ArrowLeft />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
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

function ButtonsButton8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <ArrowRight />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Pagination() {
  return (
    <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <ButtonsButton7 />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Page 1 of 10</p>
      <ButtonsButton8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center px-[16px] py-0 relative w-full">
          <HorizontalTabs />
          <Content16 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center px-0 py-[64px] relative shrink-0 w-full" data-name="Section">
      <Container2 />
    </div>
  );
}

function BlogPageHeader({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[6]" data-name="Blog page header">
      <HeroHeaderSection onNavigate={onNavigate} />
      <Section />
    </div>
  );
}

function Container3() {
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
      <Container3 />
    </div>
  );
}

function Container4() {
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
      <Container4 />
    </div>
  );
}

function Group1000003697() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p36958300} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.pdb80000} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003794({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px] cursor-pointer" onClick={onClick}>
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[6.188px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Content17({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 onClick={() => onNavigate?.('home')} />
    </div>
  );
}

function Frame1000003768({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content17 onNavigate={onNavigate} />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
    </div>
  );
}

function ButtonsButton9({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton9 onClick={onClick} />
    </div>
  );
}

function ButtonsButton10({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton10 onClick={onClick} />
    </div>
  );
}

function FooterLinks({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink onClick={() => onNavigate?.('about')} />
      <FooterLink1 onClick={() => onNavigate?.('contact')} />
    </div>
  );
}

function FooterLinksColumn({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks onNavigate={onNavigate} />
    </div>
  );
}

function ButtonsButton11({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton11 onClick={onClick} />
    </div>
  );
}

function ButtonsButton12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton12 />
    </div>
  );
}

function ButtonsButton13() {
  return <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip shrink-0" data-name="Buttons/Button" />;
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton13 />
    </div>
  );
}

function FooterLinks1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink2 onClick={() => onNavigate?.('projects')} />
      <FooterLink3 />
      <FooterLink4 />
    </div>
  );
}

function FooterLinksColumn1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[60px] items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks1 onNavigate={onNavigate} />
    </div>
  );
}

function Content18({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn onNavigate={onNavigate} />
      <FooterLinksColumn1 onNavigate={onNavigate} />
    </div>
  );
}

function Container5({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 onNavigate={onNavigate} />
          <Content18 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter your email</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input2 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
      <InputWithLabel2 />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton14() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField1 />
      <ButtonsButton14 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Newsletter">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
      <EmailCapture1 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content20 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container6 />
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

function FooterLinks2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('termsOfService')}>Terms</p>
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('privacyPolicy')}>Privacy</p>
      <p className="relative shrink-0 cursor-pointer hover:underline" onClick={() => onNavigate?.('cookiesPolicy')}>Cookies</p>
    </div>
  );
}

function Frame1000003771({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
      <FooterLinks2 onNavigate={onNavigate} />
      <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
    </div>
  );
}

function Content21({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 onNavigate={onNavigate} />
    </div>
  );
}

function Container7({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content21 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container5 onNavigate={onNavigate} />
      <Frame1000003770 />
      <Container7 onNavigate={onNavigate} />
    </div>
  );
}

export default function Mobile({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <BlogPageHeader onNavigate={onNavigate} />
      <SectionDivider />
      <SectionDivider1 />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}