type Props = {
    children: React.ReactNode;
  };
  
  export default function WarningBox({
    children,
  }: Props) {
    return (
  
      <div
        className="
          my-8
          rounded-xl
          border
          border-yellow-500/30
          bg-yellow-500/10
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
            text-yellow-300
          "
        >
          Important
        </div>
  
        {/* Content */}
        <div
          className="
            leading-8
            text-yellow-100
          "
        >
          {children}
        </div>
  
      </div>
    );
  }