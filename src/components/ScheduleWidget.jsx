import React from 'react';

export default function ScheduleWidget() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Clear anything previously rendered
    containerRef.current.innerHTML = '';

    // 1) Add the widget container div
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'wl-widget';
    // IMPORTANT: use plain "&" here (not &amp;) since we're setting an attribute programmatically
    widgetDiv.setAttribute('data', 'k_skin=28591&k_business=136685');
    containerRef.current.appendChild(widgetDiv);

    // 2) Add the script tag AFTER the container is in the DOM
    const script = document.createElement('script');
    script.src = 'https://www.wellnessliving.com/rs/skin-widget-static.js';
    script.type = 'text/javascript';
    script.async = true;
    containerRef.current.appendChild(script);

    // (Optional) Cleanup on unmount
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} />;
}
