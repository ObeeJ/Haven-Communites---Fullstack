import svgPaths from "./svg-xj80w2ioam";
import imgCard from "figma:asset/273e54c9def086e2a9e14d6a9216fe2ba58fcf02.png";
import imgCard1 from "figma:asset/05693c11afbf0b379d5b90d3bfa4c05a01ac5baf.png";
import imgCard2 from "figma:asset/d3527a8bfa4f11abe21e46cce52b7399cd665b38.png";
import imgCard3 from "figma:asset/c8c3910b0bde189c685f51c99681f3fd68c8b6ba.png";

function HeadingAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start max-w-[768px] min-h-px min-w-[480px] not-italic relative shrink-0" data-name="Heading and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Our Communities</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">
        <span>{`This is not a home away from home, this is `}</span>
        <span className="font-['Avenir:Heavy',_sans-serif] not-italic">HOME</span>.
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start justify-between relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function CompanyAndQuote() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin01 />
    </div>
  );
}

function TextAndAction() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote />
          <ButtonsButton />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard} />
      <TextAndAction />
    </div>
  );
}

function CompanyAndQuote1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin2 />
    </div>
  );
}

function TextAndAction1() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote1 />
          <ButtonsButton1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard1} />
      <TextAndAction1 />
    </div>
  );
}

function CompanyAndQuote2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin3 />
    </div>
  );
}

function TextAndAction2() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote2 />
          <ButtonsButton2 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard2} />
      <TextAndAction2 />
    </div>
  );
}

function CompanyAndQuote3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Company and quote">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Eden Court</p>
    </div>
  );
}

function MarkerPin4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="marker-pin-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="marker-pin-01">
          <g id="Icon">
            <path d={svgPaths.p1b144480} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1fac11a0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonsButton3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
      <p className="font-['Avenir:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Ogun State</p>
      <MarkerPin4 />
    </div>
  );
}

function TextAndAction3() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] relative rounded-[8px] shrink-0 w-full" data-name="Text and action">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <CompanyAndQuote3 />
          <ButtonsButton3 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[504px] items-start justify-end p-[24px] relative rounded-[8px] shrink-0 w-[384px]" data-name="Card">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgCard3} />
      <TextAndAction3 />
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Case studies">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowLeft />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.pbf7d180} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TestiomonialCarouselArrow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="_Testiomonial carousel arrow">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <ArrowRight />
    </div>
  );
}

function Arrows() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Arrows">
      <TestiomonialCarouselArrow />
      <TestiomonialCarouselArrow1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
      <CaseStudies />
      <Arrows />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center px-0 py-[96px] relative size-full" data-name="Testimonial section">
      <Container />
    </div>
  );
}