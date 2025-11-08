import svgPaths from "./svg-yct0lr8sis";
import imgImage from "figma:asset/b2a4d4d2696958d3a420b3897c4c42bf3d9c784f.png";
import imgImage1 from "figma:asset/7cea1cc7a63d49724f662dc4ca77ec22ed421454.png";
import imgImage2 from "figma:asset/12e57dc8c26ffbd65d754a3814aa245e717c32a7.png";
import imgImage3 from "figma:asset/9f4ea61beb99ae8c2da093d59eccf06f640e117f.png";

function Group1000003696() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p2cbdef00} fill="var(--fill-0, #155EEF)" id="Vector 2" />
          <path d={svgPaths.p19f24700} fill="var(--fill-0, #155EEF)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003793({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[3.375px] items-center relative shrink-0 w-[78.75px] cursor-pointer" onClick={onClick}>
      <Group1000003696 />
      <p className="font-['Times_New_Roman:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[18px] w-[min-content]">H A V E N</p>
      <p className="font-['Microsoft_Sans_Serif:Regular',_sans-serif] leading-[13.5px] min-w-full not-italic relative shrink-0 text-[#155eef] text-[6.188px] text-center w-[min-content]">C O M M U N I T I E S</p>
    </div>
  );
}

function Menu01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu-01">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavMenuButton() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Nav menu button">
      <Menu01 />
    </div>
  );
}

function Container({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-0 relative w-full">
          <Frame1000003793 onClick={() => onNavigate?.('home')} />
          <NavMenuButton />
        </div>
      </div>
    </div>
  );
}

function Header({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[72px] items-center justify-center left-0 right-0 top-0" data-name="Header">
      <Container onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="Dropdown header navigation">
      <Header onNavigate={onNavigate} />
    </div>
  );
}

function Frame1000003772({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="absolute h-[72px] left-0 right-0 top-0">
      <div className="absolute h-[72px] left-0 top-0 w-[375px]" />
      <DropdownHeaderNavigation onNavigate={onNavigate} />
    </div>
  );
}

function DropdownHeaderNavigation1({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="h-[72px] relative shrink-0 w-full z-[5]" data-name="Dropdown header navigation">
      <Frame1000003772 onNavigate={onNavigate} />
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

function Content() {
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
      <Content />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <BadgeGroup />
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] min-w-full not-italic relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-[min-content]">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Id aliquam eros vel ac volutpat potenti. Ut mattis odio condimentum gravida quisque. Non risus mattis turpis nisi tellus.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-0 relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[343/240] relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Heavy',_sans-serif] gap-[12px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Author">
      <p className="leading-[20px] relative shrink-0 text-[#155eef] text-[14px]">Written by</p>
      <p className="leading-[28px] relative shrink-0 text-[#181d27] text-[18px]">Alec Whitten</p>
    </div>
  );
}

function PublishDate() {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Heavy',_sans-serif] gap-[12px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Publish date">
      <p className="leading-[20px] relative shrink-0 text-[#155eef] text-[14px]">Published on</p>
      <p className="leading-[28px] relative shrink-0 text-[#181d27] text-[18px]">17 Jan 2025</p>
    </div>
  );
}

function AuthorAndPublishDate() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Author and publish date">
      <Author />
      <PublishDate />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Image />
          <AuthorAndPublishDate />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] items-start px-0 py-[64px] relative shrink-0 w-full" data-name="Header section">
      <Container1 />
      <Container2 />
    </div>
  );
}

function PaddingBottom() {
  return <div className="content-stretch flex flex-col h-[16px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] w-full">Introduction</p>
      <PaddingBottom />
    </div>
  );
}

function ContentItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">
        <p className="mb-[16px]">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
        <p>{`Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. `}</p>
      </div>
    </div>
  );
}

function PaddingTop1() {
  return <div className="content-stretch flex flex-col h-[40px] items-start shrink-0 w-full" data-name="Padding top" />;
}

function Image1() {
  return (
    <div className="aspect-[360/240] relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1} />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Image1 />
    </div>
  );
}

function PaddingBottom1() {
  return <div className="content-stretch flex flex-col h-[40px] items-start shrink-0 w-full" data-name="Padding bottom" />;
}

function ContentItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <PaddingTop1 />
      <Content2 />
      <PaddingBottom1 />
    </div>
  );
}

function ContentItem3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
    </div>
  );
}

function ContentItem4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">
        <p className="mb-[16px]">Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
        <p className="mb-[16px]">Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
        <p>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
      </div>
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
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px] w-full">Software and tools</p>
      <PaddingBottom2 />
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
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px] w-full">Other resources</p>
      <PaddingBottom3 />
    </div>
  );
}

function ContentItem8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content item">
      <div className="font-['Avenir:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">
        <p className="leading-[24px] mb-[16px]">Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.</p>
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Lectus id duis vitae porttitor enim gravida morbi.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function RichText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich text">
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <RichText />
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

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[30px] relative shrink-0 text-[#181d27] text-[20px] w-full">Weekly newsletter</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">No spam. Just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.</p>
    </div>
  );
}

function Content4() {
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
          <Content4 />
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

function TextPadding() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Subscribe</p>
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

function TextAndEmailCapture() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Text and email capture">
      <HeadingAndSupportingText1 />
      <EmailCapture />
    </div>
  );
}

function BlogSubscribeCard() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Blog subscribe card">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <FeaturedIcon />
      <TextAndEmailCapture />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Sidebar">
      <BlogSubscribeCard />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start px-[16px] py-0 relative w-full">
          <Content3 />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <Container3 />
    </div>
  );
}

function BlogPostPageHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[4]" data-name="Blog post page header">
      <HeaderSection />
      <Section />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
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

function HeadingAndSubheading1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[20px] relative shrink-0 text-[#155eef] text-[14px] w-full">Latest</p>
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[38px] relative shrink-0 text-[#181d27] text-[30px] w-full">From the blog</p>
    </div>
  );
}

function HeadingAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading1 />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[28px] relative shrink-0 text-[#535862] text-[18px] w-full">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
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
      <TextAndSupportingText />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Construction</p>
    </div>
  );
}

function AttributionCard() {
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

function BottomPanel() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard />
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
      <BottomPanel />
    </div>
  );
}

function HeadingAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Ac neque fusce congue in et sed tortor nunc.</p>
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

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText />
      <ButtonsButton1 />
    </div>
  );
}

function BlogPostCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Blog post card">
      <Image2 />
      <Content7 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Demi Wilkinson</p>
      <p className="font-['Avenir:Regular',_sans-serif] relative shrink-0">16 Jan 2025</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Heavy',_sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard1() {
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

function BottomPanel1() {
  return (
    <div className="absolute bg-gradient-to-b bottom-[-0.33px] content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[360/240] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      <BottomPanel1 />
    </div>
  );
}

function HeadingAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur.</p>
      <p className="-webkit-box css-l74gqu font-['Avenir:Regular',_sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Volutpat in donec nullam ante nisl massa fusce.</p>
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

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText1 />
      <ButtonsButton2 />
    </div>
  );
}

function BlogPostCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Blog post card">
      <Image3 />
      <Content9 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <BlogPostCard />
      <BlogPostCard1 />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Text padding">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">View all posts</p>
    </div>
  );
}

function ButtonsButton3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#155eef] grow min-h-px min-w-px relative rounded-[234px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Buttons/Button" onClick={onClick}>
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

function Actions({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail') => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <ButtonsButton3 onClick={() => onNavigate?.('blog')} />
    </div>
  );
}

function Container6({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center px-[16px] py-0 relative w-full">
          <Content10 />
          <Actions onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function BlogSection({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail') => void }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[64px] relative shrink-0 w-full z-[2]" data-name="Blog section">
      <Container5 />
      <Container6 onNavigate={onNavigate} />
    </div>
  );
}

function Group1000003697() {
  return (
    <div className="h-[16.29px] relative shrink-0 w-[36.367px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 17">
        <g id="Group 1000003696">
          <path d={svgPaths.p2cbdef00} fill="var(--fill-0, white)" id="Vector 2" />
          <path d={svgPaths.p19f24700} fill="var(--fill-0, white)" id="Vector 1" />
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

function Content11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame1000003794 />
    </div>
  );
}

function Frame1000003768() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Content11 />
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

function Content12() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[60px] items-start relative shrink-0 w-full" data-name="Content">
      <FooterLinksColumn />
      <FooterLinksColumn1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Frame1000003768 />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
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
          <Content13 />
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

function TextPadding2() {
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
          <TextPadding2 />
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
      <ButtonsButton9 />
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

function Content14() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Newsletter />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Frame1000003770() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Container8 />
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

function Frame1000003771({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="content-stretch flex flex-col font-['Avenir:Regular',_sans-serif] gap-[16px] items-start leading-[24px] not-italic relative shrink-0 text-white w-full">
      <FooterLinks2 onNavigate={onNavigate} />
      <p className="min-w-full relative shrink-0 text-[15px] w-[min-content]">© 2025 Pishon Communities. All rights reserved.</p>
    </div>
  );
}

function Content15({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[32px] px-0 relative shrink-0 w-full" data-name="Content">
      <SocialIcons />
      <Frame1000003771 onNavigate={onNavigate} />
    </div>
  );
}

function Container9({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[16px] py-0 relative w-full">
          <Content15 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-[#155eef] box-border content-stretch flex flex-col gap-[48px] items-center overflow-clip px-0 py-[48px] relative shrink-0 w-[375px] z-[1]" data-name="Footer">
      <Container7 />
      <Frame1000003770 />
      <Container9 onNavigate={onNavigate} />
    </div>
  );
}

export default function Mobile({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'contact' | 'projects' | 'projectDetail' | 'blog' | 'blogDetail' | 'privacyPolicy' | 'termsOfService' | 'cookiesPolicy') => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-center relative size-full" data-name="Mobile">
      <DropdownHeaderNavigation1 onNavigate={onNavigate} />
      <BlogPostPageHeader />
      <SectionDivider />
      <BlogSection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}