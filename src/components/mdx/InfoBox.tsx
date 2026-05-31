type Props = {
    children: React.ReactNode;
  };
  
  export default function InfoBox({
    children,
  }: Props) {
    return (
      <div
        className="
          my-8
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900/60
          p-6
        "
      >
        
  
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