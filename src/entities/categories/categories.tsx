import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className: string;
  array: string[];
};

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Десерты'];


export const Categories: React.FC<Props> = ({ className, array }) => {
  const activeIndex = 0;
  return (
    <div
      className={cn(" inline-flex gap-2 bg-gray-50 p-1 rounded-md", className)}
    >
      {array.map((item, i) => (
        <Link
          key={item}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href=""
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
