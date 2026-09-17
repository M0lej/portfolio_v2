import Image from "next/image";

export default function PagePreview({
  label,
  selected,
  imgPath,
}: {
  label: string;
  selected: boolean;
  imgPath: string;
}) {
  return (
    <div
      data-page-preview
      className="relative z-10 w-[30vw] min-w-40 shrink-0 max-[640px]:w-[min(70vw,24rem)]  sm:w-[15vw]"
    >
      <div
        className={`aspect-video overflow-hidden rounded-lg transition-all duration-500 ${
          selected ? "scale-[0.97] opacity-100" : "scale-100 opacity-55"
        }`}
      >
        <Image
          src={imgPath}
          alt={`Podgląd strony: ${label}`}
          width={500}
          height={250}
          className="h-full w-full rounded-lg object-fill"
        />
      </div>
      <p
        className={`mt-2 truncate text-center text-[0.65rem] transition-colors sm:text-xs ${
          selected ? "text-foreground" : "text-secondary"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
