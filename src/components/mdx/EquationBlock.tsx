type Props = {
    title: string;
    equation: string;
    description?: string;
  };
  
  export default function EquationBlock({
    title,
    equation,
    description,
  }: Props) {
    return (
  
      <div
        className="
          my-10
          rounded-2xl
          border
          border-blue-500/20
          bg-gray-900
          p-6
        "
      >
  
        {/* Equation title */}
        <h3
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          {title}
        </h3>
  
        {/* Equation */}
        <div
          className="
            mt-6
            overflow-x-auto
            rounded-xl
            bg-black
            px-6
            py-5
            text-center
            text-2xl
            text-blue-300
            font-mono
          "
        >
          {equation}
        </div>
  
        {/* Description */}
        {description && (
  
          <p
            className="
              mt-5
              leading-8
              text-gray-300
            "
          >
            {description}
          </p>
  
        )}
  
      </div>
    );
  }