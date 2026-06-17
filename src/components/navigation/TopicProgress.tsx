type Props = {
    current: number;
    total: number;
  };
  
  export default function TopicProgress({
    current,
    total,
  }: Props) {
  
    return (
  
      <div
        className="
          mb-6
        "
      >
  
              <p
              className="
                text-xs
                font-medium
            
                text-zinc-500
              "
            >
              Topic
            
              <span className="text-emerald-400">
                {" "}
                {current}
                {" "}
              </span>
            
              of
            
              <span className="text-zinc-300">
                {" "}
                {total}
              </span>
            </p>
  
      </div>
  
    );
  }