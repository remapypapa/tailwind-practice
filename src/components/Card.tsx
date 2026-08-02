type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="rounded-xl bg-gray-300 p-6 shadow-md">{children}</div>;
}
