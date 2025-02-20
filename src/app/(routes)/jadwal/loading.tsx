"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-96 md:h-[500px] lg:h-[800px] mt-5 md:mt-8 lg:mt-10 scale-50 md:scale-75 lg:scale-100">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid #F4AA3D;
          border-top: 8px solid #15575B;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
