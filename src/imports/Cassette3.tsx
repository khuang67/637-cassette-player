import svgPaths from "./cassette-purple-paths";
import { imgCover } from "./cassette-cover-purple";

interface CassetteProps {
  songName?: string;
}

function Bump() {
  return (
    <div className="absolute h-[28.821px] left-[33.02px] top-[97.53px] w-[140.29px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 29">
        <g id="Bump">
          <path d={svgPaths.p3e268400} id="Bump_2" stroke="var(--stroke-0, #202020)" strokeWidth="0.572612" />
          <g id="Holes">
            <circle cx="21.3775" cy="19.4941" fill="var(--fill-0, #202020)" id="Ellipse 118" r="5.34438" />
            <circle cx="118.772" cy="19.4941" fill="var(--fill-0, #202020)" id="Ellipse 119" r="5.34438" />
            <rect fill="var(--fill-0, #202020)" height="7.25309" id="Rectangle 1518" rx="1.14522" width="7.25309" x="37.4107" y="14.1497" />
            <rect fill="var(--fill-0, #202020)" height="7.25309" id="Rectangle 1519" rx="1.14522" width="7.25309" x="95.4858" y="14.1497" />
          </g>
          <g clipPath="url(#clip0_388_837)" id="Screw">
            <path d={svgPaths.p2ce81400} fill="var(--fill-0, #202020)" id="Subtract" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_388_837">
            <rect fill="white" height="6.87135" transform="translate(66.5437 2.12487)" width="6.87135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screw() {
  return (
    <div className="absolute left-[5.15px] size-[6.871px] top-[5.15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g clipPath="url(#clip0_388_314)" id="Screw">
          <path d={svgPaths.p21349be0} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_388_314">
            <rect fill="white" height="6.87135" width="6.87135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screw1() {
  return (
    <div className="absolute bottom-[5.51px] left-[5.15px] size-[6.871px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g clipPath="url(#clip0_388_314)" id="Screw">
          <path d={svgPaths.p21349be0} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_388_314">
            <rect fill="white" height="6.87135" width="6.87135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screw2() {
  return (
    <div className="absolute right-[5.29px] size-[6.871px] top-[5.15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g clipPath="url(#clip0_388_314)" id="Screw">
          <path d={svgPaths.p21349be0} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_388_314">
            <rect fill="white" height="6.87135" width="6.87135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screw3() {
  return (
    <div className="absolute bottom-[5.51px] right-[5.29px] size-[6.871px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g clipPath="url(#clip0_388_314)" id="Screw">
          <path d={svgPaths.p21349be0} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_388_314">
            <rect fill="white" height="6.87135" width="6.87135" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screws() {
  return (
    <div className="absolute contents left-[5.15px] top-[5.15px]">
      <Screw />
      <Screw1 />
      <Screw2 />
      <Screw3 />
    </div>
  );
}

function SunGraphic() {
  return (
    <div className="absolute left-[85.51px] size-[109.178px] top-[-11.83px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
        <g id="SunGraphic">
          <path d={svgPaths.pdfcc980} fill="var(--fill-0, #FF6B35)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function CirclesOutlineCombined() {
  return (
    <div className="relative shrink-0 size-[9.862px]">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Circles outline combined">
            <path d={svgPaths.p3beb2680} fill="var(--fill-0, #FAFAFA)" id="element-01" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#FF6B35] box-border content-stretch flex gap-[0.808px] items-start p-[0.647px] relative shrink-0">
      <CirclesOutlineCombined />
    </div>
  );
}

function Text({ songName }: { songName?: string }) {
  return (
    <div className="box-border content-stretch flex gap-[0.808px] h-[13.743px] items-start overflow-clip px-0 py-[1.293px] relative shrink-0">
      <p className="font-['Rock_Salt:Regular',sans-serif] leading-[0.93] not-italic relative shrink-0 text-[8.453px] text-nowrap text-white tracking-[-0.9401px] uppercase whitespace-pre">{songName || 'mudo'}</p>
    </div>
  );
}

function TapeLogo({ songName }: { songName?: string }) {
  return (
    <div className="absolute bg-[#202020] bottom-[58.91px] box-border content-stretch flex gap-[1.293px] items-center left-[9.54px] overflow-clip pl-[1.293px] pr-[0.647px] py-0">
      <Icon />
      <Text songName={songName} />
    </div>
  );
}

function ASide({ songName }: { songName?: string }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center leading-[0] left-[10.41px] not-italic text-[#f3f3f3] text-nowrap top-[38.56px]">
      <div className="flex flex-col font-['Gatwick:Bold',sans-serif] justify-center relative shrink-0 text-[11.818px] tracking-[-0.5318px]">
        <p className="leading-[0.9] text-nowrap whitespace-pre">A</p>
      </div>
      <div className="flex flex-col font-['Agrandir:Text_Bold',sans-serif] justify-center relative shrink-0 text-[6.027px] text-right tracking-[-0.3616px] uppercase">
        <p className="leading-[1.13] text-nowrap whitespace-pre">Side</p>
      </div>
    </div>
  );
}

function Cover({ songName }: { songName?: string }) {
  return (
    <div className="absolute bg-[#1a1a1a] h-[81.311px] left-[11.83px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[182.854px_81.311px] overflow-clip top-[10.69px] w-[182.854px]" style={{ maskImage: `url('${imgCover}')` }}>
      <SunGraphic />
      <TapeLogo songName={songName} />
      <ASide songName={songName} />
    </div>
  );
}

function Cover1({ songName }: { songName?: string }) {
  return (
    <div className="absolute contents left-[11.83px] top-[10.69px]">
      <Cover songName={songName} />
    </div>
  );
}

function CoverMask({ songName }: { songName?: string }) {
  return (
    <div className="absolute contents left-[11.83px] top-[10.69px]">
      <Cover1 songName={songName} />
    </div>
  );
}

function PencilThingy() {
  return (
    <div className="absolute right-[49.45px] size-[23.668px] top-[calc(50%-5.52px)] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pencil Thingy">
          <circle cx="11.834" cy="11.834" id="Ellipse 117" r="10.9751" stroke="var(--stroke-0, black)" strokeWidth="0.572612" />
          <path d={svgPaths.p11736700} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function PencilThingy1() {
  return (
    <div className="absolute left-[49.82px] size-[23.668px] top-[calc(50%-5.52px)] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pencil Thingy">
          <circle cx="11.834" cy="11.834" id="Ellipse 117" r="10.9751" stroke="var(--stroke-0, black)" strokeWidth="0.572612" />
          <path d={svgPaths.p11736700} fill="var(--fill-0, #202020)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Window() {
  return (
    <div className="absolute h-[12.216px] left-[82.27px] right-[81.9px] rounded-[1.145px] top-[calc(50%-5.52px)] translate-y-[-50%]">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-full relative shrink-0 w-[21.378px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 13">
            <path d={svgPaths.p26388880} fill="var(--fill-0, #202020)" id="Tape" />
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#202020] border-[0.573px] border-solid inset-0 pointer-events-none rounded-[1.145px]" />
    </div>
  );
}

export default function Cassette({ songName }: CassetteProps) {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f5f5f5] h-[125.211px] left-[0.57px] rounded-[8.398px] top-[0.57px] w-[204.995px]">
        <div aria-hidden="true" className="absolute border-[#202020] border-[0.573px] border-solid inset-[-0.57px] pointer-events-none rounded-[8.97061px]" />
      </div>
      <Bump />
      <Screws />
      <CoverMask songName={songName} />
      <div className="absolute h-[81.311px] left-[11.83px] right-[11.59px] top-[10.69px]">
        <div className="absolute inset-[-0.35%_-0.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 82">
            <path d={svgPaths.p37da2ac0} id="Outer" stroke="var(--stroke-0, #202020)" strokeWidth="0.572612" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.18%_20.56%_40.94%_20.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 34">
          <path d={svgPaths.p2f910c00} fill="var(--fill-0, #F5F5F5)" id="BG" stroke="var(--stroke-0, #202020)" strokeWidth="0.572612" />
        </svg>
      </div>
      <PencilThingy />
      <PencilThingy1 />
      <Window />
    </div>
  );
}