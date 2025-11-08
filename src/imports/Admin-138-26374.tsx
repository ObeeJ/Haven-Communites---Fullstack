import svgPaths from "./svg-pn5n5h9mf6";
import img from "figma:asset/69c2d48ba81567d28893e15cd0baf517c39f52ee.png";
import img1 from "figma:asset/12e57dc8c26ffbd65d754a3814aa245e717c32a7.png";
import img2 from "figma:asset/e2d07def1dbd591c5182a37dfedc9ff110ae94d9.png";
import img3 from "figma:asset/0f4f2fcb6049962790ac0a2810925489622b792c.png";
import img4 from "figma:asset/9f4ea61beb99ae8c2da093d59eccf06f640e117f.png";
import img5 from "figma:asset/ec3b79fff1564d645f4f2bda89407b5d61d9afd9.png";
import img6 from "figma:asset/54e0943ca661c94f801320e0a56b7ad7c9f5f2c3.png";
import img7 from "figma:asset/ba1ddf4cdff400161fdff3d4a651265bb53152a4.png";

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
      <p className="font-['Avenir:Heavy',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#155eef] text-[30px] w-full">Publish a blog</p>
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
          <p className="font-['Avenir:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#475467] text-[16px] w-[min-content]">Publish a blog for your users</p>
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

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Olivia Rhye</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">20 Jan 2025</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText1 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Homes</p>
    </div>
  );
}

function AttributionCard() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content3 />
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

function Image() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img} />
      <BottomPanel />
    </div>
  );
}

function HeadingAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Facilisis et ut duis parturient.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Netus malesuada eu lectus posuere eu nec turpis pharetra. Egestas tellus at duis sed natoque vitae sapien. Dictum.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Phoenix Baker</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">19 Jan 2025</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText2 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Homes</p>
    </div>
  );
}

function AttributionCard1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content5 />
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

function Image1() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img1} />
      <BottomPanel1 />
    </div>
  );
}

function HeadingAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Phasellus sodales aliquam.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Mus tortor cursus in at lacus sagittis tristique massa egestas. Vitae et sagittis nisl arcu convallis sagittis duis arcu massa.</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText1 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Lana Steiner</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">18 Jan 2025</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText3 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Investment</p>
    </div>
  );
}

function AttributionCard2() {
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

function BottomPanel2() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img2} />
      <BottomPanel2 />
    </div>
  );
}

function HeadingAndText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Dictum tempus fermentum.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dictumst convallis dui enim aliquet. Nibh vestibulum adipiscing quis elit habitant. Neque est amet convallis donec faucibus.</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText2 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Alec Whitten</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">17 Jan 2025</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText4 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Construction</p>
    </div>
  );
}

function AttributionCard3() {
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

function BottomPanel3() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img3} />
      <BottomPanel3 />
    </div>
  );
}

function HeadingAndText3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Urna sagittis euismod nisi.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Cursus gravida ipsum suspendisse auctor. Donec ultrices vestibulum vestibulum quam odio scelerisque neque dui. In urna.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText3 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Demi Wilkinson</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">16 Jan 2025</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText5 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard4() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel4() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard4 />
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img4} />
      <BottomPanel4 />
    </div>
  );
}

function HeadingAndText4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Eu tincidunt habitant dolor.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Id diam dignissim vel tempor scelerisque.</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText4 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Candice Wu</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">15 Jan 2025</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText6 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Land</p>
    </div>
  );
}

function AttributionCard5() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel5() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard5 />
    </div>
  );
}

function Image5() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img5} />
      <BottomPanel5 />
    </div>
  );
}

function HeadingAndText5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Aenean rhoncus sit.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Consequat habitant eget porta varius.</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText5 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Natali Craig</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">14 Jan 2025</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText7 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Investment</p>
    </div>
  );
}

function AttributionCard6() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel6() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard6 />
    </div>
  );
}

function Image6() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img6} />
      <BottomPanel6 />
    </div>
  );
}

function HeadingAndText6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Amet lacus fringilla enim ut.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. A dui enim enim at. Phasellus eget eget.</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText6 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Avenir:Medium',sans-serif] relative shrink-0">Drew Cano</p>
      <p className="font-['Avenir:Regular',sans-serif] relative shrink-0">13 Jan 2025</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white w-full whitespace-pre" data-name="Content">
      <TextAndSupportingText8 />
      <p className="font-['Avenir:Heavy',sans-serif] relative shrink-0">Construction</p>
    </div>
  );
}

function AttributionCard7() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative shrink-0 w-full" data-name="Attribution card">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function BottomPanel7() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]" data-name="Bottom panel">
      <AttributionCard7 />
    </div>
  );
}

function Image7() {
  return (
    <div className="aspect-[384/256] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={img7} />
      <BottomPanel7 />
    </div>
  );
}

function HeadingAndText7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Heading and text">
      <p className="font-['Avenir:Heavy',sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Lorem ipsum dolor sit amet consectetur. Interdum vitae mattis sed.</p>
      <p className="-webkit-box font-['Avenir:Regular',sans-serif] leading-[24px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Faucibus maecenas nec potenti facilisis nunc fringilla ut vivamus elementum. Mi malesuada purus pretium sed integer sit.</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndText7 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#155eef] text-[16px] text-nowrap whitespace-pre">Read post</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.167%]" data-name="Icon">
            <div className="absolute inset-[-10%]" style={{ "--stroke-0": "rgba(0, 53, 158, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p3c881b00} id="Icon" stroke="var(--stroke-0, #00359E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155eef] h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[64px] items-center justify-center px-[18px] py-[10px] relative w-full">
          <p className="font-['Avenir:Heavy',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Add New Blog</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute inset-[20.833%]" data-name="Icon">
              <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#155eef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function ListingSearchResult() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[472px] items-start justify-center p-[16px] relative rounded-[12px] shrink-0 w-[592px]" data-name="_Listing search result">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
      <Button />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[1448px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image />
        <Content4 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image1 />
        <Content6 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image2 />
        <Content8 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image3 />
        <Content10 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image4 />
        <Content12 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image5 />
        <Content14 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image6 />
        <Content16 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-[400px] relative shrink-0" data-name="Blog post card">
        <Image7 />
        <Content18 />
      </div>
      <ListingSearchResult />
    </div>
  );
}

function ButtonWrap() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
          <div className="absolute inset-[20.833%]" data-name="Icon">
            <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p3ba8b580} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">Previous</p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#182230] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">...</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">8</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">9</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[8px] rounded-[20px] size-[40px] top-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-center text-nowrap whitespace-pre">10</p>
    </div>
  );
}

function PaginationNumbers() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Pagination numbers">
      <div className="bg-gray-50 overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content20 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content21 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content22 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content23 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content24 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content25 />
      </div>
      <div className="overflow-clip relative rounded-[20px] shrink-0 size-[40px]" data-name="_Pagination number base">
        <Content26 />
      </div>
    </div>
  );
}

function ButtonWrap1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] text-nowrap whitespace-pre">Next</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.833%]" data-name="Icon">
            <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(71, 84, 103, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content19 />
          <div className="box-border content-stretch flex gap-[12px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Pagination">
            <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
            <ButtonWrap />
            <PaginationNumbers />
            <ButtonWrap1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center pb-[96px] pt-0 px-0 relative shrink-0 w-full" data-name="Section">
      <Container2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Section">
      <Section />
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