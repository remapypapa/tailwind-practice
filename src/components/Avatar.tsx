type AvatarProps = {
  src: string;
};
export default function Avatar({ src }: AvatarProps) {
  return (
    <img src={src} className="aspect-square w-16 rounded-full object-cover" />
  );
}
