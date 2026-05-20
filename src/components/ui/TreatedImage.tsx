import React from 'react';

interface TreatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function TreatedImage({ className = "", ...props }: TreatedImageProps) {
  return (
    <div className={`photo-treatment ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} />
    </div>
  );
}
