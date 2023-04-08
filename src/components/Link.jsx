import React from "react";

export default function Link({ className, href, children }) {
  const onClick = (e) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // prevent full page reload
    e.preventDefault();

    //manually update the URL in the browser
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
