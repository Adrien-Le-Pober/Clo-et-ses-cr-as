import { Link } from "react-router";

interface TaxonomyItemProps {
    name: string;
    images: string[];
    slug: string;
}

export default function taxonomyItem({ name, images, slug }: TaxonomyItemProps) {
    return (
        <Link to={`/categories/${slug}`} className="flex flex-col hover:opacity-80">
            <span className="text-center text-xl uppercase">{name}</span>
            {images.length > 0 ? (
                <img src={images[0]} alt={name} className="w-full aspect-video object-cover shadow" />
            ) : (
                <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
                    <span>No Image</span>
                </div>
            )}
        </Link>
    )
}