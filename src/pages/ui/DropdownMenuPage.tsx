import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu";
import { Link } from "react-router-dom";

export default function DropdownMenuPage() {
  return (
    <div className="p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 戻る
      </Link>

      <h1 className="mb-8 mt-6 text-3xl font-bold">
        React UI Components DropdownMenu
      </h1>

      <DropdownMenu />
    </div>
  );
}
