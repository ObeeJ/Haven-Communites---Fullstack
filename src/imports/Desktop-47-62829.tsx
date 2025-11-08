import svgPaths from "./svg-3ab6tq516b";
import imgHeroHeaderSection from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";

function Group1000003696() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[8.25px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton2 />
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Projects</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton3 />
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton4 />
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger />
      <DropdownHeaderNavigationTrigger1 />
      <DropdownHeaderNavigationTrigger2 />
      <ButtonsButton5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame1000003793 />
      <Navigation1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Container">
      <Content2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 />
    </div>
  );
}

function DropdownHeaderNavigation1() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Header1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[112px] items-start left-0 right-0 top-0">
      <DropdownHeaderNavigation1 />
    </div>
  );
}

function DropdownHeaderNavigation2() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-[1440px] z-[2]">
      <DropdownHeaderNavigation2 />
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

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <SearchLg />
      <p className="basis-0 font-['Avenir:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#667085] text-[16px]">Search</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12345px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[12px] relative w-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[12345px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
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
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[320px]" data-name="Input field">
      <InputWithLabel />
    </div>
  );
}

function HeadingAndAction() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[768px]" data-name="Heading and action">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[60px] min-w-full not-italic relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-[min-content]">Cookie Policy</p>
      <InputField />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-0 pt-[12px] px-0 relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-white w-full">Certainly! Here is an expanded version of the Cookie Policy for Pishon, the company that allows users to invest in fractional real estate:</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndAction />
      <Content4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[80px] px-[32px] py-0 top-[151px] w-[1280px]" data-name="Container">
      <HeadingAndSupportingText />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[603px] relative shrink-0 w-[1440px] z-[1]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[683px] left-0 top-0 w-[1440px]" />
      <Container2 />
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="content-stretch flex flex-col h-[683px] isolate items-center overflow-clip relative shrink-0 w-[1440px] z-[6]" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function PaddingTop() {
  return <div className="content-stretch flex flex-col h-[40px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom() {
  return <div className="content-stretch flex flex-col h-[20px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full">Introduction</p>
      <PaddingBottom />
    </div>
  );
}

function ContentItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">{`Welcome to Pishon! This Cookie Policy explains in detail how we use cookies, web beacons, and similar technologies (collectively referred to as "cookies") on our website and platform. By using Pishon, you consent to the use of cookies as described in this policy.`}</p>
    </div>
  );
}

function PaddingTop1() {
  return <div className="content-stretch flex flex-col h-[40px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom1() {
  return <div className="content-stretch flex flex-col h-[20px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop1 />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full">What are Cookies?</p>
      <PaddingBottom1 />
    </div>
  );
}

function ContentItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">Cookies are small text files that are placed on your device when you visit a website. They serve various purposes, such as enabling website functionality, improving user experience, and providing analytical information. Cookies can be categorized based on their lifespan and purpose.</p>
    </div>
  );
}

function PaddingTop2() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom2() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop2 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Types of Cookies We Use</p>
      <PaddingBottom2 />
    </div>
  );
}

function ContentItem5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">
        <p className="mb-[18px]">a. Essential Cookies: These cookies are necessary for the operation of our website and platform. They enable core functionality, such as user authentication, account management, and security features. Without these cookies, our services may not function properly.</p>
        <p className="mb-[18px]">b. Analytics Cookies: We use analytics cookies to collect information about how visitors use our website. These cookies help us understand website traffic, user behavior, and improve our services. The information collected is aggregated and anonymous, and it helps us analyze trends, track user navigation, and measure the effectiveness of our website.</p>
        <p className="mb-[18px]">c. Advertising Cookies: We may use advertising cookies to deliver personalized advertisements to you based on your interests and browsing behavior. These cookies help us measure the effectiveness of our advertising campaigns and track conversions. They also allow us to limit the number of times you see an ad and help us serve ads that are relevant to you.</p>
        <p className="mb-[18px]">d. Functionality Cookies: Functionality cookies enhance the usability and functionality of our website. They remember your preferences, such as language settings, and enable personalized features to provide you with a more tailored experience.</p>
        <p>e. Third-Party Cookies: We may allow third-party service providers, such as analytics or advertising networks, to place cookies on our website for various purposes. These cookies are subject to the respective privacy policies of these third parties and are not controlled by Pishon.</p>
      </div>
    </div>
  );
}

function PaddingTop3() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom3() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop3 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Cookie Management</p>
      <PaddingBottom3 />
    </div>
  );
}

function ContentItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">
        <p className="mb-[18px]">{`Most web browsers automatically accept cookies. However, you have the option to manage or disable cookies through your browser settings. The methods for managing cookies may vary depending on the browser you use. You can typically find these settings in the "Options," "Preferences," or "Settings" menu of your browser.`}</p>
        <p>Please note that blocking or deleting cookies may impact the functionality and user experience of our website and platform. Disabling certain cookies may result in limited access to certain features or services.</p>
      </div>
    </div>
  );
}

function PaddingTop4() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom4() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop4 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Consent to Cookie Usage</p>
      <PaddingBottom4 />
    </div>
  );
}

function ContentItem9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">{`When you visit our website for the first time, we will request your consent to use cookies. By clicking "Accept" or continuing to use our website, you are giving your consent to the use of cookies as described in this Cookie Policy.`}</p>
    </div>
  );
}

function PaddingTop5() {
  return <div className="content-stretch flex flex-col h-[40px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom5() {
  return <div className="content-stretch flex flex-col h-[20px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop5 />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#101828] text-[30px] w-full">Third-Party Cookies and External Links</p>
      <PaddingBottom5 />
    </div>
  );
}

function ContentItem11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">Our website may contain links to external websites or services that are not operated by Pishon. These third-party websites or services may use their own cookies, which are subject to their respective privacy policies. We recommend reviewing the cookie and privacy policies of these third parties for more information.</p>
    </div>
  );
}

function PaddingTop6() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom6() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop6 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Changes to the Cookie Policy</p>
      <PaddingBottom6 />
    </div>
  );
}

function ContentItem13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#475467] text-[18px] w-full">We may update this Cookie Policy from time to time to reflect changes in our practices or for legal or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.</p>
    </div>
  );
}

function PaddingTop7() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom7() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop7 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Contact Us</p>
      <PaddingBottom7 />
    </div>
  );
}

function RichText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[720px]" data-name="Rich text">
      <ContentItem />
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
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#475467] text-[0px] text-[18px] w-full">
        <p className="mb-[18px]">
          <span className="font-['Avenir:Regular',_sans-serif]">{`If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at `}</span>
          <span className="font-['Avenir:Medium',_sans-serif]">contact@pishon.org</span>
          <span className="font-['Avenir:Regular',_sans-serif]">. We are here to assist you and address any inquiries you may have.</span>
        </p>
        <p className="font-['Avenir:Regular',_sans-serif] mb-[18px]">Please note that this Cookie Policy should be read in conjunction with our Privacy Policy, which provides more information about how we collect, use, and protect your personal information.</p>
        <p className="font-['Avenir:Regular',_sans-serif]">{`By using Pishon's website and platform, you acknowledge that you have read, understood, and agreed to be bound by this Cookie Policy.`}</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <RichText />
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-[32px] py-0 relative shrink-0 w-[1280px]" data-name="Container">
      <Content5 />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative shrink-0 w-full z-[4]" data-name="Content section">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-px relative shrink-0 w-[1280px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
        <g id="Container">
          <path clipRule="evenodd" d="M1248 1H32V0H1248V1Z" fill="var(--fill-0, #E9EAEB)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[2]" data-name="–––– Section divider ––––">
      <Container4 />
    </div>
  );
}

function Group1000003697() {
  return (
    <div className="h-[21.72px] relative shrink-0 w-[48.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 22">
        <g id="Group 1000003696">
          <path d={svgPaths.p27cf2e80} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p14e48780} fill="var(--fill-0, white)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003794() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px]">
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[8.25px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton6 />
    </div>
  );
}

function ButtonsButton7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton7 />
    </div>
  );
}

function ButtonsButton8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton8 />
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton9 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Footer links">
      <FooterLink />
      <FooterLink1 />
      <FooterLink2 />
      <FooterLink3 />
    </div>
  );
}

function LogoAndLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[560px] relative shrink-0" data-name="Logo and links">
      <Frame1000003794 />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[545px]">Crafting spaces, cultivating communities.</p>
      <FooterLinks />
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
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input field">
      <InputWithLabel1 />
    </div>
  );
}

function TextPadding7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton10() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <TextPadding7 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField1 />
      <ButtonsButton10 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="Newsletter">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
      <EmailCapture />
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

function Frame1000003769() {
  return (
    <div className="content-stretch flex flex-col h-[202.72px] items-end justify-between relative shrink-0 w-[359px]">
      <Newsletter />
      <SocialIcons />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <LogoAndLinks />
      <Frame1000003769 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function FooterLinks1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex font-['Avenir:Medium',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('termsOfService')}>Terms</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('privacyPolicy')}>Privacy</p>
      <p className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate?.('cookiesPolicy')}>Cookies</p>
    </div>
  );
}

function Content8({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
      <FooterLinks1 onNavigate={onNavigate} />
    </div>
  );
}

function Container6({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content8 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[48px] pt-[64px] px-0 relative shrink-0 w-[1440px] z-[1]" data-name="Footer">
      <Container5 />
      <Container6 onNavigate={onNavigate} />
    </div>
  );
}

export default function Desktop({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
      <HeroHeaderSection onNavigate={onNavigate} />
      <ContentSection />
      <SectionDivider />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}