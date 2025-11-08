import svgPaths from "./svg-dbvk7wn66u";
import imgHeroHeaderSection from "figma:asset/c9b700eb89f009ae9d6e97eb3600221d82209851.png";
import imgImage from "figma:asset/1df45d321d94faf7238fbcae0c4f616df9019203.png";
import logoImage from "figma:asset/3eada838a8a55b948f7379c648ac717c0e7f47c9.png";

function Frame1000003793({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 cursor-pointer" onClick={onClick}>
      <img src={logoImage} alt="Haven Communities" className="h-auto w-[105px]" />
    </div>
  );
}

function ButtonsButton2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton2 onClick={onClick} />
    </div>
  );
}

function ButtonsButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Projects</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton3 onClick={onClick} />
    </div>
  );
}

function ButtonsButton4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function DropdownHeaderNavigationTrigger2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="_Dropdown header navigation trigger">
      <ButtonsButton4 onClick={onClick} />
    </div>
  );
}

function ButtonsButton5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function Navigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'blog' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navigation">
      <DropdownHeaderNavigationTrigger onClick={() => onNavigate?.('about')} />
      <DropdownHeaderNavigationTrigger1 onClick={() => onNavigate?.('projects')} />
      <DropdownHeaderNavigationTrigger2 onClick={() => onNavigate?.('contact')} />
      <ButtonsButton5 onClick={() => onNavigate?.('blog')} />
    </div>
  );
}

function Content2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'blog' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
      <Frame1000003793 onClick={() => onNavigate?.('home')} />
      <Navigation1 onNavigate={onNavigate} />
    </div>
  );
}

function Container1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1320px] px-[32px]" data-name="Container">
      <Content2 onNavigate={onNavigate} />
    </div>
  );
}

function Header1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container1 onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Dropdown header navigation">
      <Header1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame2({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[112px] items-start relative shrink-0 w-full">
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
    </div>
  );
}

function Frame4({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[10px] h-[80px] items-start relative shrink-0 w-full z-[2]">
      <Frame2 onNavigate={onNavigate} />
    </div>
  );
}

function HeadingAndAction() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start max-w-[768px] min-h-px min-w-[480px] not-italic relative shrink-0 text-white" data-name="Heading and action">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[60px] relative shrink-0 text-[48px] tracking-[-0.96px] w-full">Lands</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[20px] w-full">We understand the intricacies and challenges that come with buying lands, and we know how to deal with each one.</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndAction />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-0 right-0 mx-auto max-w-[1280px] px-[32px] md:px-[64px] lg:px-[112px] py-0 top-[151px] w-full" data-name="Container">
      <HeadingAndSupportingText />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[603px] relative shrink-0 w-full z-[1]">
      <div className="absolute bg-[rgba(0,0,0,0.4)] h-[683px] left-0 top-0 w-full" />
      <Container2 />
    </div>
  );
}

function HeroHeaderSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-stretch flex flex-col h-[683px] isolate items-center overflow-clip relative shrink-0 w-full" data-name="Hero header section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgHeroHeaderSection} />
      </div>
      <Frame4 onNavigate={onNavigate} />
      <Frame3 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#ecfdf3] bottom-[8px] box-border content-stretch flex gap-[2px] items-center left-[8px] pl-[6px] pr-[8px] py-[2px] rounded-[16px]" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#067647] text-[12px] text-center text-nowrap whitespace-pre">Available</p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[290px] relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      <div className="h-[290px] overflow-clip relative rounded-[inherit] w-full">
        <Badge />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextAndCategory() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text and category">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] w-full">Eden Court</p>
    </div>
  );
}

function TextAndButton() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text and button">
      <TextAndCategory />
    </div>
  );
}

function MarkerPin02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-02">
          <g id="Icon">
            <path d={svgPaths.p27e0c880} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p38d04800} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextAndIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <MarkerPin02 />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] text-nowrap whitespace-pre">Ajebo, Ogun State</p>
    </div>
  );
}

function DetailsWrap() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0" data-name="Details wrap">
      <TextAndIcon />
    </div>
  );
}

function Details() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-between relative shrink-0 w-full" data-name="Details">
      <DetailsWrap />
    </div>
  );
}

function ChevronRightDouble() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-right-double">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right-double">
          <path d={svgPaths.p3b57f380} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Text and supporting text" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">More Details</p>
      <ChevronRightDouble />
    </div>
  );
}

function Rating({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating">
      <TextAndSupportingText onClick={onClick} />
    </div>
  );
}

function Content3({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndButton />
      <Details />
      <Rating onClick={() => onNavigate?.('projectDetail')} />
    </div>
  );
}

function ListingSearchResultDesktop({ onNavigate, projectId = '1' }: { onNavigate?: (page: string) => void; projectId?: string }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[450px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[389px] cursor-pointer hover:shadow-lg transition-shadow" data-name="_Listing search result desktop" onClick={() => onNavigate?.(`project-${projectId}`)}>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Image />
      <Content3 onNavigate={onNavigate} />
    </div>
  );
}

function Frame1000003776({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1216px]">
      {[...Array(3).keys()].map((_, i) => (
        <ListingSearchResultDesktop key={i} onNavigate={onNavigate} projectId={(i + 1).toString()} />
      ))}
    </div>
  );
}

function Content12({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail') => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      {[...Array(3).keys()].map((_, i) => (
        <Frame1000003776 key={i} onNavigate={onNavigate} />
      ))}
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

function TextPadding7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Previous</p>
    </div>
  );
}

function ButtonsButton6({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="Buttons/Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <ArrowLeft />
        <TextPadding7 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ButtonWrap({ onPrevious }: { onPrevious?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex grow h-[36px] items-center min-h-px min-w-px relative shrink-0" data-name="Button wrap">
      <ButtonsButton6 onClick={onPrevious} />
    </div>
  );
}

function Content13() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function PaginationNumberBase() {
  return (
    <div className="bg-neutral-50 overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content13 />
    </div>
  );
}

function Content14() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function PaginationNumberBase1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function PaginationNumberBase2() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content15 />
    </div>
  );
}

function Content16() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">...</p>
    </div>
  );
}

function PaginationNumberBase3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content16 />
    </div>
  );
}

function Content17() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function PaginationNumberBase4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content17 />
    </div>
  );
}

function Content18() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function PaginationNumberBase5() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content18 />
    </div>
  );
}

function Content19() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[12px] rounded-[8px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] text-center text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function PaginationNumberBase6() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="_Pagination number base">
      <Content19 />
    </div>
  );
}

function PaginationNumbers() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Pagination numbers">
      <PaginationNumberBase />
      <PaginationNumberBase1 />
      <PaginationNumberBase2 />
      <PaginationNumberBase3 />
      <PaginationNumberBase4 />
      <PaginationNumberBase5 />
      <PaginationNumberBase6 />
    </div>
  );
}

function TextPadding8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] text-nowrap whitespace-pre">Next</p>
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

function ButtonsButton7({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="Buttons/Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <TextPadding8 />
        <ArrowRight />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function ButtonWrap1({ onNext }: { onNext?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex grow h-[36px] items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Button wrap">
      <ButtonsButton7 onClick={onNext} />
    </div>
  );
}

function Pagination({ onPrevious, onNext }: { onPrevious?: () => void; onNext?: () => void }) {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <ButtonWrap onPrevious={onPrevious} />
      <PaginationNumbers />
      <ButtonWrap1 onNext={onNext} />
    </div>
  );
}

function Container3({ onNavigate, onPreviousPage, onNextPage }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail') => void; onPreviousPage?: () => void; onNextPage?: () => void }) {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content12 onNavigate={onNavigate} />
          <Pagination onPrevious={onPreviousPage} onNext={onNextPage} />
        </div>
      </div>
    </div>
  );
}

function Section({ onNavigate, onPreviousPage, onNextPage }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail') => void; onPreviousPage?: () => void; onNextPage?: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative shrink-0 w-full" data-name="Section">
      <Container3 onNavigate={onNavigate} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
    </div>
  );
}

function BlogPageHeader({ onNavigate, onPreviousPage, onNextPage }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail') => void; onPreviousPage?: () => void; onNextPage?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[6]" data-name="Blog page header">
      <HeroHeaderSection onNavigate={onNavigate} />
      <Section onNavigate={onNavigate} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
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
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[5]" data-name="–––– Section divider ––––">
      <Container4 />
    </div>
  );
}

function Container5() {
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

function SectionDivider1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full z-[3]" data-name="–––– Section divider ––––">
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

function Frame1000003794({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-center relative shrink-0 w-[105px] cursor-pointer" onClick={onClick}>
      <Group1000003697 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[8.25px] text-center text-white w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function ButtonsButton8({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">About Us</p>
    </div>
  );
}

function FooterLink({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton8 onClick={onClick} />
    </div>
  );
}

function ButtonsButton9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Project</p>
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton9 />
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

function FooterLink2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton10 onClick={onClick} />
    </div>
  );
}

function ButtonsButton11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Blog</p>
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
      <ButtonsButton11 />
    </div>
  );
}

function FooterLinks({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Footer links">
      <FooterLink onClick={() => onNavigate?.('about')} />
      <FooterLink1 />
      <FooterLink2 onClick={() => onNavigate?.('contact')} />
      <FooterLink3 />
    </div>
  );
}

function LogoAndLinks({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[560px] relative shrink-0" data-name="Logo and links">
      <Frame1000003794 onClick={() => onNavigate?.('home')} />
      <p className="font-['Avenir:Regular',_sans-serif] h-[48px] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-[545px]">Crafting spaces, cultivating communities.</p>
      <FooterLinks onNavigate={onNavigate} />
    </div>
  );
}

function Content20() {
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
          <Content20 />
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
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input field">
      <InputWithLabel />
    </div>
  );
}

function TextPadding9() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
    </div>
  );
}

function ButtonsButton12() {
  return (
    <div className="bg-[#00359e] relative rounded-[234px] shrink-0" data-name="Buttons/Button">
      <div className="box-border content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <TextPadding9 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[234px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function EmailCapture() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Email capture">
      <InputField />
      <ButtonsButton12 />
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

function Content21({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="content-start flex flex-wrap gap-[48px] h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <LogoAndLinks onNavigate={onNavigate} />
      <Frame1000003769 />
    </div>
  );
}

function Container6({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects') => void }) {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content21 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex font-['Avenir:Medium',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" data-name="Footer links">
      <p className="relative shrink-0">Terms</p>
      <p className="relative shrink-0">Privacy</p>
      <p className="relative shrink-0">Cookies</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[24px] items-center justify-between pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(127,86,217,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">© 2025 Pishon Communities. All rights reserved.</p>
      <FooterLinks1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'blog' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[48px] pt-[64px] px-0 relative shrink-0 w-full z-[1]" data-name="Footer">
      <Container6 onNavigate={onNavigate} />
      <Container7 onNavigate={onNavigate} />
    </div>
  );
}

export default function Desktop({ onNavigate, onPreviousPage, onNextPage }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void; onPreviousPage?: () => void; onNextPage?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Desktop">
      <BlogPageHeader onNavigate={onNavigate} onPreviousPage={onPreviousPage} onNextPage={onNextPage} />
      <SectionDivider />
      <SectionDivider1 />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}