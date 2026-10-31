export default function PagePreview({
  label,
  selected,
}: {
  label: string;
  selected: boolean;
}) {
  return (
    <div
      data-page-preview
      className="relative z-10 min-h-0 w-[30vw] min-w-40 shrink-0 max-[640px]:w-[min(70vw,max(0px,25dvh))] max-[640px]:min-w-0 sm:w-[15vw]"
    >
      <div
        className={`flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-code-board-gradient px-3 text-center transition-all duration-500 ${
          selected ? "scale-[0.97] opacity-100" : "scale-100 opacity-55"
        }`}
      >
        <p className="text-lg font-medium sm:text-base">{label}</p>
      </div>
    </div>
  );
}
