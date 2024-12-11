const Card = ({ className, children, ...props }) => {
    return (
      <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const CardContent = ({ className, children, ...props }) => {
    return (
      <div className={`p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  export { Card, CardContent };