import { LegoLink } from '../types/Lego';

interface LegoProductCardProps {
    productName: string;
    productInfo: LegoLink;
    linkRegion: string;
}

const LegoProductCard = ({ productName, productInfo, linkRegion }: LegoProductCardProps) => {
    const productLink = linkRegion === "USA" ? productInfo.usProductLink :
        linkRegion === "Canada" ? productInfo.caProductLink :
        "";
    const price = linkRegion === "USA" ? `$${productInfo.usdPrice}` :
        linkRegion === "Canada" ? `$${productInfo.cadPrice}` :
        "";

    return (
        <a href={productLink} className="group border border-gray-300 rounded-md p-4 mb-4 flex flex-col items-center gap-4 h-120 hover:border-red-500">
            <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                <img src={productInfo.imageUrl} alt={productName} className="w-full h-full object-cover" />
            </div>
            <div className=" w-full flex flex-col items-start gap-2">
                <div className="flex flex-row items-center gap-4">
                    <h3 className="text-xl font-bold group-hover:text-red-500">{productName}</h3>
                </div>
                <p className="text-sm group-hover:text-red-500">{productInfo.description}</p>
                <p className="text-2xl font-bold">{price}</p>
                <div className="mt-4">
                    {productInfo.kennyHas && (
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                            </svg>
                            <span className="text-sm text-green-500">Kenny has this!</span>
                        </div>
                    )}
                    {productInfo.kennyWants && (
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="text-sm text-yellow-500">Kenny wants this!</span>
                        </div>
                    )}
                </div>
            </div>
        </a>
    )
}

export default LegoProductCard;