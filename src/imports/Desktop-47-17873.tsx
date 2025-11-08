import svgPaths from "./svg-1y04fh47kq";
import imgImage from "figma:asset/b2a4d4d2696958d3a420b3897c4c42bf3d9c784f.png";
import imgImage1 from "figma:asset/7cea1cc7a63d49724f662dc4ca77ec22ed421454.png";
import imgImage2 from "figma:asset/9f4ea61beb99ae8c2da093d59eccf06f640e117f.png";
import imgImage3 from "figma:asset/0f4f2fcb6049962790ac0a2810925489622b792c.png";
import Logo from "../components/Logo";

function Group1000003696() {
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

function Frame1000003793({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px] cursor-pointer" onClick={onClick}>
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[24px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[8.25px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ButtonsButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">About Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton onClick={onClick} />
    </div>
  );
}

function ButtonsButton1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Projects</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton1 onClick={onClick} />
    </div>
  );
}

function ButtonsButton2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton2 onClick={onClick} />
    </div>
  );
}

function ButtonsButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] text-nowrap whitespace-pre">Blog</p>
    </div>
  );
}

function Navigation({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger onClick={() => onNavigate?.('about')} />
      <DropdownHeaderNavigationTrigger1 onClick={() => onNavigate?.('projects')} />
      <DropdownHeaderNavigationTrigger2 onClick={() => onNavigate?.('contact')} />
      <ButtonsButton3 onClick={() => onNavigate?.('blog')} />
    </div>
  );
}

function Content({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Logo onClick={() => onNavigate?.('home')} />
      <Navigation onNavigate={onNavigate} />
    </div>
  );
}

function Container({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1320px]" data-name="Container">
      <Content onNavigate={onNavigate} />
    </div>
  );
}

function Header({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Header onNavigate={onNavigate} />
    </div>
  );
}

function Frame2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[112px] items-start left-0 right-0 top-0">
      <DropdownHeaderNavigation onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Frame2 onNavigate={onNavigate} />
    </div>
  );
}

function Frame3({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-[1440px] z-[5]">
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#84adff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#155eef] text-[12px] text-center text-nowrap whitespace-pre">Land</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#155eef] text-[12px] text-nowrap whitespace-pre">8 min read</p>
    </div>
  );
}

function BadgeGroup() {
  return (
    <div className="bg-[#eff4ff] box-border content-stretch flex gap-[8px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge group">
      <div aria-hidden="true" className="absolute border border-[#84adff] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Badge />
      <Content1 />
    </div>
  );
}

function HeadingAndBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and badge">
      <BadgeGroup />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[60px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-[min-content]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Text and supporting text">
      <HeadingAndBadge />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#535862] text-[20px] w-full">Lorem ipsum dolor sit amet consectetur. Quam placerat sed vitae etiam adipiscing leo dignissim. Morbi quam aliquet rhoncus donec. Leo ultrices orci metus magnis.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[1216/640] relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Author">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] relative shrink-0 text-[#155eef] text-[14px]">Written by</p>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px]">Alec Whitten</p>
    </div>
  );
}

function PublishDate() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Publish date">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] relative shrink-0 text-[#155eef] text-[14px]">Published on</p>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px]">17 Jan 2025</p>
    </div>
  );
}

function AuthorAndPublishDate() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0" data-name="Author and publish date">
      <Author />
      <PublishDate />
    </div>
  );
}

function Copy01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="copy-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_47_18113)" id="copy-01">
          <path d={svgPaths.p22dacb00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_47_18113">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Copy link</p>
    </div>
  );
}

function ButtonsButton4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
        <Copy01 />
        <TextPadding />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path clipRule="evenodd" d={svgPaths.p32584700} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <SocialIcon />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_47_18124)" id="Social icon">
          <path d={svgPaths.p24dd3180} fill="var(--fill-0, #A4A7AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_47_18124">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonsButton6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <SocialIcon1 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Group() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="Group">
        <path d={svgPaths.p3fb91680} fill="var(--fill-0, #A4A7AE)" id="Vector" />
      </g>
    </svg>
  );
}

function SocialIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Social icon">
      <Group />
    </div>
  );
}

function ButtonsButton7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <SocialIcon2 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social links">
      <ButtonsButton4 />
      <ButtonsButton5 />
      <ButtonsButton6 />
      <ButtonsButton7 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <AuthorAndPublishDate />
      <SocialLinks />
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Image />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative shrink-0 w-full" data-name="Section">
      <Container1 />
      <Container2 />
    </div>
  );
}

function PaddingBottom() {
  return <div className="content-stretch flex flex-col h-[20px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] not-italic relative shrink-0 text-[#181d27] text-[30px] w-full">Introduction</p>
      <PaddingBottom />
    </div>
  );
}

function ContentItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
        <p className="mb-[18px]">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
        <p>{`Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. `}</p>
      </div>
    </div>
  );
}

function PaddingTop1() {
  return <div className="content-stretch flex flex-col h-[48px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function Image1() {
  return (
    <div className="aspect-[720/480] relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1} />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Image1 />
    </div>
  );
}

function PaddingBottom1() {
  return <div className="content-stretch flex flex-col h-[48px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop1 />
      <Content4 />
      <PaddingBottom1 />
    </div>
  );
}

function ContentItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
    </div>
  );
}

function ContentItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
        <p className="mb-[18px]">Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
        <p className="mb-[18px]">Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
        <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
      </div>
    </div>
  );
}

function PaddingTop2() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom2() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop2 />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] w-full">Software and tools</p>
      <PaddingBottom2 />
    </div>
  );
}

function PaddingTop3() {
  return <div className="content-stretch flex flex-col h-[32px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function PaddingBottom3() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop3 />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] w-full">Other resources</p>
      <PaddingBottom3 />
    </div>
  );
}

function ContentItem8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">
        <p className="leading-[28px] mb-[18px]">Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Lectus id duis vitae porttitor enim gravida morbi.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[28px]">Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[28px]">Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function RichText() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-w-[720px] min-h-px min-w-[560px] relative shrink-0" data-name="Rich text">
      <ContentItem />
      <ContentItem1 />
      <ContentItem2 />
      <ContentItem3 />
      <ContentItem4 />
      <ContentItem5 />
      <ContentItem1 />
      <ContentItem7 />
      <ContentItem8 />
    </div>
  );
}

function Send01() {
  return (
    <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="send-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="send-01">
          <path d={svgPaths.p3959e900} id="Icon" stroke="var(--stroke-0, #414651)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[56px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[56px]">
        <Send01 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[30px] relative shrink-0 text-[#181d27] text-[20px] w-full">Weekly newsletter</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.</p>
    </div>
  );
}

function Content5() {
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
          <Content5 />
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
      <p className="font-['Avenir:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#535862] text-[0px] text-[14px] w-full">
        <span>{`Read about our `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">privacy policy</span>.
      </p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton8() {
  return (
    <div className="bg-[#155eef] relative rounded-[234px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[12px] relative w-full">
          <TextPadding1 />
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
      <ButtonsButton8 />
    </div>
  );
}

function TextAndEmailCapture() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Text and email capture">
      <HeadingAndSupportingText />
      <EmailCapture />
    </div>
  );
}

function BlogSubscribeCard() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[32px] items-start min-w-[320px] p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="Blog subscribe card">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <FeaturedIcon />
      <TextAndEmailCapture />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Sidebar">
      <BlogSubscribeCard />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-start flex flex-wrap gap-[96px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <RichText />
      <Sidebar />
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center pb-[96px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <Container3 />
    </div>
  );
}

function BlogPostPageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[4]" data-name="Blog post page header">
      <Section />
      <Section1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-px relative shrink-0 w-[1280px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
        <g id="Container"></g>
      </svg>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[3]" data-name="–––– Section divider ––––">
      <Container4 />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[#155eef] text-[16px] w-full">Latest</p>
      <p className="font-['Inter:Semibold',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">From the blog</p>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] relative shrink-0 text-[#535862] text-[18px] w-full">The latest industry news, interviews, technologies, and resources.</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">View all posts</p>
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="bg-[#155eef] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
        <TextPadding2 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <ButtonsButton9 />
    </div>
  );
}

function TextAndAction() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start max-w-[400px] min-h-px min-w-[320px] relative shrink-0" data-name="Text and action">
      <HeadingAndSupportingText1 />
      <Actions />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',_sans-serif] relative shrink-0">Demi Wilkinson</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">16 Jan 2025</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard />
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
      <BottomPanel />
    </div>
  );
}

function HeadingAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Eu tincidunt habitant dolor.</p>
      <p className="-webkit-box css-2gg9ad font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Id diam dignissim vel tempor scelerisque.</p>
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

function ButtonsButton10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText />
      <ButtonsButton10 />
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Blog post card">
      <Image2 />
      <Content8 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',_sans-serif] relative shrink-0">Alec Whitten</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">17 Jan 2025</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText2 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Construction</p>
    </div>
  );
}

function AttributionCard1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel1() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
      <BottomPanel1 />
    </div>
  );
}

function HeadingAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Urna sagittis euismod nisi.</p>
      <p className="-webkit-box css-2gg9ad font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Cursus gravida ipsum suspendisse auctor. Donec ultrices vestibulum vestibulum quam odio scelerisque neque dui. In urna.</p>
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

function ButtonsButton11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
      <ArrowUpRight1 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText1 />
      <ButtonsButton11 />
    </div>
  );
}

function BlogPostCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Blog post card">
      <Image3 />
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[32px] grow items-start min-h-px min-w-[640px] relative shrink-0" data-name="Content">
      <BlogPostCard />
      <BlogPostCard1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-start flex flex-wrap gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <TextAndAction />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip px-0 py-[96px] relative shrink-0 w-full z-[2]" data-name="Blog section">
      <Container5 />
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

function ButtonsButton12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton12 />
    </div>
  );
}

function ButtonsButton13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton13 />
    </div>
  );
}

function ButtonsButton14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton14 />
    </div>
  );
}

function ButtonsButton15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton15 />
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

function Content12() {
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
          <Content12 />
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

function TextPadding3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton16() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <TextPadding3 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField1 />
      <ButtonsButton16 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="Newsletter">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Stay up to date</p>
      <EmailCapture1 />
    </div>
  );
}

function SocialIcon3() {
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

function Group1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Group">
        <path d={svgPaths.p2ccee40} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </svg>
  );
}

function SocialIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
      <Group1 />
    </div>
  );
}

function SocialIcon5() {
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

function SocialIcon6() {
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

function SocialIcon7() {
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

function SocialIcon8() {
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

function SocialIcon9() {
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
      <SocialIcon3 />
      <SocialIcon4 />
      <SocialIcon5 />
      <SocialIcon6 />
      <SocialIcon7 />
      <SocialIcon8 />
      <SocialIcon9 />
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

function Content13() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <LogoAndLinks />
      <Frame1000003769 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content13 />
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

function Content14({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
      <FooterLinks1 onNavigate={onNavigate} />
    </div>
  );
}

function Container7({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content14 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[48px] pt-[64px] px-0 relative shrink-0 w-[1440px] z-[1]" data-name="Footer">
      <Container6 />
      <Container7 onNavigate={onNavigate} />
    </div>
  );
}

export default function Desktop({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
      <Frame3 onNavigate={onNavigate} />
      <BlogPostPageHeader />
      <SectionDivider />
      <BlogSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}