import svgPaths from "./svg-hg6diw1igq";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";

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

function Container1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
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

function Header1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame1000003772({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]" data-name="Dropdown header navigation">
      <Frame1000003772 onNavigate={onNavigate} />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.72px] w-full">Terms of Service</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[16px] text-white w-full">Thank you for choosing Pishon for your real estate investment needs. The following is a detailed Terms of Service agreement that outlines the terms and conditions governing your use of our services:</p>
    </div>
  );
}

function SearchLg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search-lg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search-lg">
          <path d={svgPaths.p22fdb270} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <SearchLg />
      <p className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#667085] text-[16px]">Search</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
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

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[64px] translate-x-[-50%] w-[343px]" data-name="Content">
      <HeadingAndSupportingText />
      <InputField />
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

function HeroHeaderSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex flex-col h-[476px] isolate items-center overflow-clip relative shrink-0 w-[375px] z-[6]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <DropdownHeaderNavigation2 onNavigate={onNavigate} />
      <Frame1000003773 />
    </div>
  );
}

function PaddingTop() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Acceptance of Terms</p>
      <PaddingBottom />
    </div>
  );
}

function ContentItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">{`By using Pishon's services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`}</p>
    </div>
  );
}

function PaddingTop1() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom1() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop1 />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Descriptions of Services</p>
      <PaddingBottom1 />
    </div>
  );
}

function ContentItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Pishon is a platform that provides individuals, including those with low purchasing power, with the opportunity to invest in fractional real estate. Through our platform, users can pool their funds with other investors to participate in real estate investments that may have previously been inaccessible due to high costs.</p>
    </div>
  );
}

function PaddingTop2() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom2() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop2 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Eligibility</p>
      <PaddingBottom2 />
    </div>
  );
}

function ContentItem6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">To use our services, you must be at least 18 years old and have the legal capacity to enter into a binding agreement. By using Pishon, you represent and warrant that you meet these eligibility requirements.</p>
    </div>
  );
}

function PaddingTop3() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom3() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop3 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Registration and Account</p>
      <PaddingBottom3 />
    </div>
  );
}

function ContentItem8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">In order to access certain features and functionality of our services, you may need to create a user account. During the registration process, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for any activity that occurs under your account. Please notify us immediately of any unauthorized access or use of your account.</p>
    </div>
  );
}

function PaddingTop4() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom4() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop4 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Investment Risks and Disclocures</p>
      <PaddingBottom4 />
    </div>
  );
}

function ContentItem10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Investing in real estate, including fractional ownership, involves inherent risks. Pishon provides investment opportunities, but we do not guarantee the performance, success, or profitability of any investment. The value of investments can fluctuate, and there is no assurance of returns or profit. It is important to thoroughly review the associated investment documentation, including prospectuses or offering memoranda, and understand the risks before making any investment decisions.</p>
    </div>
  );
}

function PaddingTop5() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom5() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop5 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Investment Decisions</p>
      <PaddingBottom5 />
    </div>
  );
}

function ContentItem12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">{`As a user of Pishon's services, you are solely responsible for your investment decisions. We do not provide investment advice or make recommendations regarding specific investments. Our platform serves as a facilitator, connecting users with investment opportunities. It is crucial that you conduct your own research, assess your financial situation, investment objectives, and risk tolerance, and consult with your own advisors before making any investment through Pishon.`}</p>
    </div>
  );
}

function PaddingTop6() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom6() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop6 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Fees and Expenses</p>
      <PaddingBottom6 />
    </div>
  );
}

function ContentItem14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Pishon charges fees for the use of our services. These fees may include transaction fees, management fees, or other charges associated with your investments. The specific fees and expenses applicable to each investment opportunity will be disclosed to you prior to making an investment. It is important to review and understand these fees before proceeding with any investment.</p>
    </div>
  );
}

function PaddingTop7() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom7() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop7 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Communication and Notifications</p>
      <PaddingBottom7 />
    </div>
  );
}

function ContentItem16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">By using Pishon, you consent to receive communications from us, including transactional emails, account updates, and promotional materials. We may also provide notifications within your account or through other means. You may opt out of receiving promotional materials by following the instructions provided in the communication. Please note that even if you opt out of promotional materials, you may still receive transactional or account-related communications from us.</p>
    </div>
  );
}

function PaddingTop8() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom8() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop8 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Intellectual Property Rights</p>
      <PaddingBottom8 />
    </div>
  );
}

function ContentItem18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">All intellectual property rights in the Pishon platform, including trademarks, logos, and content, are owned by Pishon or our licensors. These intellectual property rights are protected by copyright, trademark, and other laws. You may not use, reproduce, modify, or distribute any of our intellectual property without our prior written consent.</p>
    </div>
  );
}

function PaddingTop9() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom9() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop9 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Termination</p>
      <PaddingBottom9 />
    </div>
  );
}

function ContentItem20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">{`We may, at our discretion, suspend or terminate your access to Pishon's services at any time and for any reason, without prior notice or liability. Upon termination, your right to use our services will cease immediately. You may also terminate your account at any time by contacting us or following the instructions within your account settings.`}</p>
    </div>
  );
}

function PaddingTop10() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom10() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop10 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Disclaimer of Warranties</p>
      <PaddingBottom10 />
    </div>
  );
}

function ContentItem22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">{`Pishon's services are provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, or statutory. We do not warrant that our services will be uninterrupted, error-free, or free from harmful components. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.`}</p>
    </div>
  );
}

function PaddingTop11() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom11() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop11 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Limitation of Liability</p>
      <PaddingBottom11 />
    </div>
  );
}

function ContentItem24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">To the maximum extent permitted by applicable law, Pishon and its affiliates, officers, directors, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, arising out of or in connection with your use of our services, regardless of the cause of action or theory of liability (contract, tort, or otherwise).</p>
    </div>
  );
}

function PaddingTop12() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom12() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop12 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Governing Law and Dispute Resolution</p>
      <PaddingBottom12 />
    </div>
  );
}

function ContentItem26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Pishon is located. Any disputes arising out of or in connection with these Terms shall be resolved through binding arbitration conducted by a neutral arbitrator, unless otherwise agreed upon by the parties.</p>
    </div>
  );
}

function PaddingTop13() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom13() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop13 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Changes to the Terms of Service</p>
      <PaddingBottom13 />
    </div>
  );
}

function ContentItem28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] w-full">Pishon reserves the right to modify or update these Terms at any time without prior notice. Any changes will be effective upon posting the revised Terms on our website or notifying you through other means. It is your responsibility to review the Terms periodically. Continued use of our services after the effective date of any modifications constitutes acceptance of the updated Terms.</p>
    </div>
  );
}

function PaddingTop14() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom14() {
  return <div className="content-stretch flex flex-col h-[12px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop14 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101828] text-[20px] w-full">Entire Agreement</p>
      <PaddingBottom14 />
    </div>
  );
}

function ContentItem30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#475467] text-[0px] text-[16px] w-full">
        <p className="mb-[16px]">These Terms constitute the entire agreement between you and Pishon regarding your use of our services and supersede any prior agreements or understandings, whether written or oral, relating to the subject matter herein.</p>
        <p className="mb-[16px]">
          <span>{`If you have any questions or concerns about these Terms, please contact us at `}</span>
          <span className="font-['Avenir:Medium',_sans-serif] not-italic">contact@pishon.org</span>
          <span className="font-['Avenir:Regular',_sans-serif] not-italic">.</span>
        </p>
        <p>{`By using Pishon's services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.`}</p>
      </div>
    </div>
  );
}

function RichText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich text">
      <ContentItem1 />
      <ContentItem2 />
      <ContentItem3 />
      <ContentItem4 />
      <ContentItem5 />
      <ContentItem6 />
      <ContentItem7 />
      <ContentItem8 />
      <ContentItem9 />
      <ContentItem10 />
      <ContentItem11 />
      <ContentItem12 />
      <ContentItem13 />
      <ContentItem14 />
      <ContentItem15 />
      <ContentItem16 />
      <ContentItem17 />
      <ContentItem18 />
      <ContentItem19 />
      <ContentItem20 />
      <ContentItem21 />
      <ContentItem22 />
      <ContentItem23 />
      <ContentItem24 />
      <ContentItem25 />
      <ContentItem26 />
      <ContentItem27 />
      <ContentItem28 />
      <ContentItem29 />
      <ContentItem30 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <RichText />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-[16px] py-0 relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[64px] relative shrink-0 w-full z-[4]" data-name="Content section">
      <Container2 />
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
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[2]" data-name="–––– Section divider ––––">
      <Container3 />
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

function Content4({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 onClick={() => onNavigate?.('home')} />
    </div>
  );
}

function Frame1000003768({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content4 onNavigate={onNavigate} />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[320px]">Crafting spaces, cultivating communities.</p>
    </div>
  );
}

function ButtonsButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton onClick={onClick} />
    </div>
  );
}

function ButtonsButton1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton1 onClick={onClick} />
    </div>
  );
}

function FooterLinks({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink onClick={() => onNavigate?.('about')} />
      <FooterLink1 onClick={() => onNavigate?.('contact')} />
    </div>
  );
}

function FooterLinksColumn({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks onNavigate={onNavigate} />
    </div>
  );
}

function ButtonsButton2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton2 onClick={onClick} />
    </div>
  );
}

function ButtonsButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton3 onClick={onClick} />
    </div>
  );
}

function ButtonsButton4() {
  return <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip shrink-0" data-name="Buttons/Button" />;
}

function FooterLink4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton4 />
    </div>
  );
}

function FooterLinks1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <FooterLink2 onClick={() => onNavigate?.('projects')} />
      <FooterLink3 onClick={() => onNavigate?.('blog')} />
      <FooterLink4 />
    </div>
  );
}

function FooterLinksColumn1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[60px] items-start min-h-px min-w-[96px] relative shrink-0" data-name="_Footer links column">
      <FooterLinks1 onNavigate={onNavigate} />
    </div>
  );
}

function Content5({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn onNavigate={onNavigate} />
      <FooterLinksColumn1 onNavigate={onNavigate} />
    </div>
  );
}

function Container4({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 onNavigate={onNavigate} />
          <Content5 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <p className="[white-space-collapse:collapse] basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#717680] text-[16px] text-nowrap">Enter your email</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[234px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input field">
      <InputWithLabel1 />
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

function ButtonsButton5() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
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
      <InputField1 />
      <ButtonsButton5 />
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

function Content7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container5 />
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
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('termsOfService')}>Terms</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('privacyPolicy')}>Privacy</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('cookiesPolicy')}>Cookies</p>
    </div>
  );
}

function Frame1000003771({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
      <FooterLinks2 onNavigate={onNavigate} />
      <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
    </div>
  );
}

function Content8({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 onNavigate={onNavigate} />
    </div>
  );
}

function Container6({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content8 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container4 onNavigate={onNavigate} />
      <Frame1000003770 />
      <Container6 onNavigate={onNavigate} />
    </div>
  );
}

export default function Mobile({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <HeroHeaderSection onNavigate={onNavigate} />
      <ContentSection />
      <SectionDivider />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}