import svgPaths from "./svg-kv5gapzqv5";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgPegmanOffscreen2X from "figma:asset/747a27fe416ebfaf57b25beae190a98036e77d0e.png";
import imgMap from "figma:asset/c2430bbeaa73c25f6f67e194305a665dd478e3a7.png";

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
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Contact Us</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-white w-full">{`We're a customer-focused real estate company dedicated to streamlining every step of your property pursuit. Reach out to us on our various communication channels.`}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[276px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[276px] items-center left-1/2 top-[64px] translate-x-[-50%] w-[343px]" data-name="Content">
      <Content1 />
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

function HeroHeaderSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col h-[412px] isolate items-center overflow-clip relative shrink-0 w-[375px] z-[5]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <DropdownHeaderNavigation2 onNavigate={onNavigate} />
      <Frame1000003773 />
    </div>
  );
}

function HeadingAndSubheading1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">How can we assist you</p>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading1 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">Choose your preferred method to connect with our Customer Service team</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <HeadingAndSupportingText1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-full" data-name="Header section">
      <Container2 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">Chat to sales</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Connect with us via Whatsapp, it’s fast, convenient and efficient.</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Chat Now</p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ContactText() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="_Contact text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start p-[24px] relative w-full">
          <Content4 />
          <ButtonsButton />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">Call</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Reach out to our customer support team 24/7.</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Call</p>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ContactText1() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="_Contact text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start p-[24px] relative w-full">
          <Content5 />
          <ButtonsButton1 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">Email</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText2 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-[304px]">Send us an email at contact@pishon.com. We will get back to you shortly.</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Send Email</p>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ContactText2() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="_Contact text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start p-[24px] relative w-full">
          <Content6 />
          <ButtonsButton2 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">Schedule an Inspection</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText3 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Prefer an inspection on the property? Book an appointment.</p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Book Now</p>
    </div>
  );
}

function ButtonsButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[#155eef] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ContactText3({ onBookNow }: { onBookNow?: () => void }) {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="_Contact text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start p-[24px] relative w-full">
          <Content7 />
          <ButtonsButton3 onClick={onBookNow} />
        </div>
      </div>
    </div>
  );
}

function Content8({ onBookNow }: { onBookNow?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <ContactText />
      <ContactText1 />
      <ContactText2 />
      <ContactText3 onBookNow={onBookNow} />
    </div>
  );
}

function Container3({ onBookNow }: { onBookNow?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Content8 onBookNow={onBookNow} />
        </div>
      </div>
    </div>
  );
}

function Section({ onBookNow }: { onBookNow?: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <Container3 onBookNow={onBookNow} />
    </div>
  );
}

function ContactPageHeader({ onBookNow }: { onBookNow?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[4]" data-name="Contact page header">
      <HeaderSection />
      <Section onBookNow={onBookNow} />
    </div>
  );
}

function HeadingAndSubheading2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#181d27] text-[30px] w-full">Our locations</p>
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading2 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">Come visit our friendly team at one of our offices.</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText2 />
    </div>
  );
}

function Container4() {
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

function MarkerPin02() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="marker-pin-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-02">
          <g id="Icon">
            <path d={svgPaths.p23f68600} stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p33359d00} stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[40px]">
        <MarkerPin02 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Melbourne</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">No 4, Ewang extension, Road 1, Idi-Aba, Abeokuta, Ogun State.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText4 />
    </div>
  );
}

function ContactText4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="_Contact text">
      <FeaturedIcon />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Content">
      <ContactText4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[48px] items-start mb-[-64px] pb-[112px] pt-[64px] px-0 relative shrink-0 w-full" data-name="Section">
      <Container4 />
      <Container5 />
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="absolute bottom-0 h-[26px] left-0 w-[66px]" data-name="Google logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 26">
        <g id="Google logo">
          <path d={svgPaths.p16b80780} fill="var(--fill-0, #EA4335)" id="Vector" />
          <path d={svgPaths.p3760ab80} fill="var(--fill-0, #FBBC05)" id="Vector_2" />
          <path d={svgPaths.pce1dd00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
          <path d={svgPaths.p1504a100} fill="var(--fill-0, #34A853)" id="Vector_4" />
          <path d={svgPaths.p11831e00} fill="var(--fill-0, #EA4335)" id="Vector_5" />
          <path d={svgPaths.p26fa8680} fill="var(--fill-0, #4285F4)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Logos() {
  return (
    <div className="absolute bottom-[2px] h-[26px] left-[6px] w-[66px]" data-name="Logos">
      <GoogleLogo />
    </div>
  );
}

function StreetViewButton() {
  return (
    <div className="absolute right-[8px] size-[28px] top-[69px]" data-name="Street view button">
      <div className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" data-name="Rectangle" />
      <div className="absolute inset-[14.29%_28.57%]" data-name="pegman-offscreen-2x">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPegmanOffscreen2X} />
      </div>
    </div>
  );
}

function ZoomControlButtons() {
  return (
    <div className="absolute h-[53px] right-[8px] top-[8px] w-[28px]" data-name="Zoom control buttons">
      <div className="absolute inset-[-3.77%_-10.71%_-7.55%_-10.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 59">
          <g id="Zoom control buttons">
            <g filter="url(#filter0_d_34_20610)" id="Rectangle">
              <path d={svgPaths.p3f22fd00} fill="var(--fill-0, white)" />
            </g>
            <path d={svgPaths.p3c095000} fill="var(--fill-0, black)" fillOpacity="0.5" id="Union" />
            <path d="M22 43H12V41H22V43Z" fill="var(--fill-0, black)" fillOpacity="0.5" id="Union_2" />
            <rect fill="var(--fill-0, black)" fillOpacity="0.1" height="1" id="Rectangle 2" width="20" x="7" y="28" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="59" id="filter0_d_34_20610" width="34" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_34_20610" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_34_20610" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MapTypeButtonGroup() {
  return (
    <div className="absolute h-[29px] left-[8px] top-[8px] w-[94px]" data-name="Map type button group">
      <div className="absolute bg-white inset-0 rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]" data-name="Rectangle" />
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal inset-[27.59%_8.51%_27.59%_48.94%] leading-[normal] text-[11px] text-[rgba(0,0,0,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Satellite
      </p>
      <div className="absolute bottom-0 flex items-center justify-center left-[40.43%] right-[59.57%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Line">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 1">
                <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="29" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Roboto:Medium',_sans-serif] font-medium inset-[27.59%_68.08%_27.59%_8.51%] leading-[normal] text-[11px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Map
      </p>
    </div>
  );
}

function PinMarker() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+0.5px)] top-[calc(50%-16px)] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Pin marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
        <g clipPath="url(#clip0_34_20619)" id="Pin marker">
          <g filter="url(#filter0_f_34_20619)" id="Shadow">
            <ellipse cx="12" cy="29" fill="var(--fill-0, black)" fillOpacity="0.12" rx="4" ry="2" />
          </g>
          <g id="Marker">
            <path d={svgPaths.p7bf9e00} fill="var(--fill-0, #EA382E)" />
            <path d={svgPaths.p325f9b80} stroke="url(#paint0_linear_34_20619)" />
          </g>
          <circle cx="12" cy="12" fill="var(--fill-0, black)" fillOpacity="0.4" id="Ellipse" r="4" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8" id="filter0_f_34_20619" width="12" x="6" y="25">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_34_20619" stdDeviation="1" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_34_20619" x1="12" x2="12" y1="2" y2="27.9969">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.35" />
          </linearGradient>
          <clipPath id="clip0_34_20619">
            <rect fill="white" height="32" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GoogleMapsMockup() {
  return (
    <div className="bg-white h-[240px] overflow-clip relative shrink-0 w-full" data-name="_Google maps mockup">
      <div className="absolute bottom-[-40%] left-0 right-0 top-[-40%]" data-name="Map">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMap} />
      </div>
      <Logos />
      <StreetViewButton />
      <ZoomControlButtons />
      <MapTypeButtonGroup />
      <PinMarker />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[16px] py-0 relative w-full">
          <GoogleMapsMockup />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center mb-[-64px] relative shrink-0 w-full" data-name="Section">
      <Container6 />
    </div>
  );
}

function ContactSections() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center overflow-clip pb-[128px] pt-0 px-0 relative shrink-0 w-full z-[3]" data-name="Contact sections">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Container7() {
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
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[2]" data-name="–––– Section divider ––––">
      <Container7 />
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

function Frame1000003794() {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px]">
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[6.188px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 />
    </div>
  );
}

function Frame1000003768() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content12 />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton4 />
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton5 />
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

function ButtonsButton6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton6 />
    </div>
  );
}

function ButtonsButton7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton7 />
    </div>
  );
}

function ButtonsButton8() {
  return <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip shrink-0" data-name="Buttons/Button" />;
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton8 />
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

function Content13() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
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
          <Content14 />
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

function TextPadding4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <TextPadding4 />
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
      <ButtonsButton9 />
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

function Content15() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container9 />
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

function Content16({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 onNavigate={onNavigate} />
    </div>
  );
}

function Container10({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content16 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container8 />
      <Frame1000003770 />
      <Container10 onNavigate={onNavigate} />
    </div>
  );
}

export default function Mobile({ onNavigate, onBookNow }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void; onBookNow?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <HeroHeaderSection onNavigate={onNavigate} />
      <ContactPageHeader onBookNow={onBookNow} />
      <ContactSections />
      <SectionDivider />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}