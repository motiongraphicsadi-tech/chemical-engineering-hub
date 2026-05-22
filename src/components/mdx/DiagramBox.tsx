type Props = {
    title: string;
    description?: string;
  
    /*
      Diagram image path
  
      Example:
      /images/heat-transfer/conduction-wall.png
    */
    image: string;
  };
  
  export default function DiagramBox({
    title,
    description,
    image,
  }: Props) {
    return (
  
      <div
        className="
          my-10
          rounded-2xl
          border
          border-blue-500/20
          bg-[#08152d]
          p-8
        "
      >
  
        {/* 
          Diagram title
        */}
        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          {title}
        </h3>
  
        {/* 
          Diagram image container
  
          Improvements:
          ✅ real engineering diagram
          ✅ responsive
          ✅ cleaner presentation
        */}
        <div
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-gray-700
            bg-black
          "
        >
  
          <img
            src={image}
            alt={title}
            className="
              w-full
              object-cover
            "
          />
  
        </div>
  
        {/* 
          Diagram description
        */}
        {description && (
  
          <p
            className="
              mt-6
              text-lg
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