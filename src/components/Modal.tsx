type ModalProps = {
  open: boolean;
  children: React.ReactNode;
};
export default function Modal({ open, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="mx-auto mt-24 w-96 rounded-xl bg-white/50 p-6">
        {children}
      </div>
    </div>
  );
}
