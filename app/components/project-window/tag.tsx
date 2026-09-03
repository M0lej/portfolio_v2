import IconLink from "../icon-link";

type props = {
  name: string;
};

export default function Tag({ name }: props) {
  return (
    <div className="px-2 py-1 w-fit h-fit outline-1 outline-deep-blue rounded-sm">
      {name}
    </div>
  );
}
