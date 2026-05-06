import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <li>
      <article>
        <div className="aspect-295/298 w-full rounded-[14px] xl:rounded-[20px] overflow-hidden">
          <Skeleton className="h-full w-full" />
        </div>

        <div className="mt-2.5 xl:mt-4">
          <Skeleton width="70%" height={20} />
        </div>

        <div className="mt-1 xl:mt-2">
          <Skeleton width={100} height={16} />
        </div>

        <div className="mt-0.5 xl:mt-2 flex items-center gap-1.5 xl:gap-2.5">
          <Skeleton width={80} height={28} />
          <Skeleton width={60} height={28} />
        </div>
      </article>
    </li>
  );
}

export default ProductSkeleton;
