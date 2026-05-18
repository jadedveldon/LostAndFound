import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={inputId} className="label">
        {label}
      </label>
      <input
        id={inputId}
        className="input"
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, id, className = '', ...props }: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={textareaId} className="label">
        {label}
      </label>
      <textarea
        id={textareaId}
        className="input resize-y min-h-[120px]"
        {...props}
      />
    </div>
  );
}
