import React from "react";

export default function ScheduleWidget() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous render (important for route changes)
    containerRef.current.innerHTML = "";

    // Widget mount node
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "wl-widget";
    widgetDiv.setAttribute("data", "k_skin=28591&k_business=136685");
    containerRef.current.appendChild(widgetDiv);

    // External script
    const script = document.createElement("script");
    script.id = "wellnessliving-widget-script";
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.type = "text/javascript";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Keeps layout stable while widget loads */}
      <div
        ref={containerRef}
        aria-label="Live class schedule widget"
        className="min-h-[500px]"
      />
      <div className="mt-3 text-sm text-gray-600">
        If the schedule doesn’t load,{" "}
        <a
          href="https://www.wellnessliving.com/schedule/miracleperformance"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:underline"
        >
          open the full schedule here
        </a>
        .
      </div>
    </div>
  );
}
