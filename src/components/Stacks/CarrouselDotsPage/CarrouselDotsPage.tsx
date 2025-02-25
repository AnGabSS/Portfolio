interface DotsPageProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const CarrouselDotsPage = ({
  totalPages,
  currentPage,
  onPageChange,
}: DotsPageProps) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 bg-gray-300 rounded-full cursor-pointer transition-all ${
            index + 1 === currentPage
              ? "bg-opacity-100 scale-125"
              : "bg-opacity-25"
          }`}
          onClick={() => onPageChange(index + 1)}
        />
      ))}
    </div>
  );
};

export default CarrouselDotsPage;
