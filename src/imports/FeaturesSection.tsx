import svgPaths from "./svg-9uiwjksku4";
import imgContent from "figma:asset/57a875cbf43f15352e91851211914a72f3de3820.png";

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[44px] not-italic relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">What we offer our Clients</p>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Avenir:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[#535862] text-[20px] w-full">We offer a wide range of product and services, each tailored to the specific needs of our customers.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start max-w-inherit px-[32px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function MarkerPin04() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="marker-pin-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="marker-pin-04">
          <path d={svgPaths.p2e30000} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <MarkerPin04 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Land Banking</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We provide lands for investment opportunities where customers can earn an appreciable ROI.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function FeatureText() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon />
      <Content1 />
    </div>
  );
}

function Globe05() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="globe-05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="marker-pin-04">
          <path d={svgPaths.p2e30000} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <Globe05 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Buy and Build Lands</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We provide lands that customers can buy and build their dream homes on. Infrastructures are already in place.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText1 />
    </div>
  );
}

function FeatureText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon1 />
      <Content2 />
    </div>
  );
}

function Building07() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="building-07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="building-07">
          <path d={svgPaths.p12238580} id="Icon" stroke="var(--stroke-0, #155EEF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
      <div className="overflow-clip relative rounded-[inherit] size-[48px]">
        <Building07 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_rgba(10,13,18,0.18),0px_-2px_0px_0px_inset_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start not-italic pb-0 pt-[10px] px-0 relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Avenir:Heavy',_sans-serif] leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Construction</p>
      <p className="font-['Avenir:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">We engage in construction of homes for our clients. We develop properties that our clients can truly call home.</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <TextAndSupportingText2 />
    </div>
  );
}

function FeatureText2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[560px] min-w-[320px] relative shrink-0 w-full" data-name="_Feature text">
      <FeaturedIcon2 />
      <Content3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start max-w-[560px] min-h-px min-w-px relative shrink-0" data-name="Content">
      <FeatureText />
      <FeatureText1 />
      <FeatureText2 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 grow h-[366px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-neutral-100 inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgContent} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[64px] items-center max-w-inherit px-[32px] py-0 relative w-full">
          <Content4 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[64px] items-center pb-[96px] pt-[24px] px-0 relative size-full" data-name="Features section">
      <Container />
      <Container1 />
    </div>
  );
}