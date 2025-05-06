
type ProductCardProps = {
  image: string;
  title: string;
  price: number;
};

export default function ProductCard({ image, title, price }: ProductCardProps) {
    return (
      <div className="border rounded p-4 shadow-md bg-white">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <h2 className="mt-2 front-semibold text-lg">{title}</h2>
        <p className="text-gray-700 mt-1">{price}</p>
      </div>
    );
  }
  