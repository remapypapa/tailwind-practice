type CardProps = {
  title: string;
  image: string;
};
export default function ImageCard({ title, image }: CardProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow transition hover:shadow-lg">
      <img
        src={image}
        className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="font-bold">{title}</h2>
      </div>
    </div>
  );
}
