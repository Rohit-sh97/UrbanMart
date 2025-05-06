// components/Sidebar.tsx
export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
      <div className={`w-64 p-4 bg-gray-100 space-y-4 ${isOpen ? "block" : "hidden"}`}>
        <h2 className="font-bold text-lg">Filters</h2>
        <div>Price</div>
        <div>Gender</div>
        <div>Fabric</div>
        <div>Brand</div>
        <div>Size</div>
        <div>Color</div>
      </div>
    );
  }
  