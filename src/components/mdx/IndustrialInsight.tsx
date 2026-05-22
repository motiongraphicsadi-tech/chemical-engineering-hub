type Props = {
    children: React.ReactNode;
  };
  
  export default function IndustrialInsight({
    children,
  }: Props) {
    return (
  
      <div
        className="
          my-8
          rounded-xl
          border
          border-blue-500/30
          bg-blue-500/10
          p-6
        "
      >
  
        {/* Label */}
        <div
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-blue-300
          "
        >
          Industrial Insight
        </div>
  
        {/* Content */}
        <div
          className="
            text-gray-200
            leading-8
          "
        >
          {children}
        </div>
  
      </div>
    );
  }