type Props = {
    title?: string;
    children: React.ReactNode;
  };
  
  export default function PropertyTable({
    title,
    children,
  }: Props) {
    return (
  
      <div
        className="
          my-10
          overflow-hidden
          rounded-2xl
          border
          border-gray-700
        "
      >
  
        {/* Title */}
        {title && (
  
          <div
            className="
              border-b
              border-gray-700
              bg-gray-900
              px-6
              py-4
              text-lg
              font-semibold
              text-white
            "
          >
            {title}
          </div>
  
        )}
  
        {/* Content */}
        <div
          className="
            divide-y
            divide-gray-800
          "
        >
          {children}
        </div>
  
      </div>
    );
  }