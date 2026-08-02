type BadgeProps = {
  children: React.ReactNode;
};
export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
      {children}
    </span>
  );
}
