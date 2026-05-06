import { assetUrl } from '../lib/assets';

const subuzMark = assetUrl('image-17.png');

export type WatermarkPlacement =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left';

interface SubuzPhotoWatermarkProps {
  placement?: WatermarkPlacement;
  size?: 'sm' | 'md';
}

const placementClass: Record<WatermarkPlacement, string> = {
  'bottom-right': 'bottom-2.5 right-2.5 md:bottom-3.5 md:right-3.5',
  'bottom-left': 'bottom-2.5 left-2.5 md:bottom-3.5 md:left-3.5',
  'top-right': 'top-2.5 right-2.5 md:top-3.5 md:right-3.5',
  'top-left': 'top-2.5 left-2.5 md:top-3.5 md:left-3.5',
};

export function SubuzPhotoWatermark({
  placement = 'bottom-right',
  size = 'md',
}: SubuzPhotoWatermarkProps) {
  const h =
    size === 'sm'
      ? 'h-[14px] min-[375px]:h-4'
      : 'h-[17px] min-[375px]:h-5 sm:h-6';

  return (
    <div
      className={`pointer-events-none absolute z-[2] flex max-w-[min(58vw,13rem)] ${placementClass[placement]}`}
      aria-hidden
    >
      <div className="flex items-center gap-1 rounded-md bg-white/86 px-1.5 py-1 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-white/65 backdrop-blur-[3px] min-[375px]:gap-1.5 min-[375px]:px-2 sm:py-1.5">
        <img src={subuzMark} alt="" className={`${h} w-auto`} loading="lazy" decoding="async" />
        <span className="hidden text-[0.56rem] font-semibold uppercase leading-tight tracking-wide text-slate-800 min-[390px]:inline sm:text-[0.65rem]">
          Agua de mesa y hielo
        </span>
      </div>
    </div>
  );
}
